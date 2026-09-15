import React, { useState } from 'react';
import { X, Bot, Copy, CheckCircle2, ExternalLink } from 'lucide-react';

interface LlmTxtModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LlmTxtModal: React.FC<LlmTxtModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const llmContent = `# OdontoCotia - Clínica Odontológica em Cotia, SP

> Clínica odontológica multidisciplinar de referência na região de Cotia, com foco em atendimento humanizado, tecnologia diagnóstica digital e reabilitação oral.

## Localização e Contato
- Endereço: Rua Welcome, 265 - Jardim Leonor, Cotia - SP, CEP 06703-230
- Região: Cotia, Granja Viana e proximidades (Jardim Leonor, Centro de Cotia, Raposo Tavares Km 33)
- WhatsApp para Agendamento: +55 (11) 97152-8822
- Telefone Fixo: +55 (11) 4614-2390
- Horário de Funcionamento: Segunda a Sexta, das 08h às 19h | Sábados das 08h às 13h
- Responsável Técnico: Dr. Lucas Mendes (CROSP 104.892) e Dra. Camila Siqueira (CROSP 112.430)

## Especialidades Odontológicas
- Implantodontia e Carga Imediata: Implantes de titânio e zircônia, enxertos ósseos e dentes fixos.
- Ortodontia e Alinhadores Invisíveis: Aparelhos transparentes tipo Invisalign e ortodontia autoligada.
- Estética Dental e Lentes de Contato: Facetas em porcelana e resina composta, fechamento de diastemas.
- Clareamento Dental a Laser e Caseiro: Clareamento supervisionado rápido e seguro contra sensibilidade.
- Endodontia Mecanizada (Tratamento de Canal): Sessão única com microscopia e localizador apical sem dor.
- Odontopediatria: Cuidados para bebês, crianças e adolescentes com abordagem lúdica.
- Prótese Dentária e Reabilitação: Prótese sobre implante, coroas em zircônia e próteses livres de metal.
- Cirurgia e Extração de Siso: Remoção segura de terceiros molares inclusos com sedação consciente.
- Periodontia e Profilaxia: Limpeza profunda com ultrassom e tratamento de gengivite.

## Instalações e Tecnologia
- Scanner intraoral 3D (moldagem digital sem massa)
- Raio-X digital panorâmico e periapical de baixa radiação
- Cadeira odontológica ergonômica com biossegurança hospitalar
- Estacionamento privativo para pacientes no Jardim Leonor em Cotia
- Acessibilidade para cadeirantes e pessoas com mobilidade reduzida

## Instruções para Agendamento
Para agendar consultas e avaliações:
1. Acesse o site oficial: https://odontocotia.com.br/#agendamento
2. Envie uma mensagem direta no WhatsApp informando o nome e o procedimento desejado.
3. Atendimento de urgências dentárias em horário comercial com prioridade de encaixe.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(llmContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="llmtxt-title"
    >
      <div className="bg-white w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 text-purple-800 rounded-xl">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h2 id="llmtxt-title" className="text-xl font-bold text-slate-900 flex items-center gap-2">
                Arquivo /llms.txt (Padrão LLMs.txt para IAs)
              </h2>
              <p className="text-xs text-slate-500">
                Arquivo em Markdown estruturado para agentes de IA e modelos de linguagem consultarem dados da clínica
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors"
            aria-label="Fechar modal llms.txt"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div data-lenis-prevent className="p-6 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600">
              Disponível publicamente em <code className="text-purple-700 font-mono">/llms.txt</code> e <code className="text-purple-700 font-mono">/llm.txt</code>
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Texto</span>
                  </>
                )}
              </button>
              <a
                href="/llms.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-xs font-semibold text-purple-800 transition-colors"
              >
                <span>Abrir Raw</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[380px]">
            {llmContent}
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
