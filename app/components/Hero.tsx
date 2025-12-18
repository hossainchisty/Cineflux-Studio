const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center pt-20 pb-20 md:py-32 overflow-hidden bg-mesh">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[800px] bg-hero-glow pointer-events-none opacity-40"></div>

            <div className="px-4 md:px-10 lg:px-40 flex justify-center w-full relative z-10">
                <div className="flex flex-col max-w-[960px] flex-1 items-center text-center gap-10 reveal-animation">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md shadow-2xl">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_vars(--color-primary)]"></span>
                        <span className="text-xs font-black tracking-widest uppercase text-white/90">Limited Q4 Capacity: 2 Slots Left</span>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter max-w-[900px]">
                            REVOLUTIONIZING <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent-pink glow-text">DIGITAL STORYTELLING</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-[650px] mx-auto opacity-80">
                            We don&apos;t just edit videos. We engineer retention, maximize engagement, and turn raw footage into high-performance digital assets.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-5 justify-center mt-2">
                        <button className="group relative flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-black text-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10">
                            START YOUR PROJECT
                            <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <button className="flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-base font-black text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20">
                            VIEW SHOWREEL
                        </button>
                    </div>

                    <div className="w-full mt-16 relative group cursor-pointer reveal-animation [animation-delay:200ms]">
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-accent-purple to-accent-pink rounded-2xl opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-700"></div>
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden glass-card">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBB9x7H7nL3cBsx1zPvoRQ0DD7MUAJ6ja20R-zguLNVZcBDkNdK3Lmb7W3Gnbx2qKUBgZnT81IXNtfOI4iy1o92dM1cmf6OnriOBXHdQjB4B9JvD6gNUB-bWRWyi-6u_zn69vFv7iWL0LfBa1nNqWfDp0EKAwXRBp75i1eot8D_1wh8HSfam8BEfvPWa6ydbsZKPCp1Voq5iKnXnPx-ZKepU386tLyG8m_5hCyQE5T_5i9ypwznBbdjmazkEwl8qIcKBQxmFyMGM5g')" }}></div>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="size-24 rounded-full bg-white/10 backdrop-blur-2xl border border-white/30 flex items-center justify-center transition-all group-hover:scale-110 shadow-3xl">
                                    <span className="material-symbols-outlined text-5xl text-white fill-1">play_arrow</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 flex flex-col items-center gap-8 w-full opacity-40 reveal-animation [animation-delay:400ms]">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Industry partners & clients</p>
                        <div className="flex flex-wrap justify-center gap-10 md:gap-20 grayscale hover:grayscale-0 transition-all duration-700">
                            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter"><span className="material-symbols-outlined">diamond</span> LUXE</div>
                            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter"><span className="material-symbols-outlined">bolt</span> VOLT</div>
                            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter"><span className="material-symbols-outlined">rocket_launch</span> ASCEND</div>
                            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter"><span className="material-symbols-outlined">all_inclusive</span> INFINITY</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;