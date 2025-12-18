const Services = () => {
  const services = [
    {
      id: 1,
      title: "Short Form Content",
      description: "TikToks, Reels, and Shorts designed to hook viewers in the first second and drive viral growth.",
      icon: "smartphone",
      color: "primary",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3UfGHR5zLCxT-QNz0WToygihmgBqpEQucmEWvPesoRQnuotCnefXPqqVXSVn6zGjhspbCLWBgFeJwcwVj7BCnIVYeCb_UuPXrWJGPfzldid26aIo2c_HI_rkuXruOgx_9lSlBEw-6P9Au_aLIwjgrdiKXOE1o3rrjkTgCfJ_-eZZRNHaah2Wqgp_JwUkvELBfHLiZ1vh8T6ebL4h6vgB9qGQ69hhCR10S6GOXbTIFdPGbLT7MEXnQHG6ogz34GQUPtDdd0WqJaYI"
    },
    {
      id: 2,
      title: "YouTube Long Form",
      description: "Pacing, storytelling, and sound design that keeps retention high and triggers the algorithm.",
      icon: "smart_display",
      color: "accent-purple",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNViWxh8qxsB6ZYjQPtUqGQ1HdavRHeuxz-tUCkGKGodq-hMvYi82bBmBiPlILDl6E4hPiIakcmGEYCgNKna7DCQ8VpURNGvBaf3atyozfaObMwnunLbvOH7KagsmJdsr6vBQMayg2sSM0SRt6fiFdLUhwNcKHLlZ8z2d1qhg3v5qRVOP6cXk6jPlF3ND25dm-Lcx4TFUZNBqBldPcxsJUIc7W-anaVd7GFyOCWH4NP7PvpZd69SP9pI4-PbdXyB-eA2mLUQAGW1Y"
    },
    {
      id: 3,
      title: "Direct Response Ads",
      description: "High-converting video ads for Meta and YouTube. We focus on hooks, pain points, and CTAs.",
      icon: "ads_click",
      color: "blue",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdVzc6KV4dFQ_GCSAqohiPVGfMS59aXIfVbQgp7Q1vFEvbE0SQsu7SObJhNeGfKd5VOfVLso7yVgY19m7NgLpy6AUqwMlxC2KleLwdBgHFyamvT5anVj1htVqGnUMTO3a9hbkm1RM1aEbCfzGQYslWa9twtRW9TubOK-ZZ1CuIF_sjj43TUAc9ONt5ZzNKMASEHz4em22OfJSNW8wr-A-MhQTDUz-Qf6nrtMybaKnxYj48dc0eWS-kVq0g8BRvMH63P0ptv6DIJgY"
    }
  ];

  return (
    <section className="py-24 bg-background-dark/50 relative" id="services">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-purple/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="px-4 md:px-10 lg:px-40 flex justify-center mt-3">
        <div className="flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-animation">
            <div>
              <span className="text-accent-purple font-black tracking-[0.2em] text-xs uppercase mb-3 block">CORE EXPERTISE</span>
              <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter mb-4">OUR EDITING SUITE</h2>
              <p className="text-gray-400 max-w-xl text-lg font-medium opacity-70">We combine cinematic artistry with psychological triggers to create content that doesn&apos;t just get views—it builds communities.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group flex flex-col rounded-3xl glass-card transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-primary/10 reveal-animation"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="relative h-56 rounded-t-3xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 size-12 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white border border-white/20 shadow-xl">
                    <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-8 pt-6">
                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium mb-6 opacity-80">{service.description}</p>
                  <button className="flex items-center gap-2 text-primary font-black text-[10px] tracking-[0.2em] uppercase group-hover:gap-4 transition-all">
                    LEARN MORE
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;