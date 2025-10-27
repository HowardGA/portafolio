import { useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    const { color } = useTheme();

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
                            Home
                        </motion.a>
                        <motion.a 
                            href="#about" 
                            style={{ color }}
                            >

                            About
                        </motion.a>
                         <motion.a 
                            href="#projects" 
                            style={{ color }}
                            >

                            Projects
                        </motion.a>
                         <motion.a 
                            href="#clients" 
                            style={{ color }}
                            >                          
                            Clients
                        </motion.a>
                         <motion.a 
                            href="#contact" 
                            style={{ color }}
                            >                          
                            Contact
                        </motion.a>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}