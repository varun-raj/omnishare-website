import React from 'react';
import { Smartphone } from 'lucide-react';

export const AndroidCTA: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-green-500 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center justify-center p-4 bg-zinc-800 rounded-2xl mb-8 ring-1 ring-zinc-700">
            <Smartphone className="text-green-400" size={32} />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Android coming soon.</h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          We're bringing the unified album experience to Android. Join the waitlist to be the first to know when we launch on the Play Store.
        </p>
        
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
             <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-5 py-3.5 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
             />
             <button type="button" className="px-8 py-3.5 bg-green-500 text-zinc-900 font-bold rounded-xl hover:bg-green-400 transition-colors whitespace-nowrap">
                Notify Me
             </button>
        </form>
        <p className="mt-4 text-xs text-zinc-600">No spam, just one email when we launch.</p>
      </div>
    </section>
  );
};