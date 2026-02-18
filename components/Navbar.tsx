'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (!isHome) {
      router.push('/');
      // Give time for navigation to happen
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logo.svg" alt="OmniAlbum" className="w-8 h-8" />
          <span className="font-bold text-xl tracking-tight text-zinc-900">OmniAlbum</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
          <button onClick={() => scrollToSection('features')} className="hover:text-brand-600 transition-colors bg-transparent border-0 cursor-pointer">Features</button>
          <button onClick={() => scrollToSection('providers')} className="hover:text-brand-600 transition-colors bg-transparent border-0 cursor-pointer">Providers</button>
          <button onClick={() => scrollToSection('users')} className="hover:text-brand-600 transition-colors bg-transparent border-0 cursor-pointer">For You</button>
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
           <button onClick={() => scrollToSection('features')} className="text-left text-zinc-600 hover:text-brand-600 font-medium bg-transparent border-0">Features</button>
           <button onClick={() => scrollToSection('providers')} className="text-left text-zinc-600 hover:text-brand-600 font-medium bg-transparent border-0">Providers</button>
           <button onClick={() => scrollToSection('users')} className="text-left text-zinc-600 hover:text-brand-600 font-medium bg-transparent border-0">Target Users</button>
           <a href="#" className="bg-brand-600 text-white px-5 py-3 rounded-xl text-sm font-semibold w-full mt-4 shadow-lg shadow-brand-500/20 text-center block">
            Download App
          </a>
        </div>
      )}
    </nav>
  );
};
