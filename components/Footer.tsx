import React from 'react';
import { GithubIcon } from '@/components/icons/github';
import { TwitterIcon } from '@/components/icons/twitter';
import { MailCheckIcon } from '@/components/icons/mail-check';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="text-center md:text-left">
              <div className="flex items-center gap-2.5 justify-center md:justify-start mb-4">
                  <img src="/logo.svg" alt="OmniAlbum" className="w-6 h-6" />
                  <span className="font-bold text-lg text-zinc-900">OmniAlbum</span>
              </div>
              <p className="text-zinc-500 text-sm mb-4 md:mb-0">
                  © {new Date().getFullYear()} OmniAlbum. All rights reserved.
              </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex gap-6 text-sm font-medium text-zinc-500">
                <Link href="/privacy" className="hover:text-brand-600 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-brand-600 transition-colors">Terms & Conditions</Link>
            </div>

            <div className="flex gap-6 border-t md:border-t-0 md:border-l border-zinc-100 pt-6 md:pt-0 md:pl-8">
                <a href="#" className="text-zinc-400 hover:text-brand-600 transition-colors">
                    <GithubIcon size={20} />
                </a>
                <a href="#" className="text-zinc-400 hover:text-brand-600 transition-colors">
                    <TwitterIcon size={20} />
                </a>
                <a href="#" className="text-zinc-400 hover:text-brand-600 transition-colors">
                    <MailCheckIcon size={20} />
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
