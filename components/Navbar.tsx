'use client';

import React from 'react';
import { Sparkles, Users, MessageSquare, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenChat: () => void;
  onOpenLeads: () => void;
  unreadCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat, onOpenLeads, unreadCount = 1 }) => {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-amber-500/10 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <span className="font-black text-slate-950 text-base font-serif">CM</span>
          </div>
          <div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-white block uppercase">
              CORAL MUJAES <span className="text-amber-400 font-mono text-xs font-semibold">| AURA AI</span>
            </span>
            <span className="text-[11px] text-slate-400 font-medium">Ecosistema de Alto Rendimiento & Mentalidad</span>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-300">
          <a href="#metodo" className="hover:text-amber-400 transition-colors">Método Coral</a>
          <a href="#programas" className="hover:text-amber-400 transition-colors">Programas & CMU</a>
          <a href="#testimonios" className="hover:text-amber-400 transition-colors">Resultados</a>
          <a
            href="https://coralmujaes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400/80 hover:text-amber-300 inline-flex items-center gap-1 normal-case tracking-normal text-xs"
          >
            <span>coralmujaes.com</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLeads}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
            title="Panel de Leads Capturados"
          >
            <Users className="w-4 h-4 text-amber-400" />
            <span>Panel Leads</span>
          </button>

          <button
            onClick={onOpenChat}
            className="relative inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Hablar con Aura</span>
            {unreadCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 text-[10px] text-slate-950 font-black items-center justify-center">
                  {unreadCount}
                </span>
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
