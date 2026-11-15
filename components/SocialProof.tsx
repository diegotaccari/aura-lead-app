'use client';

import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: 'Sofía Valenzuela',
      role: 'Alumna Coral Mujaes University',
      quote:
        'Escuchar a Coral hablar de disciplina sin anestesia me hizo darme cuenta de que llevaba años victimizándome por "no tener dinero". Apliqué el método de CMU, lancé mi primer programa y en 45 días facturé \$14,000 USD.',
      rating: 5,
      result: 'Lanzamiento récord de \$14k USD',
    },
    {
      name: 'Alejandro Navarrete',
      role: 'Empresario & Atleta Amateur',
      quote:
        'Aura me hizo una pregunta clave: "¿Cuánto te cuesta quedarte igual otros 6 meses?". Entré al programa de alto rendimiento y cambié no solo mis ingresos, sino mi cuerpo y mi nivel de energía diario.',
      rating: 5,
      result: 'Multiplicó su facturación y bajó 12 kg',
    },
    {
      name: 'Mariana Duarte',
      role: 'Consultora de Negocios Digitales',
      quote:
        'Los libros de Coral me inspiraron, pero sus programas de inmersión te reprograman el cerebro. Dejé de cobrar migajas y cerré 3 contratos High-Ticket el mismo mes.',
      rating: 5,
      result: 'Paso a ofertas High-Ticket',
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Resultados de la Comunidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Casos Reales de Transformación Imparable
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between border-slate-800 relative hover:border-amber-500/30 transition-all"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="font-bold text-white text-sm">{item.name}</div>
                <div className="text-xs text-slate-400">{item.role}</div>

                <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-semibold">
                  <CheckCircle className="w-3 h-3" />
                  <span>{item.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
