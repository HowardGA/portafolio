
import { useLanguage } from "../context/LanguageContext";
export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    const { lang, toggleLanguage, currentContent} = useLanguage();
    const navbarContent = currentContent.nav;

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center 
                        transition-all duration-300 ease-in-out
                        
                        ${menuOpen 
                            ? "h-screen opacity-100 pointer-events-auto" 
                            : "h-0 opacity-0 pointer-events-none"
                        }
                        `}>

            <button 
                onClick={() => setMenuOpen(false)} 
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
                >
                &times; 
            </button>
                <a 
                    href="#home" 
                     className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${menuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-5"}
                        `}  
                    onClick={() => setMenuOpen(false)}>
                    {navbarContent.home}
                </a>
                <a 
                    href="#about" 
                    className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${menuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-5"}
                        `}
                    onClick={() => setMenuOpen(false)}>

                    {navbarContent.about}
                </a>
                <a 
                    href="#projects" 
                     className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${menuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-5"}
                        `}
                    onClick={() => setMenuOpen(false)}>

                    {navbarContent.projects}
                </a>
                <a 
                    href="#clients" 
                     className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${menuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-5"}
                        `}
                    onClick={() => setMenuOpen(false)}>
                    {navbarContent.clients}
                </a>
                <a 
                    href="#contact" 
                     className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${menuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-5"}
                        `}
                    onClick={() => setMenuOpen(false)}>
                    {navbarContent.contact}
                </a>
                 <button
                            onClick={toggleLanguage} 
                            className="px-3 py-1 text-sm font-bold rounded-full border"
                            // style={{border, boxShadow}}
                        >
                            {lang === 'en' ? 'ES' : 'EN'}
                        </button>
        </div>
    );
}