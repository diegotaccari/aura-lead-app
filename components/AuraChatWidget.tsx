'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  RotateCcw,
  Volume2,
  VolumeX,
  ArrowRight,
  Maximize2,
  Minimize2,
  User,
  ShieldCheck,
} from 'lucide-react';
import { ChatMessage } from '@/types';

interface AuraChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenRegister: () => void;
  externalTriggerMessage?: string;
  onResetExternalTrigger?: () => void;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-init-1',
    role: 'assistant',
    content: `¡Hola! Qué gusto saludarte. Soy **Aura**.\n\nEstoy aquí para ayudarte a identificar qué patrones o bloqueos te están impidiendo alcanzar el siguiente nivel en tu desarrollo y resultados.\n\nPara ir directo al grano: **¿cuál de estos obstáculos sientes que más te está costando resolver hoy?**`,
    timestamp: 'Ahora',
    quickReplies: [
      '1. Autosabotaje y postergación',
      '2. Estancamiento (trabajo sin ver avance)',
      '3. Falta de claridad y síndrome del impostor',
    ],
  },
];

export const AuraChatWidget: React.FC<AuraChatWidgetProps> = ({
  isOpen,
  onToggle,
  onOpenRegister,
  externalTriggerMessage,
  onResetExternalTrigger,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Play subtle feedback chime using Web Audio API
  const playChime = () => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {
      // Audio autoplay restrictions or unsupported
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  // Handle external trigger if user clicks a button on the landing page
  useEffect(() => {
    if (externalTriggerMessage) {
      sendMessage(externalTriggerMessage);
      if (onResetExternalTrigger) {
        onResetExternalTrigger();
      }
    }
  }, [externalTriggerMessage]);

  const sendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMessage: ChatMessage = {
      id: 'usr-' + Date.now(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) {
        throw new Error('Network error');
      }

      const data = await response.json();

      const assistantMsg: ChatMessage = {
        id: 'aura-' + Date.now(),
        role: 'assistant',
        content: data.content || 'Disculpa, tuve un breve titubeo. ¿Podrías repetirme eso?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies: data.quickReplies,
        cta: data.cta,
      };

      setMessages((prev) => [...prev, assistantMsg]);
      playChime();

      // Check if user provided contact details to auto-qualify lead
      const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
      if (emailMatch) {
        fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: emailMatch[0],
            painPoint: 'Compartió contacto durante la conversación con Aura',
            qualification: 'caliente',
            messageCount: newMessages.length,
          }),
        }).catch(() => {});
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: 'err-' + Date.now(),
          role: 'assistant',
          content: 'Lo que mencionas es clave. Para darte el camino exacto y asegurar que no te quedes en el camino, ¿qué impacto concreto buscas tener en tus ingresos o tu vida este mes?',
          timestamp: 'Ahora',
          quickReplies: ['Multiplicar mis resultados', 'Tener claridad y calma', 'Asegurar mi cupo'],
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  // Helper to render bold markdown (**bold**) into nice HTML
  const formatText = (content: string) => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="text-amber-300 font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-slate-900 border border-amber-500/40 text-white shadow-2xl shadow-amber-500/30 hover:border-amber-400 hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Abrir chat con Aura"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-indigo-600 flex items-center justify-center font-black text-slate-950 text-sm shadow-md">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
            </span>
          </div>

          <div className="hidden sm:block text-left pr-1">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Aura</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-normal">
                Online
              </span>
            </div>
            <div className="text-[11px] text-slate-400">¿Dudas o estancamiento? Habla conmigo</div>
          </div>
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div
          className={`fixed z-50 bg-slate-950 border border-slate-800 shadow-2xl flex flex-col transition-all duration-300 overflow-hidden ${
            isExpanded
              ? 'inset-3 sm:inset-6 md:inset-12 rounded-2xl'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[600px] max-h-[85vh] rounded-2xl'
          }`}
        >
          {/* Header */}
          <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-indigo-600 flex items-center justify-center font-bold text-slate-950 shadow-md">
                  <Sparkles className="w-4 h-4 text-slate-950" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-900 rounded-full" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-white flex items-center gap-1.5">
                  Aura
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 font-semibold border border-amber-400/20">
                    IA Conversión & Mindset
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400">Directa, empática y orientada a tu siguiente nivel</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-400">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                title={soundEnabled ? 'Silenciar sonidos' : 'Activar sonidos'}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              </button>

              <button
                onClick={resetChat}
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                title="Reiniciar conversación"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden sm:inline-flex p-1.5 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                title={isExpanded ? 'Contraer' : 'Expandir'}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={onToggle}
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                title="Cerrar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Conversation Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-950 to-slate-900/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-amber-400 text-slate-950 font-medium rounded-br-xs shadow-md shadow-amber-500/10'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-xs'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{formatText(msg.content)}</div>

                  {/* Inside-chat Call To Action Button */}
                  {msg.cta && (
                    <div className="mt-3 pt-3 border-t border-slate-800">
                      <button
                        onClick={onOpenRegister}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all active:scale-95"
                      >
                        <span>{msg.cta.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>

                {/* Quick replies chips */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => sendMessage(reply)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-slate-900/90 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 hover:border-amber-400 active:scale-95 transition-all text-left"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Aura Typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 p-3 bg-slate-900 border border-slate-800 rounded-2xl w-24">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" />
                <span
                  className="w-2 h-2 rounded-full bg-amber-400 animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-amber-400 animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick objection pills */}
          <div className="px-3 py-2 bg-slate-950 border-t border-slate-900 flex items-center gap-2 overflow-x-auto text-[11px] text-slate-400">
            <span className="shrink-0 text-slate-500 font-semibold">Preguntar:</span>
            <button
              onClick={() => sendMessage('¿Cuánto cuesta el acceso al programa?')}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 shrink-0 transition-colors"
            >
              💰 Precio
            </button>
            <button
              onClick={() => sendMessage('Siento que no tengo tiempo suficiente para esto')}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 shrink-0 transition-colors"
            >
              ⏳ Falta de Tiempo
            </button>
            <button
              onClick={() => sendMessage('Quiero registrarme y asegurar mi lugar')}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 shrink-0 transition-colors"
            >
              🚀 Registro
            </button>
          </div>

          {/* Input bar */}
          <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu mensaje o duda aquí..."
              className="flex-1 bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm px-4 py-2.5 rounded-xl focus:outline-none focus:border-amber-400 transition-colors"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!inputValue.trim() || isTyping}
              className="p-2.5 bg-amber-400 text-slate-950 rounded-xl font-bold hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
