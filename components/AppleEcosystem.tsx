import React from 'react';

export const AppleEcosystem: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-zinc-900 tracking-tight">Works Across All Your Apple Devices</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* iPhone Card */}
            <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-10 pb-0 md:pb-0 overflow-hidden flex flex-col h-[480px] md:h-[520px] relative group">
                <div className="z-10 relative">
                    <span className="text-zinc-500 font-medium mb-2 block text-sm">iPhone</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">Every server, one tap away.</h3>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-28 transition-transform duration-500 group-hover:translate-y-20">
                    <div className="relative w-[220px] h-[450px] bg-zinc-900 rounded-[2.8rem] p-2.5 shadow-2xl ring-1 ring-zinc-900/10 border-[5px] border-zinc-800">
                        <div className="absolute top-20 -left-[7px] h-6 w-[5px] bg-zinc-700 rounded-l"></div>
                        <div className="absolute top-30 -left-[7px] h-10 w-[5px] bg-zinc-700 rounded-l"></div>
                        <div className="absolute top-24 -right-[7px] h-12 w-[5px] bg-zinc-700 rounded-r"></div>
                        <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative border border-zinc-200">
                             <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[70px] h-[22px] bg-black rounded-full z-20"></div>
                             <img src="/hero-screenshot.png" className="w-full h-full object-cover object-top" alt="OmniAlbum - Browse albums from Immich, Nextcloud, PhotoPrism, Lychee and Ente" />
                        </div>
                    </div>
                </div>
            </div>

            {/* iPad Card */}
            <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-10 overflow-hidden flex flex-col h-[480px] md:h-[520px] relative group">
                <div className="z-10 relative mb-6">
                    <span className="text-zinc-500 font-medium mb-2 block text-sm">iPad</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">More screen. More insight.</h3>
                </div>
                <div className="absolute right-[-10%] bottom-[-10%] w-[105%] transition-transform duration-500 group-hover:-translate-x-3 group-hover:-translate-y-3">
                     <div className="relative aspect-[4/3] bg-zinc-800 rounded-[1.5rem] p-2.5 shadow-2xl ring-1 ring-black/10">
                         <div className="w-full h-full bg-black rounded-[1rem] overflow-hidden relative border border-zinc-700">
                             <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="iPad App" />
                             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full"></div>
                         </div>
                     </div>
                </div>
            </div>

            {/* Widgets Card */}
            <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-10 overflow-hidden flex flex-col h-[480px] md:h-[520px] relative justify-between group">
                 <div className="z-10 relative">
                    <span className="text-zinc-500 font-medium mb-2 block text-sm">Widgets</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">Always on your home screen.</h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2/3 flex items-center justify-center">
                    <div className="w-[240px] h-[240px] bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-5 rotate-6 group-hover:rotate-0 transition-transform duration-500 border border-zinc-100 relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex flex-col">
                                <span className="text-[9px] font-bold text-rose-500 uppercase tracking-wider mb-1">On This Day</span>
                                <span className="text-2xl font-bold text-zinc-900 leading-none">14</span>
                                <span className="text-[10px] text-zinc-400 font-medium mt-1">FEBRUARY</span>
                            </div>
                             <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                             </div>
                        </div>
                        <div className="h-32 w-full bg-zinc-100 rounded-xl overflow-hidden relative shadow-inner">
                            <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover" />
                             <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded-md text-[9px] text-zinc-800 font-bold shadow-sm">
                                2021
                             </div>
                        </div>
                    </div>
                    <div className="absolute w-[220px] h-[220px] bg-indigo-50 rounded-[2rem] -rotate-6 translate-y-4 scale-95 blur-[1px] -z-0 border border-indigo-100"></div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
