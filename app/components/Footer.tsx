const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black py-10">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-[960px] flex-1">
                    <div className="flex items-center gap-2 text-white">
                        <span className="material-symbols-outlined text-[20px] text-gray-500">movie_edit</span>
                        <h2 className="text-white text-base font-bold">CineFlux Studio</h2>
                    </div>

                    <div className="flex gap-6">
                        <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">Twitter</a>
                        <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">Instagram</a>
                        <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">YouTube</a>
                        <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">LinkedIn</a>
                    </div>

                    <p className="text-gray-600 text-xs">© 2026 CineFlux Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;