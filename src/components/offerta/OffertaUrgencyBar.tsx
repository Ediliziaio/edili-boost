import { AlertTriangle } from "lucide-react";
import { meseAnnoCorrente, postiDisponibili, meseProssimo } from "@/lib/dynamic-date";

const OffertaUrgencyBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gold text-navy py-2 sm:py-2.5 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-center">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span className="text-xs sm:text-sm font-bold">
          <span className="sm:hidden">Solo {postiDisponibili} posti disponibili per {meseAnnoCorrente}!</span>
          <span className="hidden sm:inline">
            DISPONIBILE SOLO PER {meseAnnoCorrente.toUpperCase()}: ogni mese apriamo solo 3 posti nuovi. Questo mese ne rimangono {postiDisponibili} disponibili. Una volta esauriti, lista d'attesa fino a {meseProssimo}.
          </span>
        </span>
      </div>
    </div>
  );
};

export default OffertaUrgencyBar;
