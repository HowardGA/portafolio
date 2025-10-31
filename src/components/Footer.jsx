    import { FaGithub, FaLinkedin } from "react-icons/fa";
    import { motion } from "framer-motion";
    import { useTheme } from "../context/ThemeContext";

    export default function Footer () {
        const {color} = useTheme(); 
        const socialLinks = [
            { icon: <FaGithub/>, href: "https://github.com/HowardGA" },
            { icon: <FaLinkedin/>, href: "https://www.linkedin.com/in/howard-garcia-936607289/" },
        ];

        return (
        <footer 
                className="w-full **h-[300px]** backdrop-blur-lg text-gray-400 py-10 z-50 relative"
            >
                <div className="container mx-auto px-4 h-full flex flex-col justify-between">                
                    <div className="flex flex-col md:flex-row justify-between items-center w-full mt-4">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <h4 className="text-xl font-bold text-white mb-2">
                                Howard Garcia
                            </h4>
                            <p className="text-sm max-w-sm">
                                Crafting seamless digital experiences one component at a time.
                            </p>
                        </div>

                        <div className="flex space-x-6">
                            {socialLinks.map((link, index) => (
                                 <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, filter: "brightness(1.4)" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="text-4xl"
                                    style={{ color }}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    <motion.div style={{color}} className="border-t mt-5"/>
                    <div className="text-center text-sm border-gray-800 pt-6 mt-auto">
                        &copy; {new Date().getFullYear()} Howard Garcia. All rights reserved.
                    </div>
                </div>
            </footer>
        );
    }