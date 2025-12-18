const Testimonial = () => {
    return (
        <section className="py-16 border-t border-white/5 bg-[#0e121b]">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center">
                <div className="flex flex-col max-w-[800px] flex-1 text-center">
                    <div className="flex justify-center mb-6 text-primary">
                        <span className="material-symbols-outlined text-3xl">format_quote</span>
                    </div>

                    <h3 className="text-white text-xl md:text-2xl font-medium leading-relaxed italic mb-8">
                        "Apex Edits completely transformed our channel. Our retention increased by 40% in the first month, and the visual quality is now on par with Netflix documentaries. They just get it."
                    </h3>

                    <div className="flex items-center justify-center gap-4">
                        <div className="size-12 rounded-full bg-gray-700 overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfLfRcZcPx2L35cGk5as6rLVK9arA2ReH1M7I0n7iaFOtAgIzIZA_zQG7qv9LRFF33_32qkSd8yoWi5IAVOrQhTlYk3w3F1tQsxJdTkVkEwcB2I0Q9f89wAoVo-KFQ0mJeqtLrYUdnFNVoJqx5X-5Kd0N2SXmKyLEBl6tRRTovOPQihOf7tDPEDK4mfFimozxn1QYwshYyJVztzay6aDPePa9VgPWOFC2OW3kfxF4XDoEzH50Tmlu8cneJF7O504tytUh4qHCSyZU')" }}
                            ></div>
                        </div>
                        <div className="text-left">
                            <p className="text-white font-bold text-sm">Sarah Jenkins</p>
                            <p className="text-gray-500 text-xs">Content Director @ TechDaily</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;