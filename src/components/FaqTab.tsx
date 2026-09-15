import React, { useState } from 'react';
import { TabType } from '../types';
import { FAQ_ITEMS, CLINIC_INFO } from '../data/clinicData';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  MessageCircle, 
  Phone,
  CalendarCheck,
  MapPin
} from 'lucide-react';

interface FaqTabProps {
  onNavigate: (tab: TabType) => void;
}

export const FaqTab: React.FC<FaqTabProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50/80 via-white to-slate-50 py-10 sm:py-14 border-b border-slate-200">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-teal-700" />
            <span>Central de Dúvidas de Pacientes</span>
          </div>

          {/* H1 Semantic Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Perguntas Frequentes (FAQ) - OdontoCotia
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Esclareça dúvidas sobre agendamento via WhatsApp, tratamentos de canal e implantes sem dor, formas de pagamento e localização na Rua Welcome, 265 no Jardim Leonor em Cotia.
          </p>

          {/* Search box */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar dúvida (ex.: implante, endereço, dor, convênio)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 min-h-[44px] bg-white rounded-2xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-sm outline-hidden shadow-xs transition-all"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Accordion List (H2 & H3) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <AnimatedSection className="space-y-2 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-slate-900">
            Dúvidas Mais Comuns dos Nossos Pacientes de Cotia
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Clique na pergunta para ver a resposta detalhada formulada por nossos especialistas.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <StaggerItem key={idx}>
                <div
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 min-h-[56px] text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-sm">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="p-1 rounded-full text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-teal-600" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm space-y-3">
              <p>Nenhuma dúvida encontrada para o termo pesquisado.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-teal-700 font-semibold text-xs hover:underline min-h-[36px]"
              >
                Limpar pesquisa e ver todas
              </button>
            </div>
          )}
        </StaggerContainer>
      </section>

      {/* Não encontrou sua dúvida? */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-bold">
                Não encontrou a resposta para a sua dúvida?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed">
                Nossa equipe da clínica no Jardim Leonor em Cotia está pronta para esclarecer qualquer questão pelo WhatsApp ou telefone.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Estava consultando o site da OdontoCotia e tenho uma dúvida.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold min-h-[44px] px-5 py-3 rounded-xl transition-colors shadow-sm"
                title="Perguntar via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chamar no WhatsApp</span>
              </a>

              <button
                onClick={() => onNavigate('agendamento')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold min-h-[44px] px-5 py-3 rounded-xl transition-colors"
                title="Ir para agendamento online"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Agendar Consulta</span>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};
