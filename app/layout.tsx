import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coral Mujaes | Ecosistema Oficial & Asesora Aura AI',
  description: 'Desactiva el autosabotaje, desarrolla disciplina inquebrantable y escala tus negocios digitales. Conoce a Aura, la asesora de conversión del equipo de Coral Mujaes.',
  keywords: ['Coral Mujaes', 'disciplina', 'mindset', 'Coral Mujaes University', 'infoproductos', 'alto rendimiento'],
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
