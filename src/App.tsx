import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Research from "./pages/Research";
import Admissions from "./pages/Admissions";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/research" element={<Research />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
