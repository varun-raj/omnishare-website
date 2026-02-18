import React from 'react';

export const AppleEcosystem: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-zinc-900 tracking-tight">Works Across All Your Apple Devices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* iPhone Card */}
            <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-12 pb-0 md:pb-0 overflow-hidden flex flex-col h-[500px] md:h-[600px] relative group">
                <div className="z-10 relative">
                    <span className="text-zinc-500 font-medium mb-3 block">iPhone</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Your full portfolio in your pocket.</h3>
                </div>
                {/* Increased translate-y to prevent text overlap */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-24 transition-transform duration-500 group-hover:translate-y-16">
                    {/* iPhone 15 Pro Body - Aspect Ratio approx 9:19.5 */}
                    <div className="relative w-[280px] h-[570px] bg-zinc-900 rounded-[3.5rem] p-3 shadow-2xl ring-1 ring-zinc-900/10 border-[6px] border-zinc-800">
                        {/* Buttons */}
                        <div className="absolute top-24 -left-[8px] h-8 w-[6px] bg-zinc-700 rounded-l"></div>
                        <div className="absolute top-36 -left-[8px] h-12 w-[6px] bg-zinc-700 rounded-l"></div>
                        <div className="absolute top-28 -right-[8px] h-16 w-[6px] bg-zinc-700 rounded-r"></div>

                        {/* Screen */}
                        <div className="w-full h-full bg-black rounded-[2.8rem] overflow-hidden relative border border-zinc-800">
                             {/* Dynamic Island */}
                             <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20 flex items-center justify-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-zinc-900/50"></div>
                             </div>
                             {/* Content */}
                             <img src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="iPhone App" />
                             
                             {/* Status Bar Time */}
                             <div className="absolute top-4 left-9 text-[10px] font-bold text-white">9:41</div>
                             {/* Status Bar Icons */}
                             <div className="absolute top-4 right-9 flex gap-1">
                                <div className="w-4 h-2.5 border border-white/30 rounded-[2px] relative">
                                    <div className="absolute inset-0.5 bg-white rounded-[1px]"></div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* iPad Card */}
            <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-12 overflow-hidden flex flex-col h-[500px] md:h-[600px] relative group">
                <div className="z-10 relative mb-8">
                    <span className="text-zinc-500 font-medium mb-3 block">iPad</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">More screen. More insight.</h3>
                </div>
                {/* iPad Pro Body - Landscape Aspect Ratio ~4:3 */}
                <div className="absolute right-[-15%] bottom-[-15%] w-[110%] transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4">
                     <div className="relative aspect-[4/3] bg-zinc-800 rounded-[2rem] p-3 shadow-2xl ring-1 ring-black/10">
                         {/* Screen */}
                         <div className="w-full h-full bg-black rounded-[1.5rem] overflow-hidden relative border border-zinc-700">
                             <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="iPad App" />
                             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
                         </div>
                     </div>
                </div>
            </div>

            {/* Watch Card */}
            <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-12 overflow-hidden flex flex-col h-[500px] md:h-[600px] relative group justify-between">
                 <div className="z-10 relative">
                    <span className="text-zinc-500 font-medium mb-3 block">Apple Watch</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Memories on your wrist.</h3>
                </div>
                <div className="relative w-full flex items-center justify-center mt-auto">
                    <img 
                        src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=400&auto=format&fit=crop" 
                        className="w-[200px] h-[200px] object-cover rounded-full shadow-2xl border-4 border-zinc-200" 
                        alt="Apple Watch Placeholder" 
                    />
                </div>
            </div>

            {/* Widgets Card */}
            <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-12 overflow-hidden flex flex-col h-[500px] md:h-[600px] relative justify-between group">
                 <div className="z-10 relative">
                    <span className="text-zinc-500 font-medium mb-3 block">Widgets</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Always on your home screen.</h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2/3 flex items-center justify-center">
                    {/* Large Widget - Square */}
                    <div className="w-[280px] h-[280px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-6 rotate-6 group-hover:rotate-0 transition-transform duration-500 border border-zinc-100 relative z-10">
                        <div className="flex justify-between items-start mb-5">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider mb-1">On This Day</span>
                                <span className="text-3xl font-bold text-zinc-900 leading-none">14</span>
                                <span className="text-xs text-zinc-400 font-medium mt-1">FEBRUARY</span>
                            </div>
                             <div className="w-9 h-9 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                             </div>
                        </div>
                        <div className="h-40 w-full bg-zinc-100 rounded-2xl overflow-hidden relative shadow-inner">
                            <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover" />
                             <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] text-zinc-800 font-bold shadow-sm">
                                2021
                             </div>
                        </div>
                    </div>
                    {/* Decorative blurred widget behind */}
                    <div className="absolute w-[260px] h-[260px] bg-indigo-50 rounded-[2.5rem] -rotate-6 translate-y-4 scale-95 blur-[1px] -z-0 border border-indigo-100"></div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};