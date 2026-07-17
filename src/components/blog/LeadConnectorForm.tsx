// Form lead-gen del sito: embed EiC Form Builder (Edilizia in Cloud).
// Usato in Blog, BlogPost, Contattaci, CTA homepage e Offerta.
export function LeadConnectorForm() {
  return (
    <div className="flex justify-center">
      <iframe
        src="https://app.ediliziaincloud.com/f?slug=marketing-edile&company_id=00000000-0000-0000-0000-000000000001"
        title="Richiedi informazioni"
        loading="lazy"
        width="100%"
        height="640"
        style={{ border: 0, maxWidth: 640 }}
      />
    </div>
  );
}
