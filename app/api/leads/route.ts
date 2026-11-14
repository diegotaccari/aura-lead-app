import { NextRequest, NextResponse } from 'next/server';
import { LeadData } from '@/types';

// In-memory leads storage for demo & local persistence
let leadsStore: LeadData[] = [
  {
    id: 'lead-1',
    name: 'Carlos Mendoza',
    email: 'carlos.m@ejemplo.com',
    phone: '+54 9 11 4521-9874',
    painPoint: 'Estancamiento en facturación y falta de enfoque',
    qualification: 'listo_para_cerrar',
    notes: 'Pidió detalles de fechas y enlace de pago. Muy interesado.',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    messageCount: 7,
  },
  {
    id: 'lead-2',
    name: 'Valeria Rivas',
    email: 'valeria.rivas@ejemplo.com',
    phone: '+52 55 8765-4321',
    painPoint: 'Autosabotaje y postergación en lanzamiento de consultoría',
    qualification: 'caliente',
    notes: 'Resonó mucho con el tema de la psicología aplicada y hábitos.',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    messageCount: 5,
  },
  {
    id: 'lead-3',
    name: 'Esteban Morales',
    email: 'esteban.m@ejemplo.com',
    phone: '+57 310 987-6543',
    painPoint: 'Falta de tiempo y desorganización mental',
    qualification: 'tibio',
    notes: 'Aura le resolvió la objeción de tiempo. Evaluando agenda.',
    createdAt: new Date(Date.now() - 3600000 * 28).toISOString(),
    messageCount: 4,
  }
];

export async function GET() {
  return NextResponse.json({
    leads: leadsStore,
    total: leadsStore.length,
  });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const newLead: LeadData = {
      id: 'lead-' + Date.now(),
      name: data.name || 'Anónimo',
      email: data.email || '',
      phone: data.phone || '',
      painPoint: data.painPoint || 'Sin especificar',
      qualification: data.qualification || 'tibio',
      notes: data.notes || '',
      createdAt: new Date().toISOString(),
      messageCount: data.messageCount || 1,
    };

    leadsStore.unshift(newLead);

    return NextResponse.json({ success: true, lead: newLead });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
