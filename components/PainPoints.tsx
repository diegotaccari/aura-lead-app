'use client';

import React from 'react';
import { AlertCircle, TrendingDown, ArrowUpRight, Flame } from 'lucide-react';

interface PainPointsProps {
  onSelectPain: (painText: string) => void;
}

export const PainPoints: React.FC<PainPointsProps> = ({ onSelectPain }) => {
  const pains = [
    {
      id: 1,
      badge: 'El Autosabotaje',
      title: 'Postergación y Romperte las Promesas',
      description:
        'Dices que vas a entrenar, que vas a lanzar tu oferta, que vas a subir tus precios... pero cuando llega el momento, inventas cualquier distracción para quedarte en la zona conocida.',
      consequence:
        'Cada vez que te rompes una promesa a ti mismo, destruyes tu autoimagen y tu confianza de líder.',
      trigger: 'Siento que el autosabotaje me hace romperme las promesas a mí mismo continuamente.',
    },
    {
      id: 2,
      badge: 'La Meseta Financiera',
      title: 'Mucho Trabajo, Facturación Mediocre',
      description:
        'Trabajas 12 horas al día, pero tus ingresos siguen en el mismo número desde hace meses o años. No es falta de esfuerzo físico, es operar con un termostato financiero bajo.',
      consequence:
        'El costo real es el agotamiento crónico y la frustración de ver a personas con menos talento ganar 10 veces más.',
      trigger: 'Estoy en una meseta financiera: trabajo sin parar pero mis ventas no dan el salto a 5 o 6 cifras.',
    },
    {
      id: 3,
      badge: 'El Síndrome del Impostor',
      title: 'Miedo al Juicio y Cobrar Migajas',
      description:
        'Te comparas todo el tiempo. Crees que aún necesitas "otro curso" o "otra certificación" antes de salir a vender con autoridad. Dejas pasar negocios por no sentirte listo.',
      consequence:
        'Sigues cobrando precios bajos y tolerando clientes difíciles por miedo a no poder atraer a clientes de alto valor.',
      trigger: 'Me frena el miedo al juicio y no cobrar con la autoridad que mi trabajo merece.',
    },
  ];

  return (
    <section id="metodo" className="py-20 bg-slate-950/80 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold tracking-wide uppercase mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>La Realidad Sin Filtros</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Por qué la motivación pasajera nunca te ha funcionado?
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Como enseña Coral: <em className="text-amber-300 not-italic font-semibold">"El éxito no responde a tus emociones, responde a tus estándares."</em> Si tu psicología interna está configurada para la escasez, ningún embudo de marketing salvará tu negocio.
          </p>
        </div>

        {/* 3 Pain cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain) => (
            <div
              key={pain.id}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 relative group hover:-translate-y-1"
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
                    <strong className="text-rose-300 block font-semibold">El costo de la inacción:</strong>
                    <span>{pain.consequence}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectPain(pain.trigger)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-all py-1"
                >
                  <span>Desafiar este bloqueo con Aura</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-950/20 border border-amber-500/25 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">¿Reconoces tus excusas en este momento?</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Aura te ayuda a encontrar el programa exacto dentro de coralmujaes.com según tu etapa y presupuesto.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectPain('Hola Aura, quiero saber qué programa de Coral Mujaes se adapta mejor a mi nivel actual.')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors whitespace-nowrap"
          >
            Hacer Diagnóstico con Aura
          </button>
        </div>

      </div>
    </section>
  );
};
