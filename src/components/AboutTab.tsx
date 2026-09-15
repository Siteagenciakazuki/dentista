import React from 'react';
import { TabType } from '../types';
import { DENTISTS, CLINIC_INFO } from '../data/clinicData';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { 
  Award, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  CalendarCheck, 
  CheckCircle2, 
  GraduationCap
} from 'lucide-react';

interface AboutTabProps {
  onNavigate: (tab: TabType) => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-teal-50/80 via-white to-slate-50 py-10 sm:py-14 border-b border-slate-200">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-teal-700" />
            <span>Ética Profissional e Excelência Clínica</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sobre a OdontoCotia: Cuidado Humanizado no Jardim Leonor
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Fundada com o propósito de transformar a experiência de ir ao dentista em Cotia. Aliamos alta tecnologia diagnóstica, pontualidade e uma relação de carinho e transparência com cada paciente.
          </p>
        </AnimatedSection>
      </section>

      {/* História & Filosofia (H2 & H3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          <AnimatedSection direction="left" className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Nossa Trajetória
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Uma clínica pensada para a comunidade de Cotia e Região
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Instalada no tradicional bairro <strong>Jardim Leonor</strong>, na Rua Welcome, 265, a OdontoCotia nasceu do desejo dos fundadores de trazer a precisão da odontologia digital dos grandes centros para o dia a dia das famílias da região de Cotia, Vargem Grande Paulista e Granja Viana.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Aqui, cada plano de tratamento é concebido sob medida. Acreditamos que a saúde bucal impacta diretamente na mastigação, digestão, autoestima e convivência social. Por isso, ouvimos atentamente as queixas e expectativas do paciente antes de propor qualquer intervenção.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <h3>Biossegurança Estrita</h3>
                </div>
                <p className="text-xs text-slate-600">Esterilização monitorada com testes biológicos periódicos e grau cirúrgico.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
                  <HeartHandshake className="w-4 h-4" />
                  <h3>Atendimento Gentil</h3>
                </div>
                <p className="text-xs text-slate-600">Ambiente acolhedor projetado para eliminar qualquer medo ou fobia de dentista.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="lg:col-span-6">
            <figure className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                alt="Equipe odontológica acolhendo paciente na OdontoCotia Rua Welcome 265 Cotia"
                title="Atendimento humanizado na OdontoCotia"
                className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <figcaption className="p-3 sm:p-4 bg-slate-900 text-slate-200 text-xs font-medium leading-normal">
                <strong>Atendimento Clínico Humanizado:</strong> Consulta inicial com escuta ativa e planejamento visual na OdontoCotia - Rua Welcome, 265, Jardim Leonor, Cotia - SP.
              </figcaption>
            </figure>
          </AnimatedSection>

        </div>
      </section>

      {/* Dentistas Especialistas e Registros (H2 & H3) */}
      <section className="bg-slate-50 py-12 sm:py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full">
              Especialistas
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Conheça os Dentistas Responsáveis pelo Seu Tratamento
            </h2>
            <p className="text-slate-600 text-sm">
              Profissionais experientes, titulados e com registros ativos no Conselho Regional de Odontologia de São Paulo (CROSP).
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {DENTISTS.map((dentist, idx) => (
              <StaggerItem key={idx}>
                <div 
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6 flex flex-col justify-between h-full"
                >
                  <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start">
                    <figure className="shrink-0 text-center">
                      <img
                        src={dentist.image}
                        alt={dentist.imageAlt}
                        title={dentist.name}
                        className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl object-cover object-top shadow-md border-2 border-teal-100"
                        loading="lazy"
                      />
                      <figcaption className="text-[10px] text-slate-400 mt-2 font-medium">
                        {dentist.imageCaption}
                      </figcaption>
                    </figure>

                    <div className="space-y-2.5 text-center sm:text-left flex-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>{dentist.cro}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {dentist.name}
                      </h3>
                      
                      <p className="text-xs font-bold text-teal-700">
                        {dentist.role}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {dentist.bio}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Áreas de Atuação & Especialidades:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dentist.specialties.map((spec, s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                        >
                          ✓ {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <button
                      onClick={() => onNavigate('agendamento')}
                      className="inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold min-h-[44px] px-4 py-2.5 rounded-xl transition-colors w-full sm:w-auto"
                      title={`Agendar consulta com ${dentist.name}`}
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>Agendar Consulta com {dentist.name.split(' ')[0]}</span>
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Valores e Ética Odontológica (H2 & H3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Compromisso Profissional
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Nossos Pilares de Atuação em Cotia
              </h2>
              <p className="text-slate-300 text-sm">
                Trabalhamos com seriedade técnica e respeito irrestrito aos regulamentos do Conselho Federal de Odontologia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              <div className="bg-white/10 p-5 sm:p-6 rounded-2xl border border-white/10 space-y-2">
                <h3 className="text-lg font-bold text-teal-300">1. Transparência Total</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Você recebe um orçamento detalhado com opções de tratamento explicadas ponto a ponto, sem surpresas durante o atendimento.
                </p>
              </div>

              <div className="bg-white/10 p-5 sm:p-6 rounded-2xl border border-white/10 space-y-2">
                <h3 className="text-lg font-bold text-teal-300">2. Tecnologia Segura</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Investimos continuadamente em escaneamento 3D, radiologia digital de baixa emissão e instrumentais esterilizados de nível hospitalar.
                </p>
              </div>

              <div className="bg-white/10 p-5 sm:p-6 rounded-2xl border border-white/10 space-y-2 sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-bold text-teal-300">3. Comunidade de Cotia</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Orgulho de fazer parte do desenvolvimento de Cotia, atendendo pacientes do Jardim Leonor, Centro, Granja Viana e cidades vizinhas.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};
