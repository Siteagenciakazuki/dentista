import React from 'react';
import { POLICIES } from '../data/policies';
import { X, Shield, FileText, Award, Cookie } from 'lucide-react';

interface PolicyModalProps {
  policyKey: 'privacidade' | 'termos' | 'etica' | 'cookies' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyKey, onClose }) => {
  if (!policyKey) return null;

  const policy = POLICIES[policyKey];

  const getIcon = () => {
    switch (policyKey) {
      case 'privacidade': return <Shield className="w-6 h-6 text-teal-600" />;
      case 'termos': return <FileText className="w-6 h-6 text-teal-600" />;
      case 'etica': return <Award className="w-6 h-6 text-teal-600" />;
      case 'cookies': return <Cookie className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      <div className="bg-white w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-100 text-teal-800 rounded-xl">
              {getIcon()}
            </div>
            <div>
              <h2 id="policy-modal-title" className="text-xl font-bold text-slate-900">
                {policy.title}
              </h2>
              <p className="text-xs text-slate-500">
                Última atualização: {policy.lastUpdated} • OdontoCotia - Cotia, SP
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors"
            aria-label="Fechar modal de políticas"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div data-lenis-prevent className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          {policy.sections.map((sec, idx) => (
            <section key={idx} className="space-y-2">
              <h3 className="font-semibold text-slate-900 text-base">
                {sec.subtitle}
              </h3>
              <p className="text-slate-600">
                {sec.content}
              </p>
            </section>
          ))}

          <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 space-y-1">
            <p className="font-semibold">Informações da Entidade Responsável:</p>
            <p>OdontoCotia - Clínica Odontológica Ltda.</p>
            <p>Endereço: Rua Welcome, 265 - Jardim Leonor, Cotia - SP, CEP: 06703-230</p>
            <p>Responsável Técnico: Dr. Lucas Mendes (CROSP 104.892)</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors"
            title="Fechar documento legal"
            aria-label="Entendi e fechar"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
