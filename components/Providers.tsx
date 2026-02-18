import React from 'react';
import { Check, X, Video } from 'lucide-react';
import { EyeIcon } from '@/components/icons/eye';
import { UploadIcon } from '@/components/icons/upload';
import { LockIcon } from '@/components/icons/lock';
import { ShieldCheckIcon } from '@/components/icons/shield-check';
import { Provider } from '../types';

const providers: Provider[] = [
  { name: 'Immich', view: true, upload: true, password: true, exif: 'Full', video: true, color: 'bg-indigo-500' },
  { name: 'Nextcloud', view: true, upload: true, password: false, exif: 'Partial', video: true, color: 'bg-blue-500' },
  { name: 'PhotoPrism', view: true, upload: false, password: false, exif: 'Full', video: true, color: 'bg-pink-600' },
  { name: 'Ente', view: true, upload: false, password: false, exif: 'Full', video: true, color: 'bg-purple-500' },
  { name: 'Lychee', view: true, upload: false, password: true, exif: 'Full', video: true, color: 'bg-red-500' },
];

export const Providers: React.FC = () => {
  return (
    <section id="providers" className="py-24 bg-white relative overflow-hidden">
       {/* Ambient Light */}
       <div className="absolute bottom-0 right-0 w-1/3 h-[400px] bg-indigo-50 blur-[100px] rounded-full pointer-events-none" />
       <div className="absolute top-20 left-0 w-1/3 h-[300px] bg-blue-50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900">One app. Every provider.</h2>
          <p className="text-zinc-500 text-lg">Seamless integration with your favorite self-hosted platforms.</p>
        </div>

        {/* Mobile Card View (visible on small screens) */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
            {providers.map((p) => (
                <div key={p.name} className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className={`w-10 h-10 rounded-full ${p.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                            {p.name[0]}
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900">{p.name}</h3>
                    </div>
                    <div className="space-y-2 text-sm text-zinc-600">
                        <div className="flex justify-between border-b border-zinc-100 pb-2">
                            <span>View</span>
                            <span>{p.view ? <Check size={16} className="text-green-500" /> : <X size={16} className="text-zinc-300" />}</span>
                        </div>
                        <div className="flex justify-between border-b border-zinc-100 pb-2">
                            <span>Upload</span>
                            <span>{p.upload ? <Check size={16} className="text-green-500" /> : <X size={16} className="text-zinc-300" />}</span>
                        </div>
                        <div className="flex justify-between border-b border-zinc-100 pb-2">
                            <span>Password Protected</span>
                            <span>{p.password ? <Check size={16} className="text-green-500" /> : <X size={16} className="text-zinc-300" />}</span>
                        </div>
                        <div className="flex justify-between pt-2">
                            <span>Video Support</span>
                            <span>{p.video ? <Check size={16} className="text-green-500" /> : <X size={16} className="text-zinc-300" />}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-zinc-200 bg-white/50 backdrop-blur shadow-xl shadow-zinc-200/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/80">
                <th className="p-6 text-zinc-500 font-medium">Provider</th>
                <th className="p-6 text-zinc-500 font-medium text-center"><div className="flex flex-col items-center gap-1"><EyeIcon size={18} /><span className="text-xs">View</span></div></th>
                <th className="p-6 text-zinc-500 font-medium text-center"><div className="flex flex-col items-center gap-1"><UploadIcon size={18} /><span className="text-xs">Upload</span></div></th>
                <th className="p-6 text-zinc-500 font-medium text-center"><div className="flex flex-col items-center gap-1"><LockIcon size={18} /><span className="text-xs">Password</span></div></th>
                <th className="p-6 text-zinc-500 font-medium text-center"><div className="flex flex-col items-center gap-1"><ShieldCheckIcon size={18} /><span className="text-xs">EXIF</span></div></th>
                <th className="p-6 text-zinc-500 font-medium text-center"><div className="flex flex-col items-center gap-1"><Video size={18} className="mx-auto" /><span className="text-xs">Video</span></div></th>
              </tr>
            </thead>
            <tbody>
              {providers.map((p, i) => (
                <tr key={p.name} className="border-b border-zinc-100 hover:bg-zinc-50/80 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${p.color} flex items-center justify-center text-white font-bold text-xs shadow-md ring-2 ring-white`}>
                        {p.name[0]}
                      </div>
                      <span className="font-semibold text-zinc-900">{p.name}</span>
                    </div>
                  </td>
                  <td className="p-6 text-center">{p.view ? <Check className="mx-auto text-green-500" size={20} /> : <X className="mx-auto text-zinc-300" size={20} />}</td>
                  <td className="p-6 text-center">{p.upload ? <Check className="mx-auto text-green-500" size={20} /> : <X className="mx-auto text-zinc-300" size={20} />}</td>
                  <td className="p-6 text-center">{p.password ? <Check className="mx-auto text-green-500" size={20} /> : <X className="mx-auto text-zinc-300" size={20} />}</td>
                  <td className="p-6 text-center text-sm font-mono text-zinc-500">{p.exif}</td>
                  <td className="p-6 text-center">{p.video ? <Check className="mx-auto text-green-500" size={20} /> : <X className="mx-auto text-zinc-300" size={20} />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
