import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Track SPA page views for Meta Pixel + GA4
    if (typeof window.fbq === "function") {
      window.fbq("trackSingle", "912028060826443", "PageView");
      window.fbq("trackSingleCustom", "1526425959076537", "PageviewMarketingEdile");
    }
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-WPFY0KXY0Y", { page_path: pathname });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
