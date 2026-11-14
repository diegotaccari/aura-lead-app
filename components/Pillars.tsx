'use client';

import React from 'react';
import { Layers, CheckCircle2, Shield, Compass, Flame } from 'lucide-react';

export const Pillars: React.FC = () => {
  const pillars = [
    {
      step: '01',
      title: 'Reprogramación & Desactivación del Freno',
      icon: Shield,
      description:
        'Identificamos los mandatos inconscientes y los miedos a la exposición que detonan el autosabotaje cuando estás a punto de crecer.',
      outcomes: [
        'Eliminación de la duda paralizante antes de ejecutar',
        'Técnicas de regulación del sistema nervioso ante la presión',
        'Fin de la justificación de "no tener tiempo"',
      ],
    },
    {
      step: '02',
      title: 'Arquitectura de Claridad Estratégica',
      icon: Compass,
      description:
        'Diseñas un sistema de priorización despiadado. Pasar de tener 20 cosas a medias a dominar las 3 palancas que mueven el 80% de tus ingresos.',
      outcomes: [
        'Mapa de prioridades semanales blindado contra distracciones',
        'Eliminación del trabajo reactivo ("apagar fuegos")',
        'Recuperación de 10 a 15 horas semanales de tiempo libre real',
      ],
    },
    {
      step: '03',
      title: 'Tracción & Ejecución Implacable',
      icon: Flame,
      description:
        'Instalamos rituales de acción sin fricción para que la consistencia no dependa de tu estado de ánimo ni de la motivación pasajera.',
      outcomes: [
        'Constancia que no requiere agotamiento ni estrés',
        'Confianza sólida para cobrar y posicionarte con autoridad',
        'Acompañamiento y rendición de cuentas (accountability)',
      ],
    },
  ];

  return (
    <section id="pilares" className="py-24 bg-slate-900/40 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-wide uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>El Método de Transformación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Los 3 Pilares de Tracción Definitiva
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Un sistema probado que une psicología cognitiva, diseño de hábitos y modelos de negocio de alto impacto.
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/20 to-indigo-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
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
