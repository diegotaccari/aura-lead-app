'use client';

import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Martín Sotomayor',
      role: 'Consultor de Negocios & Mentor',
      quote:
        'Llevaba 8 meses diciendo que "no tenía tiempo" para lanzar mi programa grupal. En las primeras 2 semanas del método entendí que mi problema no era la agenda, sino el miedo al juicio. Hoy tengo 35 alumnos activos y trabajo menos horas.',
      rating: 5,
      result: 'Triplicó su facturación en 60 días',
    },
    {
      name: 'Camila Villalobos',
      role: 'Fundadora de Agencia Digital',
      quote:
        'Aura me hizo una pregunta que me desarmó antes de entrar: "¿Cuánto te cuesta quedarte igual?". Esa sacudida me hizo inscribirme. El pilar de claridad estratégica me devolvió los fines de semana libres.',
      rating: 5,
      result: 'Recuperó 15 horas semanales',
    },
    {
      name: 'Rodrigo Albarracín',
      role: 'Desarrollador & Creador de Software',
      quote:
        'El síndrome del impostor me hacía cobrar una miseria por proyectos enormes. Aprender a regular la psicología detrás de las decisiones me dio la autoridad para cerrar mi primer contrato de \$12,000 USD sin titubear.',
      rating: 5,
      result: 'Cierre de contrato récord',
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Historias Reales de Tracción</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            No nos creas a nosotros, cree en los resultados
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between border-slate-800 relative hover:border-amber-500/30 transition-all"
            >
              <div>
                {/* Rating stars */}
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

                <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
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
