import React, { useState } from 'react';
import { TabType } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Menu, 
  X, 
  CalendarCheck,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenQuickBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuickBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string; title: string }[] = [
    { id: 'home', label: 'Início', title: 'Página inicial OdontoCotia' },
    { id: 'tratamentos', label: 'Tratamentos', title: 'Especialidades e tratamentos odontológicos em Cotia' },
    { id: 'sobre', label: 'Sobre & Equipe', title: 'Conheça nossos dentistas com CROSP e a clínica' },
    { id: 'estrutura', label: 'Estrutura & Tecnologia', title: 'Consultórios modernos e scanner 3D no Jardim Leonor' },
    { id: 'localizacao', label: 'Localização & Mapa', title: 'Como chegar na Rua Welcome 265, Jardim Leonor em Cotia' },
    { id: 'agendamento', label: 'Agendamento WhatsApp', title: 'Agende sua consulta online integrado ao WhatsApp' },
    { id: 'faq', label: 'FAQ', title: 'Perguntas frequentes sobre tratamentos e convênios' },
  ];

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs">
      {/* Top Bar with Cotia location & quick contacts for high conversion and SEO */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-slate-200 text-xs py-2 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start text-center sm:text-left">
            <a 
              href="#localizacao"
              onClick={(e) => { e.preventDefault(); handleNavClick('localizacao'); }}
              className="flex items-center gap-1.5 hover:text-teal-300 transition-colors py-0.5"
              title="Ver endereço da clínica na Rua Welcome 265, Jardim Leonor em Cotia"
              aria-label="Ver endereço da clínica em Cotia"
            >
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span className="truncate max-w-[260px] sm:max-w-none">{CLINIC_INFO.address.street}, {CLINIC_INFO.address.neighborhood} - Cotia, SP</span>
            </a>
            <span className="hidden md:inline-block text-slate-500">•</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Seg a Sex: 08h às 19h | Sáb: 08h às 13h</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            <a 
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-1 hover:text-teal-300 transition-colors py-0.5"
              title="Ligar para telefone fixo da clínica em Cotia"
              aria-label="Ligar para a OdontoCotia"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-semibold text-[11px] sm:text-xs">{CLINIC_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta na clínica de Cotia (Rua Welcome, 265).')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors text-[11px] sm:text-xs"
              title="Conversar direto no WhatsApp da clínica em Cotia"
              aria-label="Chamar OdontoCotia no WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium">WhatsApp: {CLINIC_INFO.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
            title="Ir para a página inicial da OdontoCotia"
            aria-label="OdontoCotia - Página Inicial"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-teal-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                  Odonto<span className="text-teal-600">Cotia</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-sm text-[10px] font-semibold bg-teal-50 text-teal-700 border border-teal-200">
                  Cotia SP
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                Rua Welcome 265 • Jardim Leonor
              </p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Navegação Principal">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-teal-700 bg-teal-50/80 shadow-xs border border-teal-200/60 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  title={item.title}
                  aria-label={item.title}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Direct Quick WhatsApp Booking CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('agendamento')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-teal-600/20 hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              title="Agendar consulta odontológica rápida via WhatsApp"
              aria-label="Agendar consulta via WhatsApp"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('agendamento')}
              className="p-2 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors"
              title="Ir direto para agendamento online"
              aria-label="Agendamento rápido"
            >
              <CalendarCheck className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <div className="pb-2 mb-3 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Clínica OdontoCotia • Jardim Leonor, Cotia - SP</span>
            <span className="text-[10px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full font-semibold">
              Rua Welcome, 265
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3.5 py-3 min-h-[44px] rounded-xl text-sm font-medium flex items-center justify-between transition-all ${
                    isActive
                      ? 'text-teal-800 bg-teal-50 font-bold border border-teal-200/80 shadow-xs'
                      : 'text-slate-700 hover:bg-slate-50 border border-transparent'
                  }`}
                  title={item.title}
                  aria-label={item.title}
                >
                  <span className="truncate">{item.label}</span>
                  {isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0"></span>
                  ) : (
                    <span className="text-[11px] text-slate-400 font-normal shrink-0">Acessar</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              onClick={() => handleNavClick('agendamento')}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white min-h-[44px] py-3 rounded-xl font-bold text-sm shadow-md"
              title="Agendar consulta odontológica em Cotia via WhatsApp"
              aria-label="Agendar consulta online integrada com WhatsApp"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de agendar consulta em Cotia.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 min-h-[44px] py-2.5 rounded-xl font-semibold text-sm transition-colors"
              title="Chamar diretamente no WhatsApp da clínica"
              aria-label="Abrir WhatsApp da clínica"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Recepção</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
