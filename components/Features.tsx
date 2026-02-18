import React from 'react';
import { Cloud, WifiOff, Smartphone, Search, Upload, RefreshCw, Aperture, MapPin } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  iconColor?: string;
  children?: React.ReactNode;
}> = ({ title, description, icon, className = "", iconColor = "text-brand-500", children }) => (
  <div className={`bg-white border border-zinc-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 flex flex-col shadow-sm ${className}`}>
    <div className={`mb-4 ${iconColor} p-3 rounded-2xl bg-zinc-50 w-fit`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-zinc-900 mb-2">{title}</h3>
    <p className="text-zinc-500 text-sm leading-relaxed mb-6">{description}</p>
    {children}
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900">Designed for your memories.</h2>
          <p className="text-zinc-500 max-w-2xl text-lg">
            A native experience that feels right at home on your iPhone, packed with powerful features for power users and families alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card - Album Management */}
          <FeatureCard 
            title="Unified Album Management" 
            description="View grid or list views with metadata badges. Auto-detect providers from share links and import in bulk."
            className="md:col-span-2 min-h-[400px]"
            icon={<Smartphone size={24} />}
            iconColor="text-indigo-500"
          >
             <div className="flex-1 w-full rounded-xl overflow-hidden mt-auto border border-zinc-100 relative shadow-inner">
                <ImagePlaceholder 
                    height="h-full" 
                    text="Unified Library Interface" 
                    src="https://picsum.photos/800/400?grayscale"
                    className="rounded-none border-0"
                />
             </div>
          </FeatureCard>

          {/* Tall Card - Offline */}
          <FeatureCard 
            title="Offline First" 
            description="Cached albums and thumbnails available offline. Your upload queue persists and resumes when you reconnect."
            className="md:row-span-2"
            icon={<WifiOff size={24} />}
            iconColor="text-rose-500"
          >
             <div className="mt-auto pt-8 flex justify-center">
                <div className="w-full aspect-square rounded-full bg-rose-50 flex items-center justify-center border border-rose-100">
                    <WifiOff size={64} className="text-rose-400" />
                </div>
             </div>
          </FeatureCard>

          {/* Regular Card - Search */}
          <FeatureCard 
            title="Spotlight Search" 
            description="Albums are indexed in system-wide Spotlight. Jump directly to your memories from the home screen."
            icon={<Search size={24} />}
            iconColor="text-amber-500"
          />

          {/* Regular Card - Upload */}
          <FeatureCard 
            title="Background Uploads" 
            description="Central queue with status tracking. Uploads continue even when the app is backgrounded."
            icon={<Upload size={24} />}
            iconColor="text-green-500"
          />

           {/* Large Card - EXIF */}
           <FeatureCard 
            title="Pro-Level Metadata" 
            description="View full EXIF data including camera make, lens, exposure settings, ISO, and GPS location map."
            className="md:col-span-2"
            icon={<Aperture size={24} />}
            iconColor="text-cyan-500"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100">
                    <span className="block text-xs text-zinc-400 uppercase font-semibold">ISO</span>
                    <span className="font-mono text-zinc-900 font-medium">400</span>
                </div>
                <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100">
                    <span className="block text-xs text-zinc-400 uppercase font-semibold">Aperture</span>
                    <span className="font-mono text-zinc-900 font-medium">f/1.8</span>
                </div>
                <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100">
                    <span className="block text-xs text-zinc-400 uppercase font-semibold">Shutter</span>
                    <span className="font-mono text-zinc-900 font-medium">1/1000</span>
                </div>
                <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100">
                    <span className="block text-xs text-zinc-400 uppercase font-semibold">Focal</span>
                    <span className="font-mono text-zinc-900 font-medium">24mm</span>
                </div>
            </div>
          </FeatureCard>

          {/* Regular Card - Sync */}
          <FeatureCard 
            title="iCloud Sync" 
            description="Your album list syncs across all devices via CloudKit. Setup once, view everywhere."
            icon={<RefreshCw size={24} />}
            iconColor="text-blue-500"
          />

          {/* Regular Card - Location */}
          <FeatureCard 
            title="Map View" 
            description="See exactly where your memories were made with integrated GPS location data."
            icon={<MapPin size={24} />}
            iconColor="text-emerald-500"
          />
           {/* Regular Card - Lightbox */}
           <FeatureCard 
            title="Native Lightbox" 
            description="Fluid gestures, double-tap zoom, and parallax animations for an immersive viewing experience."
            icon={<Smartphone size={24} />}
            iconColor="text-violet-500"
          />
        </div>
      </div>
    </section>
  );
};