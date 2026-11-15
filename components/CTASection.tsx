'use client';

import React from 'react';
import { ArrowRight, Flame, Lock } from 'lucide-react';

interface CTASectionProps {
  onOpenChat: (msg?: string) => void;
  onOpenRegister: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenChat, onOpenRegister }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.2),rgba(255,255,255,0))]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase mb-6">
          <Flame className="w-4 h-4 fill-amber-400" />
          <span>La Disciplina es Libertad</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase">
          Tus excusas ya te costaron demasiado tiempo y dinero.
        </h2>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Puedes seguir buscando atajos y quejándote de tus circunstancias, o puedes tomar la decisión implacable de entrar al ecosistema de <strong>Coral Mujaes</strong> y reprogramar tu estándar de por vida.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 active:scale-95 transition-all"
          >
            <span>Asegurar Mi Lugar en el Programa</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => onOpenChat('Aura, tengo dudas sobre qué programa de Coral Mujaes es para mí.')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900 border border-slate-700/80 hover:text-white hover:bg-slate-800 transition-all"
          >
            <span>Consultar con Aura</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>Acceso Oficial coralmujaes.com</span>
          </div>
          <div>•</div>
          <div>Comunidad de Alto Calibre</div>
          <div>•</div>
          <div>Cero Excusas Garantizado</div>
        </div>

      </div>
    </section>
  );
};
