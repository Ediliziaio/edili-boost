import { lazy, Suspense } from "react";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/seo";
import logo from "@/assets/marketing-edile-logo.png";

import OffertaUrgencyBar from "@/components/offerta/OffertaUrgencyBar";
import OffertaHero from "@/components/offerta/OffertaHero";
import OffertaLetterSection from "@/components/offerta/OffertaLetterSection";

// Lazy load below-the-fold sections
const OffertaErroriSection = lazy(() => import("@/components/offerta/OffertaErroriSection"));
const OffertaSistemaSection = lazy(() => import("@/components/offerta/OffertaSistemaSection"));
const OffertaFounderSection = lazy(() => import("@/components/offerta/OffertaFounderSection"));
const OffertaBeneficiSection = lazy(() => import("@/components/offerta/OffertaBeneficiSection"));
const OffertaComparisonSection = lazy(() => import("@/components/offerta/OffertaComparisonSection"));
const OffertaPricingSection = lazy(() => import("@/components/offerta/OffertaPricingSection"));
const OffertaStatsSection = lazy(() => import("@/components/offerta/OffertaStatsSection"));
const OffertaTestimonialsSection = lazy(() => import("@/components/offerta/OffertaTestimonialsSection"));
const OffertaPerChiSection = lazy(() => import("@/components/offerta/OffertaPerChiSection"));
const OffertaBonusSection = lazy(() => import("@/components/offerta/OffertaBonusSection"));
const OffertaFAQSection = lazy(() => import("@/components/offerta/OffertaFAQSection"));
const OffertaFinalCTASection = lazy(() => import("@/components/offerta/OffertaFinalCTASection"));
const OffertaMinimalFooter = lazy(() => import("@/components/offerta/OffertaMinimalFooter"));

const Offerta = () => {
  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebSiteSchema(),
  ];

  return (
    <>
      <SEOHead
        title="Offerta — Acquisizione Clienti Edili"
        description="Marketing Edile® porta clienti pronti all'acquisto. Solo a percentuale, nessun canone fisso. Se non vendiamo, non ci devi nulla."
        keywords={siteConfig.pageKeywords.offerta}
        url={`${siteConfig.url}/offerta`}
        jsonLd={schemas}
      />
      <OffertaUrgencyBar />

      <div className="pt-12 pb-2 bg-background flex justify-center">
        <img src={logo} alt="Marketing Edile" className="h-12 md:h-16" />
      </div>

      <main className="overflow-hidden">
        <OffertaHero />
        <OffertaLetterSection />
        <Suspense fallback={null}>
          <OffertaErroriSection />
          <OffertaSistemaSection />
          <OffertaFounderSection />
          <OffertaBeneficiSection />
          <OffertaComparisonSection />
          <OffertaPricingSection />
          <OffertaStatsSection />
          <OffertaTestimonialsSection />
          <OffertaPerChiSection />
          <OffertaBonusSection />
          <OffertaFAQSection />
          <OffertaFinalCTASection />
          <OffertaMinimalFooter />
        </Suspense>
      </main>
    </>
  );
};

export default Offerta;
