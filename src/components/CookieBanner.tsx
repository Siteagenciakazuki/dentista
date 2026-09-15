import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, Check } from 'lucide-react';

interface CookieBannerProps {
  onOpenCookiePolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenCookiePolicy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('odontocotia_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('odontocotia_cookie_consent', 'accepted_all');
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('odontocotia_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside 
      className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-40 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-slate-200 animate-in slide-in-from-bottom-5 duration-300"
      aria-label="Consentimento de Cookies e LGPD"
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 bg-teal-50 text-teal-700 rounded-xl shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <h2 className="text-sm font-bold text-slate-900">
              Privacidade & Cookies (LGPD)
            </h2>
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Utilizamos cookies para aprimorar sua experiência de navegação, carregar o mapa do Google da nossa clínica em Cotia e viabilizar o agendamento seguro via WhatsApp.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              onClick={handleAcceptAll}
              className="inline-flex items-center gap-1 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors shadow-xs"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Aceitar Todos</span>
            </button>
            <button
              onClick={handleEssentialOnly}
              className="text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl transition-colors"
            >
              Apenas Essenciais
            </button>
            <button
              onClick={onOpenCookiePolicy}
              className="text-xs text-teal-700 hover:underline font-medium ml-1"
            >
              Ver Política
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
