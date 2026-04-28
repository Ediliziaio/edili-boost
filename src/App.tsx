import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";
import CookieBanner from "./components/CookieBanner";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));
const MaterialiGratuiti = lazy(() => import("./pages/MaterialiGratuiti"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const BlogList = lazy(() => import("./pages/admin/BlogList"));
const BlogEditor = lazy(() => import("./pages/admin/BlogEditor"));
const AuthorsList = lazy(() => import("./pages/admin/AuthorsList"));
const Offerta = lazy(() => import("./pages/Offerta"));
const ChiSiamo = lazy(() => import("./pages/ChiSiamo"));
const CasiStudio = lazy(() => import("./pages/CasiStudio"));
const Servizi = lazy(() => import("./pages/Servizi"));
const Prezzi = lazy(() => import("./pages/Prezzi"));
const Contattaci = lazy(() => import("./pages/Contattaci"));
const Serramenti = lazy(() => import("./pages/settori/Serramenti"));
const Ristrutturazioni = lazy(() => import("./pages/settori/Ristrutturazioni"));
const Fotovoltaico = lazy(() => import("./pages/settori/Fotovoltaico"));
const Impiantisti = lazy(() => import("./pages/settori/Impiantisti"));
const Tetti = lazy(() => import("./pages/settori/Tetti"));
const VerticalLanding = lazy(() => import("./pages/settori/VerticalLanding"));
const EdiliziaCloudLanding = lazy(() => import("./pages/ecosistema/EdiliziaCloudLanding"));

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/materiali-gratuiti" element={<MaterialiGratuiti />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/offerta" element={<Offerta />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/casi-studio" element={<CasiStudio />} />
              <Route path="/servizi" element={<Servizi />} />
              <Route path="/prezzi" element={<Prezzi />} />
              <Route path="/contattaci" element={<Contattaci />} />
              <Route path="/settori/serramenti" element={<Serramenti />} />
              <Route path="/settori/ristrutturazioni" element={<Ristrutturazioni />} />
              <Route path="/settori/fotovoltaico" element={<Fotovoltaico />} />
              <Route path="/settori/impiantisti" element={<Impiantisti />} />
              <Route path="/settori/tetti" element={<Tetti />} />
              <Route path="/settori/imprese-edili" element={<VerticalLanding pageKey="imprese-edili" />} />
              <Route path="/settori/infissi" element={<VerticalLanding pageKey="infissi" />} />
              <Route path="/settori/finestre" element={<VerticalLanding pageKey="finestre" />} />
              <Route path="/settori/idraulici" element={<VerticalLanding pageKey="idraulici" />} />
              <Route path="/settori/coperture" element={<VerticalLanding pageKey="coperture" />} />
              <Route path="/ecosistema/edilizia-in-cloud" element={<EdiliziaCloudLanding pageKey="edilizia-in-cloud" />} />
              <Route path="/ecosistema/gestionale-edilizia" element={<EdiliziaCloudLanding pageKey="gestionale-edilizia" />} />
              <Route path="/ecosistema/crm-preventivi-cantieri" element={<EdiliziaCloudLanding pageKey="crm-preventivi-cantieri" />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<ProtectedRoute requireAdmin><Admin /></ProtectedRoute>} />
              <Route path="/admin/posts" element={<ProtectedRoute requireAdmin><BlogList /></ProtectedRoute>} />
              <Route path="/admin/posts/new" element={<ProtectedRoute requireAdmin><BlogEditor /></ProtectedRoute>} />
              <Route path="/admin/posts/:id" element={<ProtectedRoute requireAdmin><BlogEditor /></ProtectedRoute>} />
              <Route path="/admin/authors" element={<ProtectedRoute requireAdmin><AuthorsList /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <CookieBanner />
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
