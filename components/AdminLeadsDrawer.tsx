'use client';

import React, { useState, useEffect } from 'react';
import { X, Users, RefreshCw, Mail, Phone, Clock, MessageSquare, Download, CheckCircle, Flame } from 'lucide-react';
import { LeadData } from '@/types';

interface AdminLeadsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLeadsDrawer: React.FC<AdminLeadsDrawerProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<string>('todos');

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error('Error fetching leads:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredLeads = leads.filter((l) => {
    if (filter === 'todos') return true;
    return l.qualification === filter;
  });

  const getBadgeColor = (qual: string) => {
    switch (qual) {
      case 'listo_para_cerrar':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'caliente':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      case 'tibio':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      default:
        return 'bg-slate-700/30 text-slate-400 border-slate-600/30';
    }
  };

  const getBadgeLabel = (qual: string) => {
    switch (qual) {
      case 'listo_para_cerrar':
        return '🔥 Listo para Cerrar';
      case 'caliente':
        return '⚡ Caliente (Alto Interés)';
      case 'tibio':
        return '🌱 Tibio (En Proceso)';
      default:
        return '❄️ Frío';
    }
  };

  const exportCSV = () => {
    const headers = ['ID', 'Nombre', 'Email', 'Telefono', 'Dolor Principal', 'Cualificacion', 'Mensajes', 'Fecha'];
    const rows = leads.map(l => [
      l.id,
      `"${l.name || ''}"`,
      `"${l.email || ''}"`,
      `"${l.phone || ''}"`,
      `"${l.painPoint || ''}"`,
      l.qualification,
      l.messageCount,
      l.createdAt
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `leads_aura_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-xl h-full bg-slate-950 border-l border-slate-800 shadow-2xl flex flex-col animate-slide-up">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Panel de Conversión Aura
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                  {leads.length} leads
                </span>
              </h2>
              <p className="text-xs text-slate-400">Prospectos cualificados automáticamente por la IA</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchLeads}
              disabled={isLoading}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Refrescar"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter bar & Export */}
        <div className="p-4 border-b border-slate-800/80 bg-slate-900/40 flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-1.5 text-xs">
            {['todos', 'listo_para_cerrar', 'caliente', 'tibio'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  filter === cat
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {cat === 'todos' ? 'Todos' : cat.replace(/_/g, ' ')}
              </button>
            ))}
          </div>
          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold shrink-0 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CSV</span>
          </button>
        </div>

        {/* Leads List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {isLoading && leads.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              Cargando leads...
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No hay leads registrados en esta categoría aún.
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-white text-base">{lead.name || 'Prospecto sin nombre'}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-slate-400 mt-1">
                      {lead.email && (
                        <span className="flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5 text-amber-400" />
                          {lead.email}
                        </span>
                      )}
                      {lead.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-emerald-400" />
                          {lead.phone}
                        </span>
                      )}
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${getBadgeColor(
                      lead.qualification
                    )}`}
                  >
                    {getBadgeLabel(lead.qualification)}
                  </span>
                </div>

                {lead.painPoint && (
                  <div className="text-xs bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80 text-slate-300">
                    <span className="text-amber-400 font-semibold block mb-0.5">Dolor Raíz Detectado:</span>
                    {lead.painPoint}
                  </div>
                )}

                {lead.notes && (
                  <div className="text-xs text-slate-400 italic">
                    💡 Nota: {lead.notes}
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/60">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(lead.createdAt).toLocaleString('es-ES', {
                      dateStyle: 'short',
                      timeStyle: 'short',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3 text-slate-400" />
                    {lead.messageCount} intercambios
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/90 text-center text-xs text-slate-500">
          Aura cualifica a los leads en tiempo real evaluando urgencia, dolor y compromiso.
        </div>

      </div>
    </div>
  );
};
