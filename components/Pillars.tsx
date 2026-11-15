'use client';

import React from 'react';
import { Layers, CheckCircle2, ShieldAlert, Award, TrendingUp } from 'lucide-react';

export const Pillars: React.FC = () => {
  const pillars = [
    {
      step: '01',
      title: 'Mentalidad de Alto Calibre & Cero Excusas',
      icon: ShieldAlert,
      description:
        'Desactivamos el victimismo y la necesidad de aprobación. Reprogramas tu diálogo interno para operar como una persona que ya factura y lidera a gran escala.',
      outcomes: [
        'Fin a la justificación del "no tengo tiempo" o "no tengo dinero"',
        'Elevación inmediata de tu estándar de vida y negocios',
        'Regulación emocional bajo presión extrema',
      ],
    },
    {
      step: '02',
      title: 'Disciplina Férrea de Atleta de Alto Rendimiento',
      icon: Award,
      description:
        'Coral entrena como fisicoculturista de élite y aplica la misma disciplina al negocio: consistencia matemática, hábitos diarios innegociables y foco quirúrgico.',
      outcomes: [
        'Rutinas diarias de energía y peak performance comprobadas',
        'Eliminación total de la postergación en tareas críticas',
        'Consistencia que no depende de si "tienes ganas" o no',
      ],
    },
    {
      step: '03',
      title: 'Cashflow Digital & Monetización de Alto Valor',
      icon: TrendingUp,
      description:
        'Estrategias de empaquetado de infoproductos, lanzamientos masivos y ofertas High-Ticket que han generado más de 8 cifras en el mercado hispanohablante.',
      outcomes: [
        'Estructuración de ofertas irresistibles de alto valor',
        'Sistemas de atracción de prospectos cualificados',
        'Autoridad de marca personal para cobrar con solidez',
      ],
    },
  ];

  return (
    <section id="programas" className="py-24 bg-slate-900/50 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold tracking-wide uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>La Metodología Oficial de Coral</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Los 3 Pilares del Ecosistema Coral Mujaes
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            La misma fórmula que sacó a Coral del abismo y la llevó a construir un imperio digital líder en América Latina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.step}
                className="glass-panel rounded-2xl p-8 relative flex flex-col justify-between border-slate-800 hover:border-amber-500/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-slate-700">
                      {pillar.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    {pillar.outcomes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
