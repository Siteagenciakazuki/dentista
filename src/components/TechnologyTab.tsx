import React from 'react';
import { TabType } from '../types';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Camera, 
  Radio, 
  Car, 
  CalendarCheck, 
  CheckCircle2, 
  Smile 
} from 'lucide-react';

interface TechnologyTabProps {
  onNavigate: (tab: TabType) => void;
}

export const TechnologyTab: React.FC<TechnologyTabProps> = ({ onNavigate }) => {
  const equipments = [
    {
      title: 'Scanner Intraoral Digital 3D',
      subtitle: 'Moldagem rápida sem massa e sem ânsia de vômito',
      description: 'Captura milhares de pontos por segundo para criar um modelo tridimensional exato da sua arcada dentária. Permite planejar alinhadores invisíveis, coroas e implantes com precisão milimétrica.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Scanner intraoral 3D para odontologia digital em Cotia SP',
      imageCaption: 'Scanner intraoral 3D em funcionamento no consultório da OdontoCotia - Rua Welcome, 265, Cotia.'
    },
    {
      title: 'Radiologia Digital de Baixa Radiação',
      subtitle: 'Diagnóstico instantâneo e seguro',
      description: 'Sensores digitais que reduzem a exposição à radiação em até 80% comparado ao filme tradicional. As imagens aparecem instantaneamente na tela para você e o dentista analisarem juntos.',
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Equipamento de raio-x digital para odontologia na clínica de Cotia',
      imageCaption: 'Sistema radiológico digital panorâmico e periapical instalado no Jardim Leonor, Cotia.'
    },
    {
      title: 'Central de Esterilização & Autoclave Hospitalar',
      subtitle: 'Controle microbiológico rigoroso e rastreabilidade',
      description: 'Todos os instrumentais são lavados em cuba ultrassônica, envelopados com selagem cirúrgica e esterilizados em autoclave com indicador biológico semanal, garantindo risco zero de contaminação cruzada.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Sala de esterilização e biossegurança odontológica em Cotia SP',
      imageCaption: 'Central de esterilização com controle asséptico hospitalar na Rua Welcome, Cotia.'
    },
    {
      title: 'Cadeiras Odontológicas Ergonômicas com Estofamento Conforto',
      subtitle: 'Tratamentos longos sem dores lombares',
      description: 'Nossas cadeiras possuem apoio lombar dinâmico, movimentos suaves e motor silencioso para que você relaxe durante procedimentos de implantes ou clareamento.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Cadeira odontológica de última geração em consultório de Cotia',
      imageCaption: 'Consultório principal com cadeira ergonômica da OdontoCotia - Jardim Leonor, Cotia - SP.'
    },
    {
      title: 'Recepção Aconchegante e Café Especial',
      subtitle: 'Pontualidade e tranquilidade antes da consulta',
      description: 'Ambiente climatizado com Wi-Fi de alta velocidade, poltronas confortáveis, água purificada e café cortesia, pensado para que você se sinta acolhido desde a chegada.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Recepção aconchegante da clínica odontológica no Jardim Leonor em Cotia',
      imageCaption: 'Sala de recepção acolhedora e climatizada na Rua Welcome 265, Cotia.'
    },
    {
      title: 'Estacionamento Próprio & Acessibilidade Total',
      subtitle: 'Facilidade de parar o carro na porta no Jardim Leonor',
      description: 'Vagas privativas gratuitas para nossos pacientes sem complicação de zona azul ou flanelinhas. Rampa de acesso suave para cadeirantes, carrinhos de bebê e idosos.',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Estacionamento privativo para pacientes da clínica em Cotia SP',
      imageCaption: 'Estacionamento próprio em frente à clínica na Rua Welcome 265 - Jardim Leonor, Cotia.'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50/80 via-white to-slate-50 py-10 sm:py-14 border-b border-slate-200">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-teal-700" />
            <span>Infraestrutura e Tecnologia Médica</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Estrutura Odontológica de Ponta no Jardim Leonor em Cotia
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Investimos em equipamentos modernos para proporcionar diagnósticos rápidos, tratamentos sem dor e máxima biossegurança para você e sua família na Rua Welcome, 265.
          </p>
        </AnimatedSection>
      </section>

      {/* Equipment Grid (H2 & H3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Equipamentos que Fazem a Diferença no Seu Sorriso
          </h2>
          <p className="text-slate-600 text-sm">
            Conheça os recursos que garantem precisão cirúrgica e conforto nos atendimentos.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {equipments.map((eq, idx) => (
            <StaggerItem key={idx}>
              <div 
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <figure className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={eq.image}
                    alt={eq.imageAlt}
                    title={eq.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <figcaption className="p-2.5 bg-slate-900/90 text-slate-200 text-[11px] font-medium leading-tight">
                    <strong>Legenda:</strong> {eq.imageCaption}
                  </figcaption>
                </figure>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {eq.title}
                    </h3>
                    <p className="text-xs font-semibold text-teal-700">
                      {eq.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {eq.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Biossegurança em Destaque */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-teal-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                Padrão Hospitalar
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Protocolo Rigoroso de Biossegurança em Cotia
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Sua segurança sanitária é prioridade absoluta na OdontoCotia. Nossos profissionais utilizam paramentação descartável individual, barreira plástica protetora em todas as superfícies e monitoramento biológico em autoclave auditado.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-teal-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Esterilização classe B hospitalar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ar-condicionado com filtragem ativa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kits cirúrgicos descartáveis esterilizados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Descarte regulamentado de resíduos biológicos</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <button
                onClick={() => onNavigate('agendamento')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-teal-900 hover:bg-teal-50 min-h-[48px] px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-colors"
                title="Agendar visita e consulta na clínica"
              >
                <CalendarCheck className="w-4 h-4 text-teal-700" />
                <span>Conhecer a Clínica Pessoalmente</span>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};
