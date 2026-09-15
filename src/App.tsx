import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { TabType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeTab } from './components/HomeTab';
import { TreatmentsTab } from './components/TreatmentsTab';
import { AboutTab } from './components/AboutTab';
import { TechnologyTab } from './components/TechnologyTab';
import { LocationTab } from './components/LocationTab';
import { BookingTab } from './components/BookingTab';
import { FaqTab } from './components/FaqTab';
import { PolicyModal } from './components/PolicyModal';
import { SitemapModal } from './components/SitemapModal';
import { LlmTxtModal } from './components/LlmTxtModal';
import { CookieBanner } from './components/CookieBanner';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>('');
  const [bookingTreatmentName, setBookingTreatmentName] = useState<string>('');
  const [policyModalKey, setPolicyModalKey] = useState<'privacidade' | 'termos' | 'etica' | 'cookies' | null>(null);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [isLlmTxtOpen, setIsLlmTxtOpen] = useState(false);

  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Synchronize URL hash with activeTab for direct navigation & SEO anchor links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'tratamentos', 'sobre', 'estrutura', 'localizacao', 'agendamento', 'faq'].includes(hash)) {
        setActiveTab(hash as TabType);
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.location.hash = tab;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectTreatmentForBooking = (treatmentName: string) => {
    setBookingTreatmentName(treatmentName);
    setActiveTab('agendamento');
    window.location.hash = 'agendamento';
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTreatmentFromHome = (treatmentId: string) => {
    setSelectedTreatmentId(treatmentId);
    setActiveTab('tratamentos');
    window.location.hash = 'tratamentos';
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-teal-500 selection:text-white">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenQuickBooking={() => handleTabChange('agendamento')}
      />

      {/* Main Content Rendered by Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeTab
            onNavigate={handleTabChange}
            onSelectTreatment={handleTreatmentFromHome}
          />
        )}

        {activeTab === 'tratamentos' && (
          <TreatmentsTab
            onNavigate={handleTabChange}
            selectedTreatmentId={selectedTreatmentId}
            onSelectTreatmentForBooking={handleSelectTreatmentForBooking}
          />
        )}

        {activeTab === 'sobre' && (
          <AboutTab onNavigate={handleTabChange} />
        )}

        {activeTab === 'estrutura' && (
          <TechnologyTab onNavigate={handleTabChange} />
        )}

        {activeTab === 'localizacao' && (
          <LocationTab onNavigate={handleTabChange} />
        )}

        {activeTab === 'agendamento' && (
          <BookingTab
            initialTreatment={bookingTreatmentName}
            onOpenPrivacyPolicy={() => setPolicyModalKey('privacidade')}
          />
        )}

        {activeTab === 'faq' && (
          <FaqTab onNavigate={handleTabChange} />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer
        onNavigate={handleTabChange}
        onOpenPolicy={(policy) => setPolicyModalKey(policy)}
        onOpenSitemap={() => setIsSitemapOpen(true)}
        onOpenLlmTxt={() => setIsLlmTxtOpen(true)}
      />

      {/* Floating Action Elements */}
      <FloatingWhatsApp onQuickBook={() => handleTabChange('agendamento')} />
      <CookieBanner onOpenCookiePolicy={() => setPolicyModalKey('cookies')} />

      {/* Modals */}
      <PolicyModal
        policyKey={policyModalKey}
        onClose={() => setPolicyModalKey(null)}
      />

      <SitemapModal
        isOpen={isSitemapOpen}
        onClose={() => setIsSitemapOpen(false)}
        onNavigate={handleTabChange}
      />

      <LlmTxtModal
        isOpen={isLlmTxtOpen}
        onClose={() => setIsLlmTxtOpen(false)}
      />
    </div>
  );
}
