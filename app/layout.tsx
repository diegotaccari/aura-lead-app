import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Metamorfosis & Tracción 2026 | Evento de Alto Impacto',
  description: 'Rompe el autosabotaje, reconfigura tu mentalidad y acelera tus resultados profesionales. Conoce a Aura, tu asesora de transformación.',
  keywords: ['mindset', 'psicología aplicada', 'desarrollo profesional', 'conversión de leads', 'evento de inmersión'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-[#080b11] text-slate-100 antialiased selection:bg-amber-500/30 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
