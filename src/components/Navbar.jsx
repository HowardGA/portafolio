import { useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const { lang, toggleLanguage, currentContent } = useLanguage();
    const navbarContent = currentContent.nav;

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="w-full border-b-2 border-black relative">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-1 border-b border-black/10 text-[9px] font-mono uppercase font-bold">
                    <span className="hidden sm:inline">Rosarito, MX — 2026</span>
                    <button onClick={toggleLanguage} className="hover:underline">
                        Edition: {lang === 'en' ? 'English' : 'Español'}
                    </button>
                </div>

                <div className="flex flex-col items-center py-2 md:py-4">
                    <a href="#home" className="font-serif text-3xl md:text-5xl font-bold text-black tracking-tighter uppercase italic">
                        Howard Garcia
                    </a>

                    <div className="hidden md:flex items-center space-x-6 mt-2 pt-2 border-t border-black w-full justify-center text-[10px] font-mono font-bold uppercase">
                        {['home', 'about', 'projects', 'clients', 'contact'].map((item) => (
                            <a key={item} href={`#${item}`} className="hover:italic">{navbarContent[item]}</a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}