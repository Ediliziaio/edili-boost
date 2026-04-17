import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Pagina Non Trovata — 404"
        description="La pagina che stai cercando non esiste. Torna alla homepage di Marketing Edile®."
        noindex
      />
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center px-6">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <p className="mb-2 text-2xl font-semibold text-foreground">Pagina non trovata</p>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            La pagina che stai cercando potrebbe essere stata spostata o non esiste più.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Torna alla Homepage
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
