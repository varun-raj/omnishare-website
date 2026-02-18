import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-white">
                    <path d="M4 16l6-6 3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <span className="font-bold text-lg text-zinc-900">OmniAlbum</span>
            </div>
            <p className="text-zinc-500 text-sm">
                © {new Date().getFullYear()} OmniAlbum. All rights reserved.
            </p>
        </div>

        <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-brand-600 transition-colors">
                <Github size={20} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-brand-600 transition-colors">
                <Twitter size={20} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-brand-600 transition-colors">
                <Mail size={20} />
            </a>
        </div>
      </div>
    </footer>
  );
};