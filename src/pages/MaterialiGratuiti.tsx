import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Play, Clock, Download, ArrowRight, Wrench, Users, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, generateBreadcrumbSchema } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "pdf" | "video" | "tool" | "community";
  duration?: string;
  cta: string;
  url: string;
  imageUrl?: string;
}

const pdfResources: Resource[] = [
  {
    id: "manuale-ci-devo-pensare",
    title: "Come Rispondere a 'Ci Devo Pensare' e Trasformarlo in un 'Ok, Firmo'",
    description:
      "Manuale pratico per gestire l'obiezione più comune in edilizia e chiudere più trattative senza pressione.",
    type: "pdf",
    cta: "Scarica Gratis",
    url: "https://drive.google.com/file/d/1Tkbi8Yqw23c8lTMhkksyZXpgHzw6vhv4/view?usp=sharing",
    imageUrl: "https://assets.cdn.filesafe.space/kCuaZpckAIFkrq7F16Jv/media/689056845c0d738ea0616345.png",
  },
  {
    id: "manuale-preventivo-vendita",
    title: "Come Trasformare un Preventivo in una Vendita (Senza Rincorrere il Cliente)",
    description:
      "Scopri il metodo per trasformare i tuoi preventivi in contratti firmati, senza dover rincorrere i clienti.",
    type: "pdf",
    cta: "Scarica Gratis",
    url: "https://drive.google.com/file/d/1HIpJ1p9yzK79ntTIydk6AC0aFRe7-JPr/view?usp=sharing",
    imageUrl: "https://assets.cdn.filesafe.space/kCuaZpckAIFkrq7F16Jv/media/689056843c4315ef7d918be7.png",
  },
];

const toolResources: Resource[] = [
  {
    id: "crm-otp-gratuito",
    title: "CRM Gratuito 'OTP' per Aziende Edili",
    description:
      "Il CRM pensato per le aziende edili: gestisci contatti, preventivi e follow-up in un unico strumento gratuito.",
    type: "tool",
    cta: "Accedi Gratis",
    url: "https://venditaedile.it/crmgratis",
    imageUrl: "https://assets.cdn.filesafe.space/kCuaZpckAIFkrq7F16Jv/media/6893452ed69f994175d4bd45.png",
  },
  {
    id: "gruppo-facebook-imprenditori",
    title: "Gruppo Facebook per Imprenditori Edili",
    description:
      "Entra nella community esclusiva di imprenditori edili. Confronto, strategie e supporto tra colleghi del settore.",
    type: "community",
    cta: "Unisciti Gratis",
    url: "https://www.facebook.com/groups/marketingedile?locale=it_IT",
    imageUrl: "https://assets.cdn.filesafe.space/kCuaZpckAIFkrq7F16Jv/media/68905868c8d412596bccbd87.png",
  },
];

const videoResources: Resource[] = [
  {
    id: "video-15-clienti-mese",
    title: "15 Nuovi Clienti OGNI MESE con questo Sistema",
    description:
      "Scopri il sistema completo per generare almeno 15 nuovi clienti ogni mese nella tua azienda edile.",
    type: "video",
    duration: "18 min",
    cta: "Guarda Ora",
    url: "https://www.youtube.com/watch?v=iIi2TOB5UPM",
    imageUrl: "https://assets.cdn.filesafe.space/kCuaZpckAIFkrq7F16Jv/media/68b174310b7a45b9c6515c5b.png",
  },
  {
    id: "video-chiudere-preventivi",
    title: "Come Chiudere Preventivi in Edilizia: Strategie e Consigli Pratici",
    description:
      "Video tutorial con strategie concrete per aumentare il tasso di chiusura dei tuoi preventivi nel settore edile.",
    type: "video",
    duration: "22 min",
    cta: "Guarda Ora",
    url: "https://www.youtube.com/watch?v=MwRPEy0NHSw",
    imageUrl: "https://assets.cdn.filesafe.space/kCuaZpckAIFkrq7F16Jv/media/68b1743009ec254619b988a6.png",
  },
];

const iconMap = {
  pdf: FileText,
  video: Play,
  tool: Wrench,
  community: Users,
};

