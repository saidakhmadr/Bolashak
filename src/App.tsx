import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Research from "./pages/Research";
import Admissions from "./pages/Admissions";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AdminPanel from './pages/AdminPanel';
import React, { createContext, useContext, useState, useEffect } from "react";

const queryClient = new QueryClient();

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Language Context
const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => {},
});

export const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem('lang') || 'en');
  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Floating Auth Buttons (global, top right, red, fade out on scroll)
function AuthButtons() {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    function handleScroll() {
      const maxScroll = 120;
      const scrollY = window.scrollY;
      let newOpacity = 1;
      if (scrollY > 0) {
        newOpacity = Math.max(0, 1 - scrollY / maxScroll);
      }
      setOpacity(newOpacity);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Set initial opacity in case page is loaded scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      className="hidden md:flex fixed top-6 right-8 z-[100] space-x-2 pointer-events-auto transition-opacity duration-500"
      style={{ opacity }}
    >
      <Link to="/signin" className="px-4 py-1.5 rounded-full border border-red-700 bg-red-700 text-white font-bold hover:bg-red-800 hover:border-red-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 shadow-none text-sm">
        Sign In
      </Link>
      <Link to="/signup" className="px-4 py-1.5 rounded-full border border-red-700 bg-red-700 text-white font-bold hover:bg-red-800 hover:border-red-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 shadow-none text-sm">
        Sign Up
      </Link>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AuthButtons />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/research" element={<Research />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
