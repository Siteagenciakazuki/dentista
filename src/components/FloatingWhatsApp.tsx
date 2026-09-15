import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingWhatsAppProps {
  onQuickBook: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onQuickBook }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-200 max-w-xs text-xs space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
            aria-label="Fechar aviso do WhatsApp"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 text-emerald-700 font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Atendimento Rápido Cotia</span>
          </div>

          <p className="text-slate-600 leading-normal">
            Olá! Quer agendar sua consulta na <strong>Rua Welcome, 265 (Jardim Leonor)</strong>? Fale agora com nossa equipe.
          </p>

          <div className="pt-1 flex items-center gap-2">
            <button
              onClick={onQuickBook}
              className="w-full text-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-2 px-3 rounded-xl transition-all shadow-xs"
              title="Abrir formulário de agendamento online rápido"
            >
              Agendar Online
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta na OdontoCotia (Rua Welcome, 265 - Jardim Leonor).')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
        title="Falar com a OdontoCotia no WhatsApp agora"
        aria-label="Conversar no WhatsApp da OdontoCotia"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-white" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
        <span className="hidden sm:inline-block font-bold text-sm tracking-tight">
          WhatsApp • Cotia
        </span>
      </a>
    </div>
  );
};
