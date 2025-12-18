const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full glass-card border-none bg-background-dark/80 backdrop-blur-xl">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center py-0">
                <div className="flex flex-col max-w-[960px] flex-1">
                    <header className="flex items-center justify-between whitespace-nowrap py-3">
                        <div className="flex items-center gap-3 text-white group cursor-pointer">
                            <div className="flex items-center justify-center size-9 rounded-xl bg-gradient-to-br from-primary to-accent-purple text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                                <span className="material-symbols-outlined text-[22px]">movie_edit</span>
                            </div>
                            <h2 className="text-white text-xl font-black leading-tight tracking-tighter glow-text">CineFlux</h2>
                        </div>

                        <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
                            <nav className="flex items-center gap-8">
                                <a className="text-gray-400 hover:text-white text-sm font-semibold transition-all relative group" href="#work">
                                    Showcase
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                                </a>
                                <a className="text-gray-400 hover:text-white text-sm font-semibold transition-all relative group" href="#services">
                                    Expertise
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                                </a>
                                <a className="text-gray-400 hover:text-white text-sm font-semibold transition-all relative group" href="#process">
                                    Workflow
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                                </a>
                            </nav>
                            <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary/90 hover:scale-105 transition-all text-white text-sm font-black shadow-xl shadow-primary/30">
                                <span className="truncate">START PROJECT</span>
                            </button>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button className="text-white">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                        </div>
                    </header>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;