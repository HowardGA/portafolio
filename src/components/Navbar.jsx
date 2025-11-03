import { useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    const { color, boxShadow, border } = useTheme();
    const { lang, toggleLanguage, currentContent} = useLanguage();

    const navbarContent = currentContent.nav;

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 backdrop-blur-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        Houster <motion.span 
                            style={{ color }}
                        > 
                        Dev 
                        </motion.span>
                    </a>
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => {setMenuOpen((prev) => !prev)}}>
                        <FaHamburger/>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <motion.a 
                            href="#home" 
                            style={{ color }}
                            >
                            {navbarContent.home}
                        </motion.a>
                        <motion.a 
                            href="#about" 
                            style={{ color }}
                            >

                             {navbarContent.about}
                        </motion.a>
                         <motion.a 
                            href="#projects" 
                            style={{ color }}
                            >

                             {navbarContent.projects}
                        </motion.a>
                         <motion.a 
                            href="#clients" 
                            style={{ color }}
                            >                          
                             {navbarContent.clients}
                        </motion.a>
                         <motion.a 
                            href="#contact" 
                            style={{ color }}
                            >                          
                             {navbarContent.contact}
                        </motion.a>
                        <motion.button
                            onClick={toggleLanguage} 
                            className="px-3 py-1 text-sm font-bold rounded-full border"
                            style={{border, boxShadow}}
                        >
                            {lang === 'en' ? 'ES' : 'EN'}
                        </motion.button>
                    </div>
                </div>
            </div>
        </nav>
    );
}