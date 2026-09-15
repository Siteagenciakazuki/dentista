import React, { useState, useEffect } from 'react';
import { BookingFormData } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { TREATMENTS } from '../data/treatments';
import { AnimatedSection } from './AnimatedSection';
import { 
  CalendarCheck, 
  MessageCircle, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Phone,
  ArrowRight
} from 'lucide-react';

interface BookingTabProps {
  initialTreatment?: string;
  onOpenPrivacyPolicy: () => void;
}

export const BookingTab: React.FC<BookingTabProps> = ({ 
  initialTreatment = '',
  onOpenPrivacyPolicy
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    treatment: initialTreatment || 'Avaliação Geral & Check-up Preventivo',
    preferredPeriod: 'manha',
    preferredDate: '',
    isFirstVisit: 'sim',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, treatment: initialTreatment }));
    }
  }, [initialTreatment]);

  // Mask phone as (11) 99999-9999
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);

    let masked = val;
    if (val.length > 2) {
      masked = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    }
    if (val.length > 7) {
      masked = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    }
    setFormData((prev) => ({ ...prev, phone: masked }));
  };

  const getPeriodLabel = (p: string) => {
    switch (p) {
      case 'manha': return 'Manhã (08h às 12h)';
      case 'tarde': return 'Tarde (13h às 18h)';
      case 'sabado': return 'Sábado (08h às 13h)';
      default: return 'Qualquer horário disponível';
    }
  };

  // Build the preformatted WhatsApp message
  const generateWhatsAppMessage = () => {
    const lines = [
      `🦷 *NOVO AGENDAMENTO ONLINE - ODONTOCOTIA*`,
      `📍 Unidade: Rua Welcome, 265 - Jardim Leonor, Cotia/SP`,
      ``,
      `👤 *Nome:* ${formData.name.trim() || '[Não informado]'}`,
      `📱 *Telefone/WhatsApp:* ${formData.phone || '[Não informado]'}`,
      `🩺 *Tratamento Desejado:* ${formData.treatment}`,
      `⏰ *Período de Preferência:* ${getPeriodLabel(formData.preferredPeriod)}`,
      formData.preferredDate ? `📅 *Data Sugerida:* ${formData.preferredDate}` : null,
      `🆕 *Primeira Consulta:* ${formData.isFirstVisit === 'sim' ? 'Sim, novo paciente' : 'Não, já sou paciente'}`,
      formData.notes.trim() ? `💬 *Observações/Queixa:* ${formData.notes.trim()}` : null,
      ``,
      `_Enviado pelo formulário oficial de agendamento da OdontoCotia._`
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Por favor, digite seu nome completo.');
      return;
    }
    if (formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Por favor, informe um número de telefone com DDD válido.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);

    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50/80 via-white to-slate-50 py-10 sm:py-14 border-b border-slate-200">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Integração Direta com WhatsApp da Clínica</span>
          </div>

          {/* H1 Semantic Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Agendamento de Consultas em Cotia Online & WhatsApp
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Preencha os campos abaixo para selecionar o procedimento e período de preferência na nossa clínica na Rua Welcome, 265 (Jardim Leonor). O envio é direcionado imediatamente à recepção.
          </p>
        </AnimatedSection>
      </section>

      {/* Main Booking Form & Info Box (H2 & H3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left: Form Container */}
          <AnimatedSection className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                Passo Único
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Formulário de Pré-Agendamento
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Leva menos de 1 minuto. Ao enviar, você será direcionado ao nosso WhatsApp com a mensagem formatada para confirmação rápida.
              </p>
            </div>

            {errorMsg && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Nome */}
              <div className="space-y-1.5">
                <label htmlFor="patient-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Nome Completo <span className="text-rose-500">*</span>
                </label>
                <input
                  id="patient-name"
                  type="text"
                  required
                  placeholder="Ex.: Maria Souza"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-sm outline-hidden transition-all min-h-[44px]"
                />
              </div>

              {/* Telefone / WhatsApp */}
              <div className="space-y-1.5">
                <label htmlFor="patient-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  WhatsApp com DDD <span className="text-rose-500">*</span>
                </label>
                <input
                  id="patient-phone"
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-sm outline-hidden transition-all min-h-[44px]"
                />
                <span className="text-[11px] text-slate-400">
                  Enviaremos a confirmação e lembretes para este WhatsApp.
                </span>
              </div>

              {/* Procedimento */}
              <div className="space-y-1.5">
                <label htmlFor="treatment-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Procedimento ou Especialidade Desejada
                </label>
                <select
                  id="treatment-select"
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-sm outline-hidden bg-white transition-all min-h-[44px]"
                >
                  <option value="Avaliação Geral & Check-up Preventivo">Avaliação Geral & Check-up Preventivo (Cotia)</option>
                  <option value="Urgência Odontológica / Dor de Dente">🚨 Urgência Odontológica / Dor Aguda</option>
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                  <option value="Outro Tratamento / Dúvida">Outro Procedimento / Consulta Especial</option>
                </select>
              </div>

              {/* Preferência de Período e Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="preferred-period" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Turno de Preferência
                  </label>
                  <select
                    id="preferred-period"
                    value={formData.preferredPeriod}
                    onChange={(e) => setFormData({ ...formData, preferredPeriod: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-sm outline-hidden bg-white transition-all min-h-[44px]"
                  >
                    <option value="manha">Manhã (08h às 12h)</option>
                    <option value="tarde">Tarde (13h às 18h)</option>
                    <option value="sabado">Sábado (08h às 13h)</option>
                    <option value="qualquer">Qualquer horário disponível</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="preferred-date" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Data Sugerida (Opcional)
                  </label>
                  <input
                    id="preferred-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-sm outline-hidden bg-white transition-all min-h-[44px]"
                  />
                </div>
              </div>

              {/* Já é paciente */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Já é paciente da clínica OdontoCotia?
                </label>
                <div className="flex flex-wrap items-center gap-6 pt-1">
                  <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer min-h-[36px]">
                    <input
                      type="radio"
                      name="firstVisit"
                      value="sim"
                      checked={formData.isFirstVisit === 'sim'}
                      onChange={() => setFormData({ ...formData, isFirstVisit: 'sim' })}
                      className="text-teal-600 focus:ring-teal-500 w-4 h-4"
                    />
                    <span>Não, é minha 1ª vez</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer min-h-[36px]">
                    <input
                      type="radio"
                      name="firstVisit"
                      value="nao"
                      checked={formData.isFirstVisit === 'nao'}
                      onChange={() => setFormData({ ...formData, isFirstVisit: 'nao' })}
                      className="text-teal-600 focus:ring-teal-500 w-4 h-4"
                    />
                    <span>Sim, já sou paciente</span>
                  </label>
                </div>
              </div>

              {/* Mensagem / Queixa */}
              <div className="space-y-1.5">
                <label htmlFor="patient-notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Observações ou Sintomas (Opcional)
                </label>
                <textarea
                  id="patient-notes"
                  rows={3}
                  placeholder="Ex.: Tenho sensibilidade ao mastigar no lado direito ou gostaria de saber sobre alinhadores..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-sm outline-hidden transition-all"
                ></textarea>
              </div>

              {/* Botão de Enviar integrado com WhatsApp */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold min-h-[50px] py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all text-base"
                  title="Enviar formulário e abrir WhatsApp com a mensagem pronta"
                  aria-label="Agendar via WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-white shrink-0" />
                  <span>Enviar e Abrir no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                  🔒 Seus dados estão seguros. Ao clicar, respeitamos nossa{' '}
                  <button
                    type="button"
                    onClick={onOpenPrivacyPolicy}
                    className="text-teal-700 underline font-medium hover:text-teal-900"
                  >
                    Política de Privacidade (LGPD)
                  </button>
                  .
                </p>
              </div>
            </form>
          </AnimatedSection>

          {/* Right: Real-time Message Preview & Quick Actions */}
          <AnimatedSection className="lg:col-span-5 space-y-6">
            
            {/* Live WhatsApp Preview Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Prévia da Mensagem no WhatsApp
                  </h3>
                </div>
                <button
                  onClick={handleCopyMessage}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors min-h-[36px] px-2"
                  title="Copiar texto da mensagem para área de transferência"
                >
                  {copied ? (
                    <span className="text-emerald-400 font-semibold">Copiado!</span>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Message balloon styling with data-lenis-prevent to scroll preview smoothly */}
              <div 
                data-lenis-prevent
                className="bg-slate-800/90 rounded-2xl p-4 text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed border border-slate-700/60 max-h-72 overflow-y-auto"
              >
                {generateWhatsAppMessage()}
              </div>

              <div className="text-[11px] text-slate-400 leading-normal flex items-start gap-2 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Nossa recepção em Cotia confirmará a disponibilidade do horário assim que a mensagem for recebida.</span>
              </div>
            </div>

            {/* Direct 1-Click WhatsApp Quick Actions */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Prefere falar diretamente sem preencher?
              </h3>

              <div className="space-y-2.5">
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta na OdontoCotia (Rua Welcome, 265). Poderiam me informar os horários livres desta semana?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 min-h-[44px] rounded-xl border border-emerald-200 bg-emerald-50/70 hover:bg-emerald-100 text-emerald-900 transition-colors text-xs font-bold"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp Direto com a Recepção</span>
                  </span>
                  <span className="text-emerald-700">Abrir ↗</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('URGÊNCIA ODONTOLÓGICA: Estou com forte dor de dente e preciso de atendimento rápido na Rua Welcome 265 em Cotia.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 min-h-[44px] rounded-xl border border-rose-200 bg-rose-50/70 hover:bg-rose-100 text-rose-900 transition-colors text-xs font-bold"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping shrink-0"></span>
                    <span>🚨 Urgência / Dor de Dente Aguda</span>
                  </span>
                  <span className="text-rose-700">Plantão ↗</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-between p-3.5 min-h-[44px] rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors text-xs font-bold"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Ligar no Fixo: {CLINIC_INFO.phoneDisplay}</span>
                  </span>
                  <span className="text-slate-500">Ligar ↗</span>
                </a>
              </div>
            </div>

            {/* Address Reminder */}
            <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200/80 text-xs text-teal-900 space-y-2">
              <div className="flex items-center gap-2 font-bold">
                <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Onde você será atendido:</span>
              </div>
              <p className="leading-relaxed">
                <strong>{CLINIC_INFO.address.street}</strong> - {CLINIC_INFO.address.neighborhood}, Cotia - SP (CEP {CLINIC_INFO.address.zip}). Estacionamento próprio gratuito no local.
              </p>
            </div>

          </AnimatedSection>

        </div>
      </section>

      {/* Confirmation Modal when form is submitted */}
      {submitted && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
          data-lenis-prevent
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-6 max-h-[90vh] overflow-y-auto" data-lenis-prevent>
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">
                Agendamento Iniciado!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A janela do WhatsApp foi aberta para você enviar a mensagem para nossa recepção na <strong>Rua Welcome, 265 em Cotia</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1 text-left">
              <p><strong>Paciente:</strong> {formData.name}</p>
              <p><strong>Tratamento:</strong> {formData.treatment}</p>
              <p><strong>Período:</strong> {getPeriodLabel(formData.preferredPeriod)}</p>
            </div>

            <div className="space-y-2">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold min-h-[48px] py-3.5 rounded-xl text-sm transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Reabrir WhatsApp</span>
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="w-full py-2.5 min-h-[40px] text-xs text-slate-500 hover:text-slate-800 font-medium"
              >
                Voltar e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
