'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PainPoints } from '@/components/PainPoints';
import { Pillars } from '@/components/Pillars';
import { SocialProof } from '@/components/SocialProof';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { AuraChatWidget } from '@/components/AuraChatWidget';
import { AdminLeadsDrawer } from '@/components/AdminLeadsDrawer';
import { RegistrationModal } from '@/components/RegistrationModal';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [externalMessage, setExternalMessage] = useState<string | undefined>(undefined);

  const handleOpenChatWithMessage = (msg?: string) => {
    setIsChatOpen(true);
    if (msg) {
      setExternalMessage(msg);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080b11] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Top Navigation */}
      <Navbar
        onOpenChat={() => setIsChatOpen(true)}
        onOpenLeads={() => setIsAdminOpen(true)}
        unreadCount={isChatOpen ? 0 : 1}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        <Hero onOpenChat={handleOpenChatWithMessage} />

        <PainPoints onSelectPain={handleOpenChatWithMessage} />

        <Pillars />

        <SocialProof />

        <CTASection
          onOpenChat={handleOpenChatWithMessage}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenLeads={() => setIsAdminOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Aura Floating Conversational AI Agent */}
      <AuraChatWidget
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        externalTriggerMessage={externalMessage}
        onResetExternalTrigger={() => setExternalMessage(undefined)}
      />

      {/* Admin Leads Drawer */}
      <AdminLeadsDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Registration & Lead Confirmation Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onLeadCaptured={(name, email) => {
          // You can trigger celebration sound or notification
        }}
      />

    </div>
  );
}
