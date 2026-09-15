import React from 'react';
import { TabType } from '../types';
import { CLINIC_INFO, DENTISTS } from '../data/clinicData';
import { TREATMENTS } from '../data/treatments';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Mail, 
  ShieldCheck, 
  FileText, 
  Award, 
  Network, 
  Bot, 
  FileCode, 
  ExternalLink,
  Heart
} from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: TabType) => void;
  onOpenPolicy: (policyKey: 'privacidade' | 'termos' | 'etica' | 'cookies') => void;
  onOpenSitemap: () => void;
  onOpenLlmTxt: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPolicy,
  onOpenSitemap,
  onOpenLlmTxt,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      {/* Upper Footer: Contact & Local Highlight in Cotia */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand & Cotia Presence */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white text-xl font-bold">
              <span className="text-teal-400">OdontoCotia</span>
              <span className="text-xs bg-teal-950 text-teal-300 border border-teal-800 px-2 py-0.5 rounded-md font-mono">
                Jardim Leonor, Cotia
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Clínica odontológica de alta tecnologia e atendimento acolhedor na região de Cotia. Cuidamos do seu sorriso com procedimentos modernos de implantes, alinhadores invisíveis, clareamento e reabilitação oral.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>{CLINIC_INFO.address.street}</strong> - {CLINIC_INFO.address.neighborhood}, {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state}, CEP {CLINIC_INFO.address.zip}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Telefone: {CLINIC_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {CLINIC_INFO.whatsappDisplay} (Agendamento Rápido)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Seg a Sex: 08h às 19h | Sáb: 08h às 13h</span>
              </div>
            </div>
          </div>

          {/* Col 2: Especialidades Odontológicas (SEO Links) */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Especialidades
            </h3>
            <ul className="space-y-2 text-xs">
              {TREATMENTS.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate('tratamentos')}
                    className="hover:text-teal-300 transition-colors text-left"
                    title={`Ver detalhes do tratamento de ${item.name} em Cotia`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navegação do Site */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-teal-300 transition-colors"
                  title="Página Inicial da OdontoCotia"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sobre')}
                  className="hover:text-teal-300 transition-colors"
                  title="Conheça a equipe de dentistas em Cotia"
                >
                  Sobre Nós & Corpo Clínico
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('estrutura')}
                  className="hover:text-teal-300 transition-colors"
                  title="Tecnologia e consultórios odontológicos"
                >
                  Estrutura & Scanner 3D
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('localizacao')}
                  className="hover:text-teal-300 transition-colors"
                  title="Endereço na Rua Welcome 265 e Mapa no Google"
                >
                  Localização & Como Chegar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('agendamento')}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                  title="Agendar consulta odontológica em Cotia via WhatsApp"
                >
                  Agendamento Online WhatsApp
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-teal-300 transition-colors"
                  title="Dúvidas frequentes de pacientes"
                >
                  Dúvidas Frequentes (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Arquivos Técnicos de SEO & LLMs */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Arquivos Técnicos & SEO
            </h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Índice completo de indexação para buscadores e modelos de IA:
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenSitemap}
                  className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors font-medium"
                  title="Visualizar Mapa do Site e XML do sitemap"
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>Sitemap Interativo (SITE.MAP)</span>
                </button>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
                  title="Acessar arquivo público sitemap.xml"
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>/sitemap.xml</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenLlmTxt}
                  className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  title="Abrir arquivo de contexto LLMs.txt para agentes de IA"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Arquivo LLM.TXT (Para IAs)</span>
                </button>
              </li>
              <li>
                <a
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
                  title="Acessar arquivo público llms.txt"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>/llms.txt</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
                  title="Acessar arquivo robots.txt"
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>/robots.txt (Diretrizes de Robôs)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsabilidade Técnica & CROSP */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-400">
          <div className="space-y-1">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-teal-400" />
              Responsabilidade Técnica e Registros Oficiais:
            </span>
            <p>
              Dr. Lucas Mendes - Cirurgião-Dentista • <strong>CROSP 104.892</strong> • Especialista em Implantodontia
            </p>
            <p>
              Dra. Camila Siqueira - Cirurgiã-Dentista • <strong>CROSP 112.430</strong> • Especialista em Ortodontia
            </p>
          </div>
          <div className="md:text-right space-y-1">
            <span className="font-semibold text-slate-300">Conformidade e Ética Odontológica:</span>
            <p>Atuação em conformidade com o Código de Ética do CFO e CROSP.</p>
            <p className="text-slate-500">Alvará de Funcionamento e Vigilância Sanitária Municipal de Cotia regularizados.</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Footer Policies */}
      <div className="bg-slate-900/90 py-5 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} OdontoCotia - Clínica Odontológica Ltda. Todos os direitos reservados.
            <span className="block sm:inline sm:ml-2 text-slate-500">
              Rua Welcome, 265 - Jardim Leonor, Cotia - SP
            </span>
          </div>

          {/* Legal Policies Tabs / Modals Trigger */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300 font-medium">
            <button
              onClick={() => onOpenPolicy('privacidade')}
              className="hover:text-teal-300 transition-colors"
              title="Ler a Política de Privacidade e LGPD da clínica"
            >
              Política de Privacidade (LGPD)
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenPolicy('termos')}
              className="hover:text-teal-300 transition-colors"
              title="Ler os Termos de Uso e Agendamento"
            >
              Termos de Uso
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenPolicy('etica')}
              className="hover:text-teal-300 transition-colors"
              title="Ler as diretrizes do Código de Ética Odontológica CFO/CROSP"
            >
              Código de Ética CFO/CROSP
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenPolicy('cookies')}
              className="hover:text-teal-300 transition-colors"
              title="Consultar a Política de Cookies do site"
            >
              Política de Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
