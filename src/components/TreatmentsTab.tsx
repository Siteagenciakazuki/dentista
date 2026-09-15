import React, { useState } from 'react';
import { TabType, Treatment } from '../types';
import { TREATMENTS } from '../data/treatments';
import { CLINIC_INFO } from '../data/clinicData';
import { AnimatedSection } from './AnimatedSection';
import { 
  CalendarCheck, 
  MessageCircle, 
  Clock, 
  Check, 
  Sparkles, 
  Filter, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface TreatmentsTabProps {
  onNavigate: (tab: TabType) => void;
  selectedTreatmentId?: string;
  onSelectTreatmentForBooking: (treatmentName: string) => void;
}

export const TreatmentsTab: React.FC<TreatmentsTabProps> = ({
  onNavigate,
  selectedTreatmentId,
  onSelectTreatmentForBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Procedimentos' },
    { id: 'implantodontia', label: 'Implantes & Próteses' },
    { id: 'ortodontia', label: 'Alinhadores & Ortodontia' },
    { id: 'estetica', label: 'Estética & Clareamento' },
    { id: 'clinica', label: 'Clínica Geral & Canal' },
    { id: 'cirurgia', label: 'Cirurgias & Sisos' },
  ];

  const filteredTreatments = TREATMENTS.filter((t) => {
    if (activeCategory === 'todos') return true;
    return t.category === activeCategory;
  });

  const handleBookTreatment = (treatment: Treatment) => {
    onSelectTreatmentForBooking(treatment.name);
    onNavigate('agendamento');
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-teal-50/80 via-white to-slate-50 py-10 sm:py-14 border-b border-slate-200">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>Odontologia Especializada em Cotia - SP</span>
          </div>

          {/* H1 Semantic Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tratamentos Odontológicos Completos no Jardim Leonor
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Conheça todas as especialidades clínicas, estéticas e cirúrgicas disponíveis em nossa unidade na Rua Welcome, 265 em Cotia. Tecnologia diagnóstica 3D e foco no bem-estar.
          </p>

          {/* Filter pills with smooth overflow scrolling on mobile & tablet */}
          <div className="pt-4 sm:pt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
                title={`Filtrar por ${cat.label}`}
                aria-label={`Filtrar procedimentos: ${cat.label}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Treatments List (H2 & H3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {filteredTreatments.map((treatment) => (
            <AnimatedSection key={treatment.id}>
              <article
                id={treatment.id}
                className={`bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-md overflow-hidden p-5 sm:p-8 lg:p-10 transition-all ${
                  selectedTreatmentId === treatment.id ? 'ring-2 ring-teal-500 bg-teal-50/20' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  
                  {/* Image with semantic figure and figcaption */}
                  <div className="lg:col-span-5">
                    <figure className="rounded-2xl overflow-hidden shadow-md border border-slate-100 relative group">
                      <img
                        src={treatment.image}
                        alt={treatment.imageAlt}
                        title={treatment.name}
                        className="w-full h-56 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <figcaption className="p-3 bg-slate-900/90 text-slate-200 text-xs font-medium leading-tight">
                        <strong>Legenda:</strong> {treatment.imageCaption}
                      </figcaption>
                    </figure>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-2.5 py-1 rounded-md">
                        {treatment.category.toUpperCase()}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {treatment.durationApprox}
                      </span>
                    </div>

                    {/* H3 Heading */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {treatment.name}
                    </h3>

                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {treatment.fullDescription}
                    </p>

                    {/* Benefits & Indications Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                      <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-teal-600" />
                          Principais Indicações
                        </h4>
                        <ul className="text-xs text-slate-600 space-y-1">
                          {treatment.indications.map((ind, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-teal-600 font-bold">•</span>
                              <span>{ind}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2 bg-teal-50/50 p-4 rounded-xl border border-teal-100">
                        <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-teal-700" />
                          Vantagens & Benefícios
                        </h4>
                        <ul className="text-xs text-teal-950 space-y-1">
                          {treatment.benefits.map((ben, b) => (
                            <li key={b} className="flex items-start gap-1.5">
                              <span className="text-teal-700 font-bold">•</span>
                              <span>{ben}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => handleBookTreatment(treatment)}
                        className="inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white min-h-[44px] px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-colors"
                        title={`Agendar consulta para ${treatment.name} online`}
                      >
                        <CalendarCheck className="w-4 h-4" />
                        <span>Agendar para {treatment.name.split(' ')[0]}</span>
                      </button>

                      <a
                        href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(`Olá! Tenho interesse no tratamento de ${treatment.name} na OdontoCotia (Rua Welcome, 265). Gostaria de saber mais e agendar uma avaliação.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 min-h-[44px] px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-colors"
                        title="Chamar no WhatsApp direto com este procedimento"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        <span>WhatsApp Direto</span>
                      </a>
                    </div>
                  </div>

                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Protocolo de Tratamento em Cotia (H2 & H3) */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Como funciona o seu tratamento na OdontoCotia
            </h2>
            <p className="text-slate-400 text-sm">
              Um passo a passo seguro, transparente e planejado digitalmente do início à manutenção.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Avaliação & Escaneamento',
                desc: 'Exame clínico minucioso na Rua Welcome 265 com fotografias intraorais e radiologia digital para diagnóstico preciso.'
              },
              {
                step: '02',
                title: 'Planejamento 3D',
                desc: 'Você visualiza o plano de tratamento completo, custos transparentes e tempo estimado antes de qualquer intervenção.'
              },
              {
                step: '03',
                title: 'Execução Confortável',
                desc: 'Procedimentos executados com anestesia suave, materiais de padrão internacional e ambiente estéril.'
              },
              {
                step: '04',
                title: 'Acompanhamento & Garantia',
                desc: 'Suporte pós-atendimento contínuo pelo WhatsApp e plano de manutenção preventiva semestral para a longevidade do sorriso.'
              }
            ].map((st, s) => (
              <div key={s} className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-3">
                <span className="text-3xl font-extrabold text-teal-400 font-mono">
                  {st.step}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
