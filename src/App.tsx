import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import MaterialiGratuiti from "./pages/MaterialiGratuiti";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import BlogList from "./pages/admin/BlogList";
import BlogEditor from "./pages/admin/BlogEditor";
import AuthorsList from "./pages/admin/AuthorsList";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";
import Offerta from "./pages/Offerta";
import ChiSiamo from "./pages/ChiSiamo";
import CasiStudio from "./pages/CasiStudio";
import Servizi from "./pages/Servizi";
import Prezzi from "./pages/Prezzi";
import Contattaci from "./pages/Contattaci";
import Serramenti from "./pages/settori/Serramenti";
import Ristrutturazioni from "./pages/settori/Ristrutturazioni";
import Fotovoltaico from "./pages/settori/Fotovoltaico";
import Impiantisti from "./pages/settori/Impiantisti";
import Tetti from "./pages/settori/Tetti";
import CookieBanner from "./components/CookieBanner";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<ProtectedRoute requireAdmin><Admin /></ProtectedRoute>} />
            <Route path="/admin/posts" element={<ProtectedRoute requireAdmin><BlogList /></ProtectedRoute>} />
            <Route path="/admin/posts/new" element={<ProtectedRoute requireAdmin><BlogEditor /></ProtectedRoute>} />
            <Route path="/admin/posts/:id" element={<ProtectedRoute requireAdmin><BlogEditor /></ProtectedRoute>} />
            <Route path="/admin/authors" element={<ProtectedRoute requireAdmin><AuthorsList /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieBanner />
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
