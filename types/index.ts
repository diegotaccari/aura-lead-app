export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  quickReplies?: string[];
  cta?: {
    label: string;
    url?: string;
    action?: 'register' | 'open_modal' | 'call_support';
  };
}

export interface LeadData {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  painPoint?: string;
  qualification: 'frío' | 'tibio' | 'caliente' | 'listo_para_cerrar';
  notes?: string;
  createdAt: string;
  messageCount: number;
}

export interface ProductConfig {
  name: string;
  tagline: string;
  eventDate: string;
  format: string;
  investment?: string;
  registrationUrl: string;
  pillars: {
    title: string;
    description: string;
  }[];
}
