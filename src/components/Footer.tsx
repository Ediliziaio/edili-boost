import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/marketing-edile-logo.png";

const navLinks = [
  { label: "Chi Siamo", href: "/chi-siamo", isExternal: true },
  { label: "Casi Studio", href: "/casi-studio", isExternal: true },
  { label: "Servizi", href: "/servizi", isExternal: true },
  { label: "Prezzi", href: "/prezzi", isExternal: true },
  { label: "Blog", href: "/blog", isExternal: true },
  { label: "Contattaci", href: "/contattaci", isExternal: true },
  { label: "Materiali Gratuiti", href: "/materiali-gratuiti", isExternal: true },
];

const Footer = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 pb-20 md:pb-16 px-6 bg-navy-light border-t border-border/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block mb-4"
              aria-label="Marketing Edile - Torna alla homepage"
            >
              <img src={logo} alt="Marketing Edile® — Agenzia marketing per imprese edili" className="h-10 w-auto" width="160" height="40" />
            </Link>
            <p className="text-muted-foreground mb-6">
              Il sistema di marketing costruito sul campo per aziende edili e
              serramentisti.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4 uppercase tracking-wider text-sm">
              Link Rapidi
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Link rapidi del sito">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </nav>
          </div>

          {/* Settori */}
          <div>
            <h4 className="text-foreground font-bold mb-4 uppercase tracking-wider text-sm">
              Settori
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Pagine settori">
              <Link to="/settori/serramenti" className="text-muted-foreground hover:text-gold transition-colors">Marketing Serramenti</Link>
              <Link to="/settori/ristrutturazioni" className="text-muted-foreground hover:text-gold transition-colors">Marketing Ristrutturazioni</Link>
              <Link to="/settori/fotovoltaico" className="text-muted-foreground hover:text-gold transition-colors">Marketing Fotovoltaico</Link>
              <Link to="/settori/impiantisti" className="text-muted-foreground hover:text-gold transition-colors">Marketing Impiantisti</Link>
              <Link to="/settori/tetti" className="text-muted-foreground hover:text-gold transition-colors">Marketing Tetti</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-bold mb-4 uppercase tracking-wider text-sm">
              Contatti
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:Amministrazione@domusgroupitalia.it"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold" />
                Amministrazione@domusgroupitalia.it
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span>Via Aurelio Saffi 29, 20123 Milano</span>
              </div>
            </div>
          </div>

          {/* Dati Aziendali */}
          <div className="md:col-span-4 mt-4">
            <div className="pt-6 border-t border-border/30 text-sm text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">Domus Group S.r.l.</p>
              <p>Sede Legale: Via Aurelio Saffi 29, CAP 20123 — P.IVA: 13132010961</p>
              <p>Capitale Sociale: 20.000,00€ — PEC: domusgroupsrl@legalmail.it — SDI: USAL8PV</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MARKETING EDILE® — Tutti i diritti
            riservati
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="hover:text-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
