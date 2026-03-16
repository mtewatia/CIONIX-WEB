import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import TechnologiesHome from "./pages/technologies/TechnologiesHome";
import TechnologiesServices from "./pages/technologies/TechnologiesServices";
import TechnologiesContact from "./pages/technologies/TechnologiesContact";
import TechnologiesBlog from "./pages/technologies/TechnologiesBlog";
import MediaHome from "./pages/media/MediaHome";
import MediaServices from "./pages/media/MediaServices";
import MediaContact from "./pages/media/MediaContact";
import MediaBlog from "./pages/media/MediaBlog";
import MedlineHome from "./pages/medline/MedlineHome";
import MedlineServices from "./pages/medline/MedlineServices";
import MedlineContact from "./pages/medline/MedlineContact";
import MedlineBlog from "./pages/medline/MedlineBlog";
import RealtyHome from "./pages/realty/RealtyHome";
import RealtyServices from "./pages/realty/RealtyServices";
import RealtyContact from "./pages/realty/RealtyContact";
import RealtyBlog from "./pages/realty/RealtyBlog";
import SectorBlogDetail from "./pages/SectorBlogDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* CIONIX Technologies */}
          <Route path="/technologies" element={<TechnologiesHome />} />
          <Route path="/technologies/services" element={<TechnologiesServices />} />
          <Route path="/technologies/contact" element={<TechnologiesContact />} />
          <Route path="/technologies/blog" element={<TechnologiesBlog />} />
          <Route path="/technologies/blog/:blogId" element={<SectorBlogDetail />} />
          {/* CIONIX Media */}
          <Route path="/media" element={<MediaHome />} />
          <Route path="/media/services" element={<MediaServices />} />
          <Route path="/media/contact" element={<MediaContact />} />
          <Route path="/media/blog" element={<MediaBlog />} />
          <Route path="/media/blog/:blogId" element={<SectorBlogDetail />} />
          {/* CIONIX Medline */}
          <Route path="/medline" element={<MedlineHome />} />
          <Route path="/medline/services" element={<MedlineServices />} />
          <Route path="/medline/contact" element={<MedlineContact />} />
          <Route path="/medline/blog" element={<MedlineBlog />} />
          <Route path="/medline/blog/:blogId" element={<SectorBlogDetail />} />
          {/* CIONIX Realty */}
          <Route path="/realty" element={<RealtyHome />} />
          <Route path="/realty/services" element={<RealtyServices />} />
          <Route path="/realty/contact" element={<RealtyContact />} />
          <Route path="/realty/blog" element={<RealtyBlog />} />
          <Route path="/realty/blog/:blogId" element={<SectorBlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
