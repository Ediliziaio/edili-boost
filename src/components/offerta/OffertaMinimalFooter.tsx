import { Link } from "react-router-dom";

const OffertaMinimalFooter = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground font-semibold mb-1">Marketing Edile® — Domus Group S.r.l.</p>
        <p className="text-sm text-muted-foreground mb-3">
          Via Aurelio Saffi 29, 20123 Milano | P.IVA 11123S0946
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          amministrazione@domusgroupitalia.it
        </p>
        <div className="flex justify-center gap-4 text-xs text-muted-foreground">
          <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link to="/cookie-policy" className="hover:text-gold transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default OffertaMinimalFooter;
