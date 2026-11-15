'use client';

import React from 'react';
import { ArrowRight, Flame, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenChat: (initialMessage?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-amber-500/20 via-amber-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-8 shadow-inner">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Ecosistema Oficial Coral Mujaes • Asesora Virtual Aura</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.12] uppercase">
          La disciplina <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">no se negocia</span>. El estancamiento te cuesta millones.
        </h1>

        {/* Subhead */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Deja de tolerar la mediocridad y las excusas de dinero o tiempo. Descubre con <strong>Aura</strong> cuál de los programas de <strong>Coral Mujaes</strong> es la palanca exacta para quebrar tu techo mental y escalar tu facturación.
        </p>

        {/* Call to action buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenChat()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 active:scale-95 transition-all group"
          >
            <span>Diagnosticar mi Bloqueo con Aura</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#metodo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 hover:text-white transition-all"
          >
            <span>Conocer el Método</span>
          </a>
        </div>

        {/* Quick diagnosis triggers (chips) */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 text-xs text-slate-400">
          <span className="text-slate-500 font-medium">¿Qué te está frenando hoy? Háblalo directo con Aura:</span>
          <button
            onClick={() => onOpenChat('Coral dice que la disciplina es libertad, pero me cuesta ser constante en mis hábitos.')}
            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:text-amber-300 transition-colors"
          >
            🛑 Falta de Disciplina
          </button>
          <button
            onClick={() => onOpenChat('Tengo un negocio digital pero mis ventas están estancadas en una meseta.')}
            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:text-amber-300 transition-colors"
          >
            📈 Estancamiento Financiero
          </button>
          <button
            onClick={() => onOpenChat('Quiero conocer los programas de Coral Mujaes University (CMU).')}
            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:text-amber-300 transition-colors"
          >
            🎓 Coral Mujaes University
          </button>
        </div>

        {/* Metrics banner */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">+100,000</div>
            <div className="text-xs text-slate-400 mt-1">Vidas impactadas en Latam</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">5 Best-Sellers</div>
            <div className="text-xs text-slate-400 mt-1">Libros publicados internacionalmente</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">+150</div>
            <div className="text-xs text-slate-400 mt-1">Entrenamientos en CMU</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">8 Cifras</div>
            <div className="text-xs text-slate-400 mt-1">Facturación en infoproductos</div>
          </div>
        </div>

      </div>
    </section>
  );
};
