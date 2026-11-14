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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),rgba(255,255,255,0))]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase mb-6">
          <Flame className="w-4 h-4 fill-amber-400" />
          <span>La Decisión Está en tus Manos</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          El estancamiento cuesta más que cualquier solución.
        </h2>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Puedes seguir intentando resolver con más horas y más fuerza de voluntad lo que requiere un cambio de método, o puedes tomar la decisión de transformarte ahora.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 active:scale-95 transition-all"
          >
            <span>Asegurar Mi Cupo Oficial</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => onOpenChat('Aura, tengo algunas preguntas antes de registrarme.')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900 border border-slate-700/80 hover:text-white hover:bg-slate-800 transition-all"
          >
            <span>Resolver Dudas con Aura</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>Pago Seguro 256-bit</span>
          </div>
          <div>•</div>
          <div>Acceso Inmediato al Material Prep</div>
          <div>•</div>
          <div>Cupos Limitados por Sala</div>
        </div>

      </div>
    </section>
  );
};
