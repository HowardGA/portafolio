    import { FaGithub, FaLinkedin } from "react-icons/fa";
    import { motion } from "framer-motion";
    import { useLanguage } from "../context/LanguageContext";

    export default function Footer () {
    const {currentContent} = useLanguage();
    const footerContent = currentContent.footer;
    const socialLinks = [
        { name: "Github", icon: <FaGithub/>, href: "https://github.com/HowardGA" },
        { name: "LinkedIn", icon: <FaLinkedin/>, href: "https://www.linkedin.com/in/howard-garcia-936607289/" },
    ];

    return (
        <footer className="w-full bg-[#f4f1ea] text-black pt-16 pb-8 px-4 border-t-4 border-black mt-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    
                    <div className="space-y-4">
                        <h4 className="text-3xl font-bold uppercase tracking-tighter italic">
                            Howard Garcia
                        </h4>
                        <p className="font-mono text-[10px] uppercase leading-relaxed max-w-xs text-gray-600">
                            {footerContent.tagline}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase font-bold border-b border-black mb-2">Social Index</span>
                        <div className="flex gap-6">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, italic: true }}
                                    className="flex items-center gap-2 text-sm font-bold uppercase hover:underline"
                                >
                                    <span className="text-xl">{link.icon}</span>
                                    <span className="hidden lg:inline">{link.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="text-right flex flex-col justify-between">
                        <div className="font-mono text-[10px] uppercase leading-tight">
                            <p>Published: Rosarito, MX</p>
                            <p>Font: Serif & Monospace</p>
                            <p>Status: Available for Hire</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-black pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} — All Rights Reserved
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] animate-pulse">
                        End of Edition
                    </div>
                </div>
            </div>
        </footer>
    );
}