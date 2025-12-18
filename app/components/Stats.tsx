const Stats = () => {
    return (
        <section className="bg-background-dark relative py-0">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center">
                <div className="flex flex-col max-w-[960px] flex-1 -mt-12 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-3 rounded-2xl p-8 glass-card group hover:bg-white/[0.05] transition-all duration-500 reveal-animation [animation-delay:100ms]">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-7xl text-primary">visibility</span>
                            </div>
                            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">TOTAL REACH</p>
                            <p className="text-white text-5xl font-black leading-tight tracking-tighter glow-text">1.2B+</p>
                            <div className="h-1 w-8 bg-primary rounded-full group-hover:w-16 transition-all duration-500"></div>
                        </div>

                        <div className="flex flex-col gap-3 rounded-2xl p-8 glass-card group hover:bg-white/[0.05] transition-all duration-500 reveal-animation [animation-delay:200ms]">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-7xl text-accent-purple">trending_up</span>
                            </div>
                            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">SUCCESS STORIES</p>
                            <p className="text-white text-5xl font-black leading-tight tracking-tighter">150+</p>
                            <div className="h-1 w-8 bg-accent-purple rounded-full group-hover:w-16 transition-all duration-500"></div>
                        </div>

                        <div className="flex flex-col gap-3 rounded-2xl p-8 glass-card group hover:bg-white/[0.05] transition-all duration-500 reveal-animation [animation-delay:300ms]">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-7xl text-accent-pink">payments</span>
                            </div>
                            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">ROI GENERATED</p>
                            <p className="text-white text-5xl font-black leading-tight tracking-tighter">$25M+</p>
                            <div className="h-1 w-8 bg-accent-pink rounded-full group-hover:w-16 transition-all duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;