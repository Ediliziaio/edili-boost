import { EicLeadForm } from "@/components/EicLeadForm";

// Form lead-gen del sito: embed EiC Form Builder (Edilizia in Cloud).
// Usato in Blog, BlogPost, Contattaci, CTA homepage e Offerta.
// I lead arrivano nel CRM con la campagna di provenienza (UTM, gclid, fbclid).
export function LeadConnectorForm() {
  return (
    <div className="flex justify-center">
      <EicLeadForm slug="marketing-edile" />
    </div>
  );
}
