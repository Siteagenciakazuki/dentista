import React from 'react';
import { TabType } from '../types';
import { CLINIC_INFO, DENTISTS, TESTIMONIALS } from '../data/clinicData';
import { TREATMENTS } from '../data/treatments';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { 
  CalendarCheck, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Clock, 
  Stethoscope, 
  Cpu, 
  Car,
  Navigation
} from 'lucide-react';

interface HomeTabProps {
  onNavigate: (tab: TabType) => void;
  onSelectTreatment: (treatmentId: string) => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ onNavigate, onSelectTreatment }) => {
  return (
    <div className="space-y-16 md:space-y-24 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-8 pb-14 md:pt-16 md:pb-24 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <AnimatedSection direction="right" className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                <span className="truncate">Rua Welcome, 265 • Jardim Leonor, Cotia - SP</span>
              </div>

              {/* H1 Primary SEO Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                Dentista em Cotia: <span className="text-teal-700">Tratamento Humanizado</span> e Tecnologia no Jardim Leonor
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Cuidamos da sua saúde bucal e da estética do seu sorriso com <strong>implantes dentários</strong>, <strong>alinhadores invisíveis</strong>, <strong>clareamento a laser</strong> e reabilitação oral. Atendimento pontual com estacionamento próprio no local.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => onNavigate('agendamento')}
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white min-h-[48px] px-7 py-4 rounded-xl font-bold text-base shadow-lg shadow-teal-600/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                  title="Abrir formulário de agendamento online com WhatsApp"
                  aria-label="Agendar consulta online agora"
                >
                  <CalendarCheck className="w-5 h-5" />
                  <span>Agendar Consulta Online</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com a equipe da clínica OdontoCotia na Rua Welcome 265.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600/30 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 min-h-[48px] px-6 py-4 rounded-xl font-semibold text-base transition-colors"
                  title="Conversar direto no WhatsApp da clínica em Cotia"
                  aria-label="Chamar WhatsApp da clínica de Cotia"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>WhatsApp Direto</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Dentistas com CROSP ativo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Scanner 3D intraoral</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Estacionamento gratuito</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Hero Image with Figure & Figcaption */}
            <AnimatedSection direction="left" delay={0.15} className="lg:col-span-5">
              <figure className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Consultório odontológico de excelência na Rua Welcome 265 Jardim Leonor Cotia SP"
                  title="Consultório odontológico equipado em Cotia, SP"
                  className="w-full h-72 sm:h-88 lg:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 sm:p-5">
                  <figcaption className="text-xs text-slate-200 font-medium leading-relaxed bg-slate-900/70 backdrop-blur-xs p-3 rounded-xl border border-white/10 w-full">
                    <strong>Consultório OdontoCotia:</strong> Infraestrutura moderna com cadeira ergonômica e biossegurança na Rua Welcome, 265 - Jardim Leonor, Cotia - SP.
                  </figcaption>
                </div>
              </figure>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Diferenciais da Clínica em Cotia (H2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Diferenciais de Cotia
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Por que escolher a OdontoCotia no Jardim Leonor?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Combinamos acolhimento humano com recursos diagnósticos avançados para que você faça todo o tratamento em um só lugar.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StaggerItem className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Odontologia Digital</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Moldagens sem aquela massa desconfortável. Scanner intraoral 3D para planejamento prévio e alta precisão.
            </p>
          </StaggerItem>

          <StaggerItem className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Tratamento Sem Dor</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Técnicas anestésicas computadorizadas, protocolos com sedação consciente e cuidados pós-operatórios assistidos.
            </p>
          </StaggerItem>

          <StaggerItem className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Fácil Acesso em Cotia</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Rua tranquila no Jardim Leonor, a minutos do Centro de Cotia e do Km 33 da Rodovia Raposo Tavares, com vagas próprias.
            </p>
          </StaggerItem>

          <StaggerItem className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Pontualidade & WhatsApp</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Respeito total ao seu tempo com agendamento online rápido e lembretes automáticos pelo WhatsApp da clínica.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Principais Tratamentos em Destaque (H2) */}
      <section className="bg-slate-100/60 py-12 md:py-20 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Especialidades Odontológicas
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Tratamentos completos para você e sua família
              </h2>
              <p className="text-slate-600 text-sm max-w-xl">
                Do alívio imediato à transformação estética do sorriso, com especialistas dedicados em Cotia.
              </p>
            </div>

            <button
              onClick={() => onNavigate('tratamentos')}
              className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold text-sm group shrink-0 min-h-[44px]"
              title="Ver catálogo completo de tratamentos em Cotia"
            >
              <span>Ver todas as 8 especialidades</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TREATMENTS.slice(0, 3).map((treatment) => (
              <StaggerItem key={treatment.id}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
                  <figure className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                    <img
                      src={treatment.image}
                      alt={treatment.imageAlt}
                      title={treatment.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <figcaption className="sr-only">
                      {treatment.imageCaption}
                    </figcaption>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-teal-800 border border-slate-200 shadow-xs">
                      Cotia - SP
                    </div>
                  </figure>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {treatment.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {treatment.imageCaption}
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {treatment.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <button
                        onClick={() => {
                          onSelectTreatment(treatment.id);
                          onNavigate('tratamentos');
                        }}
                        className="text-xs font-semibold text-slate-700 hover:text-teal-700 min-h-[40px] flex items-center"
                        title={`Saiba mais sobre ${treatment.name}`}
                      >
                        Detalhes do Procedimento
                      </button>

                      <button
                        onClick={() => onNavigate('agendamento')}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs transition-colors"
                        title={`Agendar consulta para ${treatment.name} via WhatsApp`}
                      >
                        <CalendarCheck className="w-3.5 h-3.5" />
                        <span>Agendar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Corpo Clínico com Fotos e Legendas (H2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Corpo Clínico OdontoCotia
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Dentistas Especialistas Registrados no CROSP
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Profissionais comprometidos com a ética odontológica, constante atualização acadêmica e atendimento gentil.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {DENTISTS.map((dentist, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs p-5 sm:p-6 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start h-full">
                <figure className="shrink-0 w-32 sm:w-36 text-center">
                  <img
                    src={dentist.image}
                    alt={dentist.imageAlt}
                    title={dentist.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover object-top mx-auto shadow-md border-2 border-teal-100"
                    loading="lazy"
                  />
                  <figcaption className="text-[10px] text-slate-400 mt-2 font-medium leading-tight">
                    {dentist.imageCaption}
                  </figcaption>
                </figure>

                <div className="space-y-2 text-center sm:text-left flex-1 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-2 py-0.5 rounded-sm bg-teal-50 text-teal-800 text-[11px] font-bold border border-teal-200">
                      {dentist.cro}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                      {dentist.name}
                    </h3>
                    <p className="text-xs font-semibold text-teal-700">
                      {dentist.role}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {dentist.bio}
                    </p>
                  </div>
                  
                  <div className="pt-3">
                    <button
                      onClick={() => onNavigate('agendamento')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 min-h-[40px]"
                      title={`Agendar consulta com ${dentist.name} em Cotia`}
                    >
                      <span>Agendar com {dentist.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Depoimentos de Pacientes de Cotia (H2) */}
      <section className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-800/60 px-3 py-1 rounded-full border border-teal-600/40">
              Avaliações Verificadas
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              O que dizem os pacientes de Cotia e Granja Viana
            </h2>
            <p className="text-slate-300 text-sm">
              Histórias reais de sorrisos restaurados na Rua Welcome, Jardim Leonor.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 space-y-4 flex flex-col justify-between h-full hover:bg-white/15 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-200 italic leading-relaxed">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-white">{t.name}</h3>
                      <p className="text-xs text-teal-300">{t.neighborhood}</p>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-200 border border-teal-400/30">
                      {t.treatment}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Seção de Localização em Cotia & Mapa Rápido (H2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Localização Privilegiada em Cotia</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Venha nos visitar na Rua Welcome, 265 - Jardim Leonor
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Nossa clínica foi planejada para oferecer conforto, acessibilidade e facilidade de estacionamento. Estamos a menos de 5 minutos do centro de Cotia e com acesso rápido pela Raposo Tavares.
                </p>

                <div className="space-y-2 text-sm text-slate-700 pt-2">
                  <p><strong>Endereço Completo:</strong> {CLINIC_INFO.address.full}</p>
                  <p><strong>Ponto de Referência:</strong> {CLINIC_INFO.address.landmarks}</p>
                  <p><strong>Estacionamento:</strong> Vagas gratuitas exclusivas para pacientes em frente à clínica.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white min-h-[44px] px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
                  title="Abrir rota no Google Maps para Rua Welcome 265 Cotia"
                >
                  <Navigation className="w-4 h-4 text-teal-400" />
                  <span>Traçar Rota no Google Maps</span>
                </a>

                <button
                  onClick={() => onNavigate('localizacao')}
                  className="inline-flex items-center justify-center gap-2 bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 min-h-[44px] px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
                  title="Ver página detalhada de localização e rotas"
                >
                  <span>Ver Mapa Interativo</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-100 min-h-[300px] sm:min-h-[380px] relative">
              <iframe
                src={CLINIC_INFO.googleMapsEmbedUrl}
                className="w-full h-full min-h-[300px] sm:min-h-[380px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa interativo de localização da OdontoCotia na Rua Welcome 265, Jardim Leonor, Cotia"
              ></iframe>
            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* Banner Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-teal-700 to-emerald-700 rounded-3xl p-6 sm:p-10 lg:p-12 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Pronto para transformar seu sorriso em Cotia?
              </h2>
              <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
                Agende sua avaliação odontológica agora mesmo. Retorno rápido e confirmação direta pelo WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('agendamento')}
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-900 hover:bg-teal-50 min-h-[48px] px-8 py-4 rounded-xl font-bold text-base shadow-lg transition-all hover:scale-105 active:scale-95"
                title="Ir para o formulário de agendamento online com WhatsApp"
              >
                <CalendarCheck className="w-5 h-5 text-teal-600" />
                <span>Agendar Consulta Agora</span>
              </button>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de tirar uma dúvida sobre tratamentos na OdontoCotia.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-800/70 hover:bg-emerald-800 border border-emerald-400/40 text-white min-h-[48px] px-7 py-4 rounded-xl font-semibold text-base transition-colors"
                title="Tirar dúvidas pelo WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar com Atendente</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};
