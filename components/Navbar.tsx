import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center shadow-md">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5 text-white">
              <path d="M4 16l6-6 3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-zinc-900">OmniAlbum</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
          <a href="#features" className="hover:text-brand-600 transition-colors">Features</a>
          <a href="#providers" className="hover:text-brand-600 transition-colors">Providers</a>
          <a href="#users" className="hover:text-brand-600 transition-colors">For You</a>
          <a href="#specs" className="hover:text-brand-600 transition-colors">Specs</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#" className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10 inline-block">
            Download App
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-zinc-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-zinc-200 p-6 flex flex-col gap-4 shadow-xl">
           <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-600 hover:text-brand-600 font-medium">Features</a>
           <a href="#providers" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-600 hover:text-brand-600 font-medium">Providers</a>
           <a href="#users" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-600 hover:text-brand-600 font-medium">Target Users</a>
           <a href="#" className="bg-brand-600 text-white px-5 py-3 rounded-xl text-sm font-semibold w-full mt-4 shadow-lg shadow-brand-500/20 text-center block">
            Download App
          </a>
        </div>
      )}
    </nav>
  );
};