import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AURA_SYSTEM_PROMPT, generateAuraFallback } from '@/lib/aura-prompt';

export async function POST(req: NextRequest) {
  try {
    const { messages, leadData } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'No messages provided' }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    const userText = lastMessage.content || '';
    const apiKey = process.env.GEMINI_API_KEY;

    let assistantReply = '';
    let quickReplies: string[] | undefined;
    let cta: { label: string; url?: string; action?: 'register' | 'open_modal' } | undefined;

    // Check if Gemini API Key is available
    if (apiKey && apiKey.trim().length > 0) {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        // Using gemini-1.5-flash for optimal speed and reliability
        const model = genAI.getGenerativeModel({
          model: 'gemini-1.5-flash',
          systemInstruction: AURA_SYSTEM_PROMPT,
        });

        // Format history for Gemini SDK
        const contents = messages.slice(0, -1).map((m: { role: string; content: string }) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }));

        contents.push({
          role: 'user',
          parts: [{ text: userText }],
        });

        const result = await model.generateContent({
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          },
        });

        const responseText = result.response.text();
        if (responseText) {
          assistantReply = responseText;
        }
      } catch (geminiError: any) {
        console.warn('Gemini API call fell back to local engine:', geminiError?.message);
        // Fallback to intelligent local engine
        const fallback = generateAuraFallback(userText, messages.length);
        assistantReply = fallback.content;
        quickReplies = fallback.quickReplies;
        cta = fallback.cta;
      }
    } else {
      // Offline / Demo intelligent engine
      const fallback = generateAuraFallback(userText, messages.length);
      assistantReply = fallback.content;
      quickReplies = fallback.quickReplies;
      cta = fallback.cta;
    }

    // Attach contextual quick replies / CTA if not present
    if (!quickReplies) {
      const lower = userText.toLowerCase();
      if (lower.includes('registrar') || lower.includes('inscrib') || lower.includes('cupo')) {
        cta = { label: 'Completar Registro Ahora', action: 'register' };
      }
    }

    return NextResponse.json({
      role: 'assistant',
      content: assistantReply,
      quickReplies,
      cta,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: error?.message },
      { status: 500 }
    );
  }
}
