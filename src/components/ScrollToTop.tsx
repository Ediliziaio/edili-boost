import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // La landing è già tracciata da _meInitTracking (index.html): qui contiamo
    // solo i cambi rotta SPA, per non contare due volte la prima pagina (GA4 + Meta).
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    // Meta Pixel — PageView su cambio pagina
    if (typeof window.fbq === "function") {
      window.fbq("trackSingle", "912028060826443", "PageView");
      window.fbq("trackSingleCustom", "1526425959076537", "PageviewMarketingEdile");
    }
    // GA4 — page_view come evento (config ha send_page_view:false)
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
