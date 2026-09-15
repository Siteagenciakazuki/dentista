import React, { useState } from 'react';
import { TabType } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Copy, 
  CheckCircle2, 
  Clock, 
  Phone, 
  MessageCircle, 
  Car, 
  Bus, 
  CalendarCheck
} from 'lucide-react';

interface LocationTabProps {
  onNavigate: (tab: TabType) => void;
}

export const LocationTab: React.FC<LocationTabProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50/80 via-white to-slate-50 py-10 sm:py-14 border-b border-slate-200">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-teal-700" />
            <span>Endereço Oficial em Cotia - SP</span>
          </div>

          {/* H1 Semantic Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Localização: Rua Welcome, 265 - Jardim Leonor, Cotia
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Consulte o mapa interativo, trace sua rota no Google Maps ou Waze e agende sua consulta com estacionamento exclusivo na porta da clínica.
          </p>
        </AnimatedSection>
      </section>

      {/* Main Map & Address Box (H2 & H3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Details Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 sm:space-y-8">
              <div className="space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                    Ponto de Atendimento
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">
                    OdontoCotia Jardim Leonor
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Localização estratégica e tranquila em Cotia, longe do estresse do trânsito pesado e com total facilidade de acesso.
                  </p>
                </div>

                {/* Address card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        Endereço da Clínica
                      </h3>
                      <p className="text-sm font-semibold text-slate-800">
                        {CLINIC_INFO.address.street}
                      </p>
                      <p className="text-xs text-slate-600">
                        Bairro {CLINIC_INFO.address.neighborhood} • {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state}
                      </p>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">
                        CEP: {CLINIC_INFO.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 transition-colors"
                      title="Copiar endereço completo para a área de transferência"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copiar Endereço</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Horários */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-600" />
                    Horários de Atendimento
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    {CLINIC_INFO.hours.map((h, i) => (
                      <li key={i} className="flex items-center justify-between pb-1 border-b border-slate-100 last:border-0">
                        <span className="font-medium text-slate-700">{h.days}:</span>
                        <span className="font-bold text-teal-800">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={CLINIC_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white min-h-[44px] px-4 py-3 rounded-xl font-bold text-xs shadow-sm transition-colors text-center"
                    title="Abrir no Google Maps e traçar rota até a clínica"
                  >
                    <Navigation className="w-4 h-4 text-teal-400" />
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href={CLINIC_INFO.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white min-h-[44px] px-4 py-3 rounded-xl font-bold text-xs shadow-sm transition-colors text-center"
                    title="Navegar no Waze até Rua Welcome 265 Cotia"
                  >
                    <Car className="w-4 h-4 text-white" />
                    <span>Abrir no Waze</span>
                    <ExternalLink className="w-3 h-3 text-blue-200" />
                  </a>
                </div>

                <button
                  onClick={() => onNavigate('agendamento')}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white min-h-[48px] py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                  title="Agendar consulta rápida online"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Agendar Consulta Nesta Unidade</span>
                </button>
              </div>
            </div>

            {/* Interactive Google Maps Column */}
            <div className="lg:col-span-7 bg-slate-100 min-h-[350px] sm:min-h-[440px] relative">
              <iframe
                src={CLINIC_INFO.googleMapsEmbedUrl}
                className="w-full h-full min-h-[350px] sm:min-h-[440px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps interativo indicando a OdontoCotia na Rua Welcome 265 Jardim Leonor Cotia SP"
              ></iframe>
            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* Pontos de Referência em Cotia (H2 & H3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Como Chegar à OdontoCotia no Jardim Leonor
          </h2>
          <p className="text-slate-600 text-sm">
            Rotas fáceis a partir dos principais pontos de Cotia e da região metropolitana.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StaggerItem>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Pela Rodovia Raposo Tavares
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Utilize a saída do Km 33 ou 34 sentido interior/capital. Acesse a Av. Prof. Manoel José Pedroso e entre no Jardim Leonor. A Rua Welcome fica a apenas 3 minutos da rodovia.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Do Centro de Cotia
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Distância de apenas 1,8 km do Centro Histórico e da Prefeitura de Cotia. Menos de 5 minutos de carro ou corrida de aplicativo até o número 265 da Rua Welcome.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Transporte Público & Ônibus
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Linhas municipais de Cotia e intermunicipais EMTU que passam pela Av. Manoel José Pedroso possuem paradas a menos de 250 metros da entrada da clínica.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Fachada com Figure & Figcaption */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-slate-100 rounded-3xl p-6 sm:p-8 border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <figure className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                  alt="Fachada e recepção da clínica na Rua Welcome 265 em Cotia"
                  title="Clínica OdontoCotia Jardim Leonor"
                  className="w-full h-60 sm:h-72 object-cover"
                  loading="lazy"
                />
                <figcaption className="p-3 bg-slate-900 text-slate-200 text-xs font-medium">
                  <strong>Fachada e Acesso:</strong> Entrada plana acessível com vagas de estacionamento na Rua Welcome, 265 - Jardim Leonor, Cotia - SP.
                </figcaption>
              </figure>

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Estrutura Completa
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Tudo pronto para receber você com pontualidade e conforto
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ao chegar no número 265 da Rua Welcome, toque a campainha ou use nosso interfone caso as vagas do pátio frontal estejam livres para manobra imediata.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Estou a caminho da clínica na Rua Welcome, 265 em Cotia e gostaria de confirmar a vaga de estacionamento.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold min-h-[44px] px-5 py-2.5 rounded-xl transition-colors w-full sm:w-auto"
                    title="Avisar chegada pelo WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Avisar Chegada pelo WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};
