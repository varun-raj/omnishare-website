'use client';

import React, { useRef } from 'react';
import { Aperture } from 'lucide-react';
import { SmartphoneNfcIcon } from '@/components/icons/smartphone-nfc';
import { WifiIcon } from '@/components/icons/wifi';
import { SearchIcon } from '@/components/icons/search';
import { UploadIcon } from '@/components/icons/upload';
import { RefreshCWIcon } from '@/components/icons/refresh-cw';
import { MapPinIcon } from '@/components/icons/map-pin';
import { SparklesIcon } from '@/components/icons/sparkles';

interface IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon?: React.ReactElement;
  className?: string;
  iconBg?: string;
  accentColor?: string;
  children?: React.ReactNode;
}> = ({ title, description, icon, className = "", iconBg = "bg-indigo-500", accentColor = "from-indigo-500/10", children }) => {
  const iconRef = useRef<IconHandle>(null);

  return (
    <div
      className={`group relative bg-white border border-zinc-200/80 rounded-3xl p-8 hover:shadow-2xl hover:shadow-zinc-900/[0.08] transition-all duration-500 flex flex-col hover:-translate-y-1 overflow-hidden ${className}`}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-radial ${accentColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-10 translate-x-10 pointer-events-none`} />
      <div className={`relative mb-5 w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center text-white shadow-lg shadow-zinc-900/10`}>
        {icon && React.cloneElement(icon, { ref: iconRef })}
      </div>
      <h3 className="text-xl font-bold text-zinc-900 mb-2">{title}</h3>
      <p className="text-zinc-500 text-lg leading-relaxed mb-6">{description}</p>
      {children}
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-sm font-medium text-zinc-600 mb-6 shadow-sm">
            <SparklesIcon size={14} />
            Powerful Features
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900">Designed for your memories.</h2>
          <p className="text-zinc-500 max-w-2xl text-lg">
            A native experience that feels right at home on your iPhone, packed with powerful features for power users and families alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Unified Album Management"
            description="View grid or list views with metadata badges. Auto-detect providers from share links and import in bulk."
            className="md:col-span-2"
            icon={<SmartphoneNfcIcon size={22} />}
            iconBg="bg-gradient-to-br from-indigo-500 to-indigo-600"
            accentColor="from-indigo-500/10"
          />

          <FeatureCard
            title="Offline First"
            description="Cached albums and thumbnails available offline. Your upload queue persists and resumes when you reconnect."
            className="md:row-span-2"
            icon={<WifiIcon size={22} />}
            iconBg="bg-gradient-to-br from-rose-500 to-rose-600"
            accentColor="from-rose-500/10"
          >
             <div className="mt-auto pt-8 flex justify-center">
                <div className="w-full aspect-square rounded-full bg-gradient-to-br from-rose-50 to-rose-100/50 flex items-center justify-center border border-rose-100 group-hover:scale-105 transition-transform duration-500">
                    <WifiIcon size={64} className="text-rose-300" />
                </div>
             </div>
          </FeatureCard>

          <FeatureCard
            title="Spotlight Search"
            description="Albums are indexed in system-wide Spotlight. Jump directly to your memories from the home screen."
            icon={<SearchIcon size={22} />}
            iconBg="bg-gradient-to-br from-amber-500 to-orange-500"
            accentColor="from-amber-500/10"
          />

          <FeatureCard
            title="Background Uploads"
            description="Central queue with status tracking. Uploads continue even when the app is backgrounded."
            icon={<UploadIcon size={22} />}
            iconBg="bg-gradient-to-br from-green-500 to-emerald-600"
            accentColor="from-green-500/10"
          />

          <FeatureCard
            title="Pro-Level Metadata"
            description="View full EXIF data including camera make, lens, exposure settings, ISO, and GPS location map."
            className="md:col-span-2"
            icon={<Aperture size={22} />}
            iconBg="bg-gradient-to-br from-cyan-500 to-cyan-600"
            accentColor="from-cyan-500/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100 group-hover:bg-cyan-50/50 group-hover:border-cyan-100 transition-colors duration-300">
                    <span className="block text-xs text-zinc-400 uppercase font-semibold">ISO</span>
                    <span className="font-mono text-zinc-900 font-medium">400</span>
                </div>
                <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100 group-hover:bg-cyan-50/50 group-hover:border-cyan-100 transition-colors duration-300">
                    <span className="block text-xs text-zinc-400 uppercase font-semibold">Aperture</span>
                    <span className="font-mono text-zinc-900 font-medium">f/1.8</span>
                </div>
                <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100 group-hover:bg-cyan-50/50 group-hover:border-cyan-100 transition-colors duration-300">
                    <span className="block text-xs text-zinc-400 uppercase font-semibold">Shutter</span>
                    <span className="font-mono text-zinc-900 font-medium">1/1000</span>
                </div>
                <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100 group-hover:bg-cyan-50/50 group-hover:border-cyan-100 transition-colors duration-300">
                    <span className="block text-xs text-zinc-400 uppercase font-semibold">Focal</span>
                    <span className="font-mono text-zinc-900 font-medium">24mm</span>
                </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="iCloud Sync"
            description="Your album list syncs across all devices via CloudKit. Setup once, view everywhere."
            icon={<RefreshCWIcon size={22} />}
            iconBg="bg-gradient-to-br from-blue-500 to-blue-600"
            accentColor="from-blue-500/10"
          />

          <FeatureCard
            title="Map View"
            description="See exactly where your memories were made with integrated GPS location data."
            icon={<MapPinIcon size={22} />}
            iconBg="bg-gradient-to-br from-emerald-500 to-teal-600"
            accentColor="from-emerald-500/10"
          />

          <FeatureCard
            title="Native Lightbox"
            description="Fluid gestures, double-tap zoom, and parallax animations for an immersive viewing experience."
            icon={<SmartphoneNfcIcon size={22} />}
            iconBg="bg-gradient-to-br from-violet-500 to-purple-600"
            accentColor="from-violet-500/10"
          />
        </div>
      </div>
    </section>
  );
};
