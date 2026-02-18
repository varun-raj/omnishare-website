'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Apple } from 'lucide-react';
import { ArrowRightIcon } from '@/components/icons/arrow-right';
import { RefreshCWIcon } from '@/components/icons/refresh-cw';
import { MapPinIcon } from '@/components/icons/map-pin';
import { CircleCheckIcon } from '@/components/icons/circle-check';
import { LockIcon } from '@/components/icons/lock';
import { GripIcon } from '@/components/icons/grip';
import { SearchIcon } from '@/components/icons/search';

interface IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface FloatingCardProps {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  className: string;
  iconClassName: string;
  titleClassName: string;
  subtitleClassName: string;
  factor?: number;
  mousePos: { x: number; y: number };
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  icon,
  title,
  subtitle,
  className,
  iconClassName,
  titleClassName,
  subtitleClassName,
  factor = 1,
  mousePos
}) => {
  const iconRef = useRef<IconHandle>(null);
  const translateX = mousePos.x * factor;
  const translateY = mousePos.y * factor;

  return (
    <div
      className={`absolute z-10 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border flex items-center gap-3 transition-transform duration-100 ease-out ${className}`}
      style={{ transform: `translate(${translateX}px, ${translateY}px)` }}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 ${iconClassName}`}>
        {React.cloneElement(icon, { ref: iconRef })}
      </div>
      <div className="text-left">
        <p className={`text-sm font-bold ${titleClassName}`}>{title}</p>
        <p className={`text-xs ${subtitleClassName}`}>{subtitle}</p>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-sm font-medium text-emerald-700 mb-8 shadow-sm">
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
            Get for $8.99
          </button>
          <button className="flex items-center gap-2 px-8 py-4 rounded-full font-medium text-zinc-600 hover:text-zinc-900 bg-white border border-zinc-200 hover:border-zinc-300 transition-all shadow-sm hover:shadow-md group">
            View Features <ArrowRightIcon size={18} className="text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Central Visual Area */}
        <div className="relative w-full max-w-4xl mx-auto h-[650px] md:h-[800px] flex justify-center mt-8">

            {/* Main Phone Image */}
            <div className="relative z-20 transition-transform duration-300 ease-out flex justify-center items-start" style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}>
                 <img
                    src="/hero-screenshot.png"
                    alt="OmniAlbum iPhone Interface"
                    className="w-[300px] md:w-[340px] drop-shadow-2xl"
                 />
            </div>

            {/* Parallax Floating Cards */}
            <FloatingCard
              className="hidden md:flex top-12 left-0 lg:-left-8 bg-green-100 border-green-200/50"
              factor={-1.5}
              mousePos={mousePos}
              icon={<RefreshCWIcon size={20} />}
              iconClassName="text-green-600"
              title="Sync Photos"
              titleClassName="text-green-900"
              subtitle="Automatic Backup"
              subtitleClassName="text-green-700"
            />

            <FloatingCard
              className="hidden md:flex top-24 right-4 lg:right-0 bg-blue-100 border-blue-200/50"
              factor={-0.8}
              mousePos={mousePos}
              icon={<LockIcon size={20} />}
              iconClassName="text-blue-600"
              title="Private"
              titleClassName="text-blue-900"
              subtitle="FaceID Secured"
              subtitleClassName="text-blue-700"
            />

            <FloatingCard
              className="hidden md:flex top-[40%] left-8 lg:left-0 bg-orange-100 border-orange-200/50"
              factor={-2.2}
              mousePos={mousePos}
              icon={<MapPinIcon size={20} />}
              iconClassName="text-orange-600"
              title="Tokyo, Japan"
              titleClassName="text-orange-900"
              subtitle="Added to map"
              subtitleClassName="text-orange-700"
            />

            <FloatingCard
              className="hidden md:flex top-[45%] right-0 lg:-right-12 bg-indigo-100 border-indigo-200/50"
              factor={-1.2}
              mousePos={mousePos}
              icon={<GripIcon size={20} />}
              iconClassName="text-indigo-600"
              title="Home Widgets"
              titleClassName="text-indigo-900"
              subtitle="Daily Highlights"
              subtitleClassName="text-indigo-700"
            />

            <FloatingCard
              className="hidden md:flex bottom-32 left-12 lg:left-8 bg-pink-100 border-pink-200/50"
              factor={-0.9}
              mousePos={mousePos}
              icon={<SearchIcon size={20} />}
              iconClassName="text-pink-600"
              title="Search"
              titleClassName="text-pink-900"
              subtitle={'"Sunset at beach"'}
              subtitleClassName="text-pink-700"
            />

            <FloatingCard
              className="hidden md:flex bottom-40 right-12 lg:right-4 bg-purple-100 border-purple-200/50"
              factor={-1.8}
              mousePos={mousePos}
              icon={<CircleCheckIcon size={20} />}
              iconClassName="text-purple-600"
              title="Backed Up"
              titleClassName="text-purple-900"
              subtitle="1,204 Photos"
              subtitleClassName="text-purple-700"
            />

        </div>
      </div>
    </section>
  );
};
