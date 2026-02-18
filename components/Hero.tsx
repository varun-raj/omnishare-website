import React, { useEffect, useState } from 'react';
import { ArrowRight, Apple, RefreshCw, MapPin, CheckCircle, Lock, Layout, Search } from 'lucide-react';

interface FloatingCardProps {
  children: React.ReactNode;
  className: string;
  factor?: number;
  mousePos: { x: number; y: number };
}

// Floating Card Component with Parallax Support
const FloatingCard: React.FC<FloatingCardProps> = ({ 
  children, 
  className, 
  factor = 1,
  mousePos
}) => {
  // Calculate parallax offset (opposite to mouse movement for depth)
  const translateX = mousePos.x * factor;
  const translateY = mousePos.y * factor;

  return (
    <div 
      className={`absolute z-10 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border flex items-center gap-3 transition-transform duration-100 ease-out ${className}`}
      style={{ 
        transform: `translate(${translateX}px, ${translateY}px)` 
      }}
    >
      {children}
    </div>
  );
};

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position from center (-1 to 1 range approx)
      // Multiplied by a constant to determine max pixel movement
      const x = (e.clientX - window.innerWidth / 2) / 25;
      const y = (e.clientY - window.innerHeight / 2) / 25;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white selection:bg-zinc-100">
      
      {/* Light Patterns */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-blue-100/40 to-transparent blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-purple-100/40 to-transparent blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-sm font-medium text-zinc-600 mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          v1.0 Available on App Store
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-zinc-900 leading-[1.15]">
          Every server. <br />
          One unified album.
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          The native iOS client for self-hosted photographers. Connect Immich, Nextcloud, and PhotoPrism in a single, beautiful interface.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
          <button className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-zinc-900/10">
            <Apple fill="currentColor" size={20} />
            Download for iOS
          </button>
          <button className="flex items-center gap-2 px-8 py-4 rounded-full font-medium text-zinc-600 hover:text-zinc-900 bg-white border border-zinc-200 hover:border-zinc-300 transition-all shadow-sm hover:shadow-md group">
            View Features <ArrowRight size={18} className="text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Central Visual Area */}
        <div className="relative w-full max-w-4xl mx-auto h-[650px] md:h-[800px] flex justify-center mt-8">
            
            {/* Main Phone Image Frame */}
            <div className="relative z-20 transition-transform duration-300 ease-out flex justify-center items-start" style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}>
                 <div className="relative w-[300px] md:w-[340px] aspect-[9/19.5] bg-zinc-900 rounded-[3.5rem] shadow-2xl p-3 ring-1 ring-zinc-900/10 border-4 border-zinc-800">
                    {/* Screen Container */}
                    <div className="w-full h-full bg-black rounded-[2.8rem] overflow-hidden relative">
                         {/* Dynamic Island */}
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-xl z-30"></div>
                         
                         {/* Status Bar Mockup */}
                         <div className="absolute top-3 left-8 z-20 text-[11px] font-semibold text-white tracking-wide">9:41</div>
                         <div className="absolute top-3 right-8 z-20 flex gap-1.5 items-center">
                            <div className="w-4 h-2.5 bg-white rounded-[2px]"></div>
                         </div>

                         <img 
                            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=600&auto=format&fit=crop" 
                            alt="OmniAlbum iPhone Interface" 
                            className="w-full h-full object-cover"
                         />
                    </div>
                 </div>
            </div>

            {/* Parallax Floating Cards (6 items) */}
            
            {/* 1. Top Left - Sync Photos (was Sync Active) */}
            <FloatingCard className="hidden md:flex top-12 left-0 lg:-left-8 bg-green-100 border-green-200/50" factor={-1.5} mousePos={mousePos}>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-600 shadow-sm shrink-0">
                    <RefreshCw size={20} />
                </div>
                <div className="text-left">
                    <p className="text-sm font-bold text-green-900">Sync Photos</p>
                    <p className="text-xs text-green-700">Automatic Backup</p>
                </div>
            </FloatingCard>

            {/* 2. Top Right - Private (was Encrypted) */}
            <FloatingCard className="hidden md:flex top-24 right-4 lg:right-0 bg-blue-100 border-blue-200/50" factor={-0.8} mousePos={mousePos}>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <Lock size={20} />
                </div>
                <div className="text-left">
                    <p className="text-sm font-bold text-blue-900">Private</p>
                    <p className="text-xs text-blue-700">FaceID Secured</p>
                </div>
            </FloatingCard>

            {/* 3. Middle Left - Location */}
            <FloatingCard className="hidden md:flex top-[40%] left-8 lg:left-0 bg-orange-100 border-orange-200/50" factor={-2.2} mousePos={mousePos}>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-600 shadow-sm shrink-0">
                    <MapPin size={20} />
                </div>
                <div className="text-left">
                    <p className="text-sm font-bold text-orange-900">Tokyo, Japan</p>
                    <p className="text-xs text-orange-700">Added to map</p>
                </div>
            </FloatingCard>

            {/* 4. Middle Right - Home Page Widgets (was Smart Sort) */}
            <FloatingCard className="hidden md:flex top-[45%] right-0 lg:-right-12 bg-indigo-100 border-indigo-200/50" factor={-1.2} mousePos={mousePos}>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
                    <Layout size={20} />
                </div>
                <div className="text-left">
                    <p className="text-sm font-bold text-indigo-900">Home Widgets</p>
                    <p className="text-xs text-indigo-700">Daily Highlights</p>
                </div>
            </FloatingCard>

             {/* 5. Bottom Left - Search */}
             <FloatingCard className="hidden md:flex bottom-32 left-12 lg:left-8 bg-pink-100 border-pink-200/50" factor={-0.9} mousePos={mousePos}>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pink-600 shadow-sm shrink-0">
                    <Search size={20} />
                </div>
                <div className="text-left">
                    <p className="text-sm font-bold text-pink-900">Search</p>
                    <p className="text-xs text-pink-700">"Sunset at beach"</p>
                </div>
            </FloatingCard>

            {/* 6. Bottom Right - Backed Up */}
            <FloatingCard className="hidden md:flex bottom-40 right-12 lg:right-4 bg-purple-100 border-purple-200/50" factor={-1.8} mousePos={mousePos}>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600 shadow-sm shrink-0">
                    <CheckCircle size={20} />
                </div>
                <div className="text-left">
                    <p className="text-sm font-bold text-purple-900">Backed Up</p>
                    <p className="text-xs text-purple-700">1,204 Photos</p>
                </div>
            </FloatingCard>

        </div>
      </div>
    </section>
  );
};