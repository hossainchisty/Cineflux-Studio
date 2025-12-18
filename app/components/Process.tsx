const Process = () => {
    const steps = [
        {
            id: 1,
            title: "1. Upload Footage",
            description: "Drop your raw files into our secure portal. We support all major formats.",
            icon: "upload_file",
            color: "white"
        },
        {
            id: 2,
            title: "2. The Apex Edit",
            description: "Our editors apply the 'Apex Style' — sound design, motion graphics, and pacing.",
            icon: "auto_fix_high",
            color: "primary"
        },
        {
            id: 3,
            title: "3. Publish & Scale",
            description: "Receive your polished video within 48h. Ready to upload and generate views.",
            icon: "rocket_launch",
            color: "white"
        }
    ];

    return (
        <section className="py-32 bg-background-dark relative overflow-hidden" id="process">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(19,91,236,0.03)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="px-4 md:px-10 lg:px-40 flex justify-center relative z-10">
                <div className="flex flex-col max-w-[960px] flex-1">
                    <div className="text-center mb-20 reveal-animation">
                        <span className="text-primary font-black tracking-[0.2em] text-xs uppercase mb-3 block glow-text">HOW WE SCALE YOU</span>
                        <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter">THE CINEFLUX METHOD</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative animate-reveal">
                        <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className="flex-1 flex flex-col items-center text-center relative z-10 group reveal-animation"
                                style={{ animationDelay: `${(index + 6) * 100}ms` }}
                            >
                                <div className={`size-20 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500 shadow-2xl`}>
                                    <span className={`material-symbols-outlined text-4xl ${step.color === 'primary' ? 'text-primary' : 'text-white'} group-hover:scale-110 transition-transform`}>{step.icon}</span>
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase [font-size:1.2rem]">{step.title.replace('1. ', '').replace('2. ', '').replace('3. ', '')}</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[240px] opacity-80">{step.description.replace('Apex Style', 'CineFlux Signature')}</p>
                                <div className="mt-6 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;