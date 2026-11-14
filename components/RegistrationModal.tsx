'use client';

import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Shield, ArrowRight } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadCaptured?: (name: string, email: string) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  onLeadCaptured,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          painPoint: 'Registro directo desde la web / CTA oficial',
          qualification: 'listo_para_cerrar',
          notes: 'Completó el formulario oficial de inscripción.',
        }),
      });

      if (onLeadCaptured) {
        onLeadCaptured(name, email);
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-lg bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden relative">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xs">
                M
              </span>
              <span className="text-xs uppercase tracking-widest font-mono text-amber-400 font-bold">
                Metamorfosis 2026
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted ? (
            <>
              <h2 className="text-2xl font-extrabold text-white">
                Asegura tu Cupo Exclusivo
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Completa tus datos para recibir la confirmación oficial, el enlace a la sala privada y el material preparatorio de despegue.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Diego Fernández"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    WhatsApp (para coordinar accesos VIP)
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+54 9 11 ..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{loading ? 'Confirmando cupo...' : 'Confirmar Mi Lugar Ahora'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Tus datos están protegidos. Cero spam garantizado.</span>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">¡Cupo Pre-Asignado!</h3>
              <p className="mt-2 text-sm text-slate-300 max-w-sm mx-auto">
                Hemos registrado a <strong className="text-amber-400">{name}</strong>. Te enviamos los detalles a <strong>{email}</strong> y nos contactaremos a tu WhatsApp.
              </p>

              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                Cerrar Ventana
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
