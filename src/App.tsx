import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";

import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import TechnologiesHome from "./pages/technologies/TechnologiesHome";
import TechnologiesServices from "./pages/technologies/TechnologiesServices";
import TechServicePage from "./pages/technologies/TechServicePage";
import TechnologiesBlog from "./pages/technologies/TechnologiesBlog";
import MediaHome from "./pages/media/MediaHome";
import MediaServices from "./pages/media/MediaServices";
import MediaBlog from "./pages/media/MediaBlog";
import MedlineHome from "./pages/medline/MedlineHome";
import MedlineServices from "./pages/medline/MedlineServices";
import MedlineBlog from "./pages/medline/MedlineBlog";
import RealtyHome from "./pages/realty/RealtyHome";
import RealtyServices from "./pages/realty/RealtyServices";
import RealtyBlog from "./pages/realty/RealtyBlog";
import SectorBlogDetail from "./pages/SectorBlogDetail";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<BlogDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* CIONIX Technologies */}
            <Route path="/technologies" element={<TechnologiesHome />} />
            <Route path="/technologies/services" element={<TechnologiesServices />} />
            <Route path="/technologies/services/:serviceId" element={<TechServicePage />} />
            <Route path="/technologies/blog" element={<TechnologiesBlog />} />
            <Route path="/technologies/blog/:blogId" element={<SectorBlogDetail />} />
            {/* CIONIX Media */}
            <Route path="/media" element={<MediaHome />} />
            <Route path="/media/services" element={<MediaServices />} />
            <Route path="/media/blog" element={<MediaBlog />} />
            <Route path="/media/blog/:blogId" element={<SectorBlogDetail />} />
            {/* CIONIX Medline */}
            <Route path="/medline" element={<MedlineHome />} />
            <Route path="/medline/services" element={<MedlineServices />} />
            <Route path="/medline/blog" element={<MedlineBlog />} />
            <Route path="/medline/blog/:blogId" element={<SectorBlogDetail />} />
            {/* CIONIX Realty */}
            <Route path="/realty" element={<RealtyHome />} />
            <Route path="/realty/services" element={<RealtyServices />} />
            <Route path="/realty/blog" element={<RealtyBlog />} />
            <Route path="/realty/blog/:blogId" element={<SectorBlogDetail />} />
            {/* Admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
