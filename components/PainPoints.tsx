'use client';

import React from 'react';
import { AlertCircle, Clock, TrendingDown, BrainCircuit, ArrowUpRight } from 'lucide-react';

interface PainPointsProps {
  onSelectPain: (painText: string) => void;
}

export const PainPoints: React.FC<PainPointsProps> = ({ onSelectPain }) => {
  const pains = [
    {
      id: 1,
      badge: 'El Freno Invisible',
      title: 'Autosabotaje y Postergación Crónica',
      description:
        'Tienes la estrategia, sabes qué tienes que hacer, pero a la hora de la verdad inventas urgencias, limpias el escritorio o postergas esa llamada decisiva.',
      consequence:
        'Cada semana que postergas, pierdes momentum y alimentas la narrativa interna de que "no eres constante".',
      trigger: 'Siento que el autosabotaje me está impidiendo ejecutar lo que ya sé que debo hacer.',
    },
    {
      id: 2,
      badge: 'La Rueda del Hámster',
      title: 'Estancamiento: Mucho Esfuerzo, Cero Tracción',
      description:
        'Terminas el día exhausto. Has trabajado 10 horas seguidas, pero cuando miras tu cuenta bancaria o tus métricas, estás en el mismo punto que hace 6 meses.',
      consequence:
        'El costo no es solo económico: es el agotamiento mental crónico de sentir que tu esfuerzo no rinde frutos.',
      trigger: 'Estoy estancado en una meseta: trabajo sin parar pero mis ingresos y resultados no despegan.',
    },
    {
      id: 3,
      badge: 'La Parálisis Mental',
      title: 'Falta de Claridad y Síndrome del Impostor',
      description:
        'Te sobran ideas pero te falta un plan ejecutable. Y cuando quieres subir tus precios o asumir un rol más visible, una voz interna te dice que aún "te falta prepararte más".',
      consequence:
        'Sigues cobrando menos de lo que vales y dejando pasar oportunidades que personas con la mitad de tu talento sí toman.',
      trigger: 'Me frena la falta de claridad y el síndrome del impostor al momento de dar el salto.',
    },
  ];

  return (
    <section id="problema" className="py-20 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold tracking-wide uppercase mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>El Dolor Raíz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Por qué la fuerza de voluntad nunca es suficiente?
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            No se trata de levantarse a las 5:00 AM ni de forzarte a trabajar más horas. Si tu identidad y tus patrones psicológicos inconscientes van en otra dirección, el autosabotaje siempre gana.
          </p>
        </div>

        {/* 3 Pain cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain) => (
            <div
              key={pain.id}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between hover:border-slate-700/80 transition-all duration-300 relative group hover:-translate-y-1"
            >
              <div>
                <span className="text-[11px] font-mono tracking-wider font-semibold text-amber-400 uppercase bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  {pain.badge}
                </span>

                <h3 className="text-xl font-bold text-white mt-4 leading-snug">
                  {pain.title}
                </h3>

                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  {pain.description}
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-rose-300/90 flex gap-2.5 items-start">
                  <TrendingDown className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                  <div>
                    <strong className="text-rose-300 block font-semibold">El costo oculto:</strong>
                    <span>{pain.consequence}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectPain(pain.trigger)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-all py-1"
                >
                  <span>Consultar este patrón con Aura</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-indigo-950/30 border border-amber-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
              <BrainCircuit className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">¿Identificas más de un síntoma en tu rutina?</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Aura puede hacerte un diagnóstico personalizado en menos de 2 minutos para detectar el origen exacto.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectPain('Hola Aura, quiero que me hagas un diagnóstico rápido de mis bloqueos.')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors whitespace-nowrap"
          >
            Hacer Test de Diagnóstico
          </button>
        </div>

      </div>
    </section>
  );
};
