import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Providers } from './components/Providers';
import { Users } from './components/Users';
import { Footer } from './components/Footer';
import { AndroidCTA } from './components/AndroidCTA';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Terms } from './components/Terms';
import { useEffect } from 'react';

// Wrapper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LandingPage = () => (
  <>
    <Hero />
    <Features />
    <Providers />
    <Users />
    <AndroidCTA />
  </>
);

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-brand-500/20 selection:text-brand-700 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;