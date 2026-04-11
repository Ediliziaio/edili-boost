import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const CONSENT_KEY = "cookie-consent";

type ConsentValue = "all" | "necessary" | null;

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: "all" | "necessary") => {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
    if (value === "all" && typeof window._meInitTracking === "function") {
      window._meInitTracking();
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-narrow mx-auto bg-card border border-border/50 rounded-xl p-5 md:p-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-secondary" />
              </div>

              <div className="flex-1 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Questo sito utilizza cookie tecnici necessari al funzionamento e, previo tuo consenso, cookie di profilazione per migliorare la tua esperienza e mostrarti contenuti personalizzati. Puoi scegliere di accettare tutti i cookie o utilizzare solo quelli necessari.{" "}
                  <Link
                    to="/cookie-policy"
                    className="text-secondary hover:underline font-medium"
                  >
                    Leggi la Cookie Policy
                  </Link>
                </p>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => handleConsent("all")}
                  >
                    Accetta tutti
                  </Button>
                  <Button
                    variant="goldOutline"
                    size="sm"
                    onClick={() => handleConsent("necessary")}
                  >
                    Solo necessari
                  </Button>
                </div>
              </div>

              <button
                onClick={() => handleConsent("necessary")}
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                aria-label="Chiudi banner cookie"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
