import React, { useState } from 'react';
import { TabType } from '../types';
import { TREATMENTS } from '../data/treatments';
import { X, Network, ExternalLink, Code2, Layers, CheckCircle2 } from 'lucide-react';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: TabType) => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [viewMode, setViewMode] = useState<'visual' | 'xml'>('visual');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const baseUrl = 'https://odontocotia.com.br';

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/#tratamentos</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/#sobre</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#estrutura</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#localizacao</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/#agendamento</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>always</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/#faq</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(xmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sitemap-title"
    >
      <div className="bg-white w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-100 text-teal-800 rounded-xl">
              <Network className="w-6 h-6" />
            </div>
            <div>
              <h2 id="sitemap-title" className="text-xl font-bold text-slate-900 flex items-center gap-2">
                Mapa do Site • Sitemap XML & Navegação
              </h2>
              <p className="text-xs text-slate-500">
                Índice estruturado de páginas e procedimentos odontológicos em Cotia, SP
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-slate-200 p-0.5 rounded-lg flex text-xs">
              <button
                onClick={() => setViewMode('visual')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  viewMode === 'visual' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Visual Interativo
              </button>
              <button
                onClick={() => setViewMode('xml')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  viewMode === 'xml' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                XML Técnico
              </button>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors"
              aria-label="Fechar modal do sitemap"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div data-lenis-prevent className="p-6 overflow-y-auto space-y-6">
          {viewMode === 'visual' ? (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-teal-600" />
                  Estrutura de Páginas Principais (Nível 1)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { title: 'Início (Home)', tab: 'home' as TabType, desc: 'Apresentação da clínica em Cotia, destaques e diferenciais', priority: '1.0' },
                    { title: 'Tratamentos', tab: 'tratamentos' as TabType, desc: 'Todos os 8 procedimentos odontológicos detalhados', priority: '0.9' },
                    { title: 'Sobre Nós & Equipe', tab: 'sobre' as TabType, desc: 'Corpo clínico de dentistas com CROSP', priority: '0.8' },
                    { title: 'Estrutura & Tecnologia', tab: 'estrutura' as TabType, desc: 'Scanner 3D, Raio-X digital e biossegurança', priority: '0.8' },
                    { title: 'Localização & Mapa', tab: 'localizacao' as TabType, desc: 'Rua Welcome 265, Jardim Leonor e direções Maps', priority: '0.9' },
                    { title: 'Agendamento WhatsApp', tab: 'agendamento' as TabType, desc: 'Formulário online e envio rápido ao WhatsApp', priority: '0.9' },
                    { title: 'Perguntas Frequentes (FAQ)', tab: 'faq' as TabType, desc: 'Dúvidas sobre dor, convênios e horários', priority: '0.7' }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onNavigate(item.tab);
                        onClose();
                      }}
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50/50 text-left transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-900 group-hover:text-teal-700 text-sm">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-sm">
                          Prioridade {item.priority}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Páginas de Procedimentos & Especialidades Odontológicas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {TREATMENTS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        onNavigate('tratamentos');
                        onClose();
                      }}
                      className="p-2.5 rounded-lg border border-slate-100 hover:bg-slate-50 flex items-center justify-between text-left group"
                    >
                      <span className="font-medium text-slate-800 group-hover:text-teal-600 truncate pr-2">
                        • {t.name}
                      </span>
                      <span className="text-slate-400 shrink-0 font-mono text-[10px]">
                        Cotia - SP
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>Arquivo público disponível no servidor web em: <code className="text-teal-700 font-mono">/sitemap.xml</code></span>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-800 font-semibold"
                >
                  Abrir Arquivo XML <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  sitemap.xml (Padrão Sitemaps.org Protocol 0.9)
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
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Copiar Código XML</span>
                      </>
                    )}
                  </button>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-xs font-semibold text-teal-800 transition-colors"
                  >
                    <span>Ver no Navegador</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed max-h-[380px]">
                {xmlContent}
              </pre>
            </div>
          )}
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
