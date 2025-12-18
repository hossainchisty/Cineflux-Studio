const CTA = () => {
    return (
        <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#111722] to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>

            <div className="px-4 md:px-10 lg:px-40 flex justify-center relative z-10">
                <div className="flex flex-col max-w-[960px] flex-1 items-center text-center">
                    <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-6">
                        Ready to level up your content?
                    </h2>

                    <p className="text-gray-400 text-lg mb-10 max-w-xl">
                        Stop wasting time editing. Start scaling your brand. Book a free strategy call to see if we're a good fit.
                    </p>

                    <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary hover:bg-primary/90 hover:scale-105 transition-all text-white text-lg font-bold shadow-[0_0_40px_rgba(19,91,236,0.4)]">
                        Book Your Call
                    </button>

                    <p className="mt-4 text-xs text-gray-600">No commitment required. 100% satisfaction guarantee.</p>
                </div>
            </div>
        </section>
    );
};

export default CTA;