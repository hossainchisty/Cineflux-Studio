const RecentWork = () => {
  const works = [
    {
      id: 1,
      title: "Automotive Commercial",
      category: "Ad Creative",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaDbY64rvv8tVi8GeCM0MBNcxW8OS4SVd06RWf3KCuZJYnJ1hT2MvNvYL0zMlRQd5-o1TC2T7SOaH-DqfWGGopcmezmcjm6KkstExAwrGmRBgsdWdreJODHhzjA_SWDg0Od4z_01PKRyFDo5Orsd7yzGkOYWsSe5wDwbnUSJ4qF6RZF0zWApzGL-a8uyUCltgpbM8X3X-QmYlYPq-xkjV2pnUkPRFaVbuNWAmdk88K-SZO2v3ngrH9g3b8u3lISnlBZBMWda_jYo0",
      aspect: "aspect-[9/16] md:aspect-video"
    },
    {
      id: 2,
      title: "SaaS Explainer",
      category: "Brand Story",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpXh31QVTn7NV5UtrW8ot_yF0Izl13NBZncekyXzNklrVQB2joqYTH5YMVZOrUsTm90SuF6hkeSUMsF6Wgm1gPV0pzEkmeawhnGhmEsvrTou700Pco4LHEMz4FcPiSebLWcv19HNFhQUtEDS7GU58Qa3OdMAquVtZ88QaMFyB62KMcTcohqMNRBUverF0alPXN1HDq06-SbuC1YvTbYBxtxaC1Jbm3KMc_ovCv1d9cq0HZLBSyJnSqvgFYohbWNGeKzwhiBQgzokY",
      aspect: "aspect-video"
    },
    {
      id: 3,
      title: "Keynote Highlight",
      category: "Event Coverage",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYHXdTtwEK6nEDUSuetQObuNHY4hELRITa2gCLDOmiL2BiQhq6QgQt8kK1muXf8qMBH6b1HR1tDHV0JFTqN4YZfQSJ0gswg-bOuR95FqRnDpqYyP4C3E4N-sycZMFKQ_qbco7j8ZuuxkHiQVMxFnjRRdnNKpGUILggaTHk6264A3jmDfYYzwBVllqiQV9APwn_MQISftyNsZ8MD3fRUHZo7orUBmb23REANVt7SQJHwYloKL_CeZ1ZFrNzAHUqPvb9dUziuoFGlcE",
      aspect: "aspect-video"
    },
    {
      id: 4,
      title: "Fitness Vlog",
      category: "YouTube",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu5bDHn0JfVFpJp6XojKRnGJOYnIjp610PCxurr3TYjuRQ0l23YDnQem-yDB0G0J-F1SBKGtEoeBWDDzBYWRZjcmbBNLPa1ofzbez56sq9jRIORFd-YdWLy-qeNw1PpeQkPqKdzTeuljqTsy5YEEZhoObIRs8iKTYVAFUvZZrKOJfqjPt4P4XcoOC2krxLBp5jP6jGK0EQGew5PpZjbBodbaXnL7SoFBZUmbK2z2dLdiB-NANKShDHb3yR2Kutl-QCLlr4fEDnLEU",
      aspect: "aspect-video"
    },
    {
      id: 5,
      title: "Travel Documentary",
      category: "Long Form",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS15-il9M4xRftC-n3gA86f1haxVKc8cNtaA_dnTMyLURxdR7wGWfRtbPiCRZS87st0bfvllfFCs_V4Nty-fFciFmMMiteZaL8J5uF8hFdfMCydATbyRTwMd_TlwfpkiAc9jOvjq7jj0dWdSxvJZLzPxAEt8sVPXRTvu6x8UBR9AzrtFSewrl10jigka31nxhSm1MAiuDPYl1Wqa4kir8VL3T2e_JulzHrh0HE7zDZdUfD0LW40fFdvEh-yr2Z5tvJ5nyuX_h8nrE",
      aspect: "aspect-video"
    },
    {
      id: 6,
      title: "Neon Pulse",
      category: "Music Video",
      image: "/images/music-video-2.png",
      aspect: "aspect-video"
    },
    {
      id: 7,
      title: "Cyber Flow",
      category: "Product Promo",
      image: "/images/product-tech.png",
      aspect: "aspect-video"
    },
    {
      id: 8,
      title: "The Deep Dive",
      category: "Podcast",
      image: "/images/podcast-studio.png",
      aspect: "aspect-video"
    },
    {
      id: 9,
      title: "Innovate 2024",
      category: "Event Recap",
      image: "/images/conference-recap.png",
      aspect: "aspect-video"
    }
  ];

  return (
    <section className="py-24 bg-background-dark relative overflow-hidden" id="work">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="px-4 md:px-10 lg:px-40 flex justify-center relative z-10">
        <div className="flex flex-col max-w-[960px] flex-1">
          <div className="mb-12 reveal-animation">
            <span className="text-primary font-black tracking-[0.2em] text-xs uppercase mb-3 block glow-text">SELECTED PROJECTS</span>
            <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter">PORTFOLIO</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {works.map((work, index) => (
              <div
                key={work.id}
                className={`group relative overflow-hidden rounded-2xl ${work.aspect} cursor-pointer reveal-animation border border-white/5 hover:border-primary/30 transition-all duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url('${work.image}')` }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                  <div className="size-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                    <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-white text-lg font-black tracking-tight mb-1">{work.title}</p>
                  <div className="flex items-center gap-2">
                    <span className="h-px w-4 bg-primary transition-all group-hover:w-8"></span>
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{work.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center reveal-animation [animation-delay:800ms]">
            <button className="flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-10 text-sm font-black text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
              VIEW ALL CASE STUDIES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;