import { AlertTriangle } from "lucide-react";

const OffertaUrgencyBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gold text-navy py-2 sm:py-2.5 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-center">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span className="text-xs sm:text-sm font-bold">
          <span className="sm:hidden">Solo 3 posti disponibili per marzo 2026!</span>
          <span className="hidden sm:inline">
            DISPONIBILE SOLO PER MARZO 2026: ogni mese apriamo solo 5 posti nuovi. Questo mese ne rimangono 3 disponibili. Una volta esauriti, lista d'attesa fino ad aprile.
          </span>
        </span>
      </div>
    </div>
  );
};

export default OffertaUrgencyBar;