const ResourceCard = ({
  resource,
  index,
  onRequest,
}: {
  resource: Resource;
  index: number;
  onRequest: (resource: Resource) => void;
}) => {
  const Icon = iconMap[resource.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm flex flex-col justify-between hover:border-gold/40 transition-all duration-300 overflow-hidden"
    >
      {resource.imageUrl && (
        <div className="w-full aspect-[4/3] overflow-hidden">
          <img
            src={resource.imageUrl}
            alt={resource.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-gold" />
          </div>
          {resource.duration && (
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {resource.duration}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
          {resource.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
          {resource.description}
        </p>

        <Button
          variant="gold"
          className="w-full gap-2"
          onClick={() => onRequest(resource)}
        >
          {resource.type === "pdf" ? <Download className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
          {resource.cta}
        </Button>
      </div>
    </motion.div>
  );
};

const MaterialiGratuiti = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedResource || !nome.trim() || !email.trim()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("lead_captures").insert({
        nome: nome.trim(),
        email: email.trim(),
        risorsa_id: selectedResource.id,
      });

      if (error) throw error;
      setSubmitted(true);
    } catch {
      toast({
        title: "Errore",
        description: "Qualcosa è andato storto. Riprova.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSelectedResource(null);
    setNome("");
    setEmail("");
    setSubmitted(false);
  };

  const handleCtaClick = () => {
    navigate("/#candidati");
  };

  const sectionData = [
    { title: "Manuali PDF", icon: FileText, resources: pdfResources },
    { title: "Strumenti & Community", icon: Wrench, resources: toolResources },
    { title: "Video", icon: Play, resources: videoResources },
  ];

  return (
    <>
      <SEOHead
        title="Risorse Gratuite Imprenditori Edili"
        description="Manuali PDF, CRM gratuito, video e community per imprenditori edili. Chiudi più preventivi e trova nuovi clienti."
        keywords={siteConfig.pageKeywords.materialiGratuiti}
        url={`${siteConfig.url}/materiali-gratuiti`}
        jsonLd={[
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Materiali Gratuiti", url: `${siteConfig.url}/materiali-gratuiti` }
          ])
        ]}
      />
      <Navbar />

      <main className="min-h-screen bg-background pt-28 pb-16">
        {/* Header */}
        <section className="px-6 mb-16">
          <div className="container-narrow text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Risorse Gratuite
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="heading-section mb-4"
            >
              Più Clienti, Più Cantieri, Più <span className="text-gold">Profitti</span>… Subito
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Scarica manuali, accedi a strumenti e guarda video pensati per
              imprenditori edili che vogliono crescere davvero.
            </motion.p>
          </div>
        </section>

        {/* Sections */}
        {sectionData.map((section) => (
          <section key={section.title} className="section-padding px-6">
            <div className="container-narrow">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-gold" />
                </div>
                <h2 className="text-xl font-bold text-foreground uppercase tracking-wide">
                  {section.title}
                </h2>
              </motion.div>

              <div className={`grid gap-6 ${section.resources.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                {section.resources.map((r, i) => (
                  <ResourceCard
                    key={r.id}
                    resource={r}
                    index={i}
                    onRequest={setSelectedResource}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Finale */}
        <section className="section-padding px-6">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gold/20 bg-gold/5 p-8 md:p-12 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Vuoi risultati <span className="text-gold">concreti</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                I materiali gratuiti ti danno le basi. Se vuoi un sistema
                completo costruito su misura per la tua azienda, candidati per
                una valutazione gratuita.
              </p>
              <Button
                variant="gold"
                size="xl"
                className="glow-gold-sm gap-2"
                onClick={handleCtaClick}
              >
                Richiedi Valutazione Gratuita
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lead Capture Modal */}
      <Dialog open={!!selectedResource} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className="sm:max-w-md border-border/50">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              {submitted ? "Accesso Sbloccato! 🎉" : selectedResource?.title}
            </DialogTitle>
            <DialogDescription>
              {submitted
                ? "Clicca il bottone qui sotto per accedere alla risorsa."
                : "Inserisci i tuoi dati per accedere gratuitamente a questa risorsa."}
            </DialogDescription>
          </DialogHeader>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  placeholder="Il tuo nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="la-tua@email.it"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  maxLength={255}
                />
              </div>
              <Button
                type="submit"
                variant="gold"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Invio in corso..." : selectedResource?.cta}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Niente spam. Solo risorse di valore.
              </p>
            </form>
          ) : (
            <div className="text-center py-4 space-y-3">
              <Button
                variant="gold"
                className="w-full gap-2"
                onClick={() => window.open(selectedResource?.url, "_blank")}
              >
                <ExternalLink className="w-4 h-4" />
                Accedi alla Risorsa
              </Button>
              <Button variant="ghost" onClick={handleClose} className="w-full">
                Chiudi
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MaterialiGratuiti;
