'use client';

import React from 'react';
import { Sparkles, Shield, Mail } from 'lucide-react';

interface FooterProps {
  onOpenLeads: () => void;
  onOpenChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeads, onOpenChat }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-300 text-sm">METAMORFOSIS & TRACCIÓN 2026</div>
            <div>Ecosistema de psicología aplicada, mindset y alto rendimiento</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <button
            onClick={() => onOpenChat()}
            className="hover:text-amber-400 transition-colors"
          >
            Hablar con Aura
          </button>
          <button
            onClick={onOpenLeads}
            className="hover:text-amber-400 transition-colors"
          >
            Panel de Leads (Admin)
          </button>
          <a
            href="mailto:soporte@ejemplo.com"
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Soporte Humano</span>
          </a>
        </div>

        <div className="text-center md:text-right">
          <div>© {new Date().getFullYear()} Todos los derechos reservados.</div>
          <div className="text-[11px] text-slate-600 mt-0.5">Optimizado para despliegue en Vercel</div>
        </div>

      </div>
    </footer>
  );
};
