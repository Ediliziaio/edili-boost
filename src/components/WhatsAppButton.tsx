import { motion } from "framer-motion";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="white" className={className}>
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.91 15.91 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.35 22.606c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.824-6.81-8.062-7.126-.228-.316-1.916-2.55-1.916-4.864 0-2.314 1.212-3.452 1.642-3.924.39-.428 1.028-.618 1.638-.618.198 0 .376.01.536.018.47.02.706.048 1.016.788.388.924 1.334 3.258 1.45 3.496.118.238.236.554.078.87-.148.326-.278.528-.516.81-.238.282-.5.628-.712.844-.238.242-.486.506-.21.994.278.488 1.236 2.04 2.654 3.306 1.822 1.626 3.358 2.13 3.836 2.366.478.236.756.198 1.034-.118.278-.316 1.194-1.39 1.512-1.868.316-.478.634-.396 1.068-.236.436.158 2.762 1.302 3.236 1.54.474.236.79.356.908.554.116.198.116 1.148-.274 2.248z" />
  </svg>
);

const WhatsAppButton = () => {
  const link = "https://wa.me/393501782744";
  const animProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 2, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  };

  const trackClick = () => {
    if (typeof window.fbq === "function") {
      window.fbq("trackSingle", "912028060826443", "Lead", { content_name: "WhatsApp Click" });
    }
  };

  return (
    <>
      {/* Desktop: round floating button */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatta con noi su WhatsApp"
        onClick={trackClick}
        {...animProps}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        style={{
          backgroundColor: "#25D366",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
        }}
      >
        <WhatsAppIcon className="w-8 h-8" />
      </motion.a>

      {/* Mobile: full-width bottom bar */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        onClick={trackClick}
        {...animProps}
        whileTap={{ scale: 0.98 }}
        className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 items-center justify-center gap-3 py-4 px-6 text-white font-bold text-sm tracking-wide"
        style={{
          backgroundColor: "#25D366",
          boxShadow: "0 -2px 16px rgba(37, 211, 102, 0.3)",
        }}
      >
        <WhatsAppIcon className="w-5 h-5" />
        CONTATTACI SU WHATSAPP
      </motion.a>
    </>
  );
};

export default WhatsAppButton;
