import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import PFP from "../../assets/pfp2.jpg";
import { useLanguage } from "../../context/LanguageContext";

export const Home = () => {
    const {currentContent} = useLanguage();

    const homeContent = currentContent.home;

    return (
        <section 
            id="home" 
            className="flex flex-col items-center justify-start pt-8 pb-12 relative border-b border-black mx-4"
        >
            <div className="w-full max-w-6xl">
                <div className="border-b-2 border-black py-4 mb-8 text-center uppercase font-bold text-sm tracking-widest">
                    Available for Freelance • Remote • Hybrid or On site Based in Tijuana B.C, MX • Edition 2026
                </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                    <h1 className="text-6xl md:text-9xl font-bold leading-tight">
                        {homeContent.greeting}
                    </h1>
                </div>
                <div className="border-l-0 md:border-l-[1px] border-black pl-0 md:pl-8">
                    <img 
                        src={PFP} 
                        className="grayscale contrast-125 mb-4 border border-black p-1 bg-white" 
                        alt="Howard" 
                    />
                    <p className="text-sm uppercase ">
                        {homeContent.title}
                    </p>
                </div>
            </div>
                <div className="flex justify-center space-x-4">
                <motion.a 
                    href="#contact"
                    whileHover={{
                        scale: 1.015
                    }}
                    whileTap={{
                        scale: 0.985
                    }}
                    className="group relative flex w-fit items-center gap-1.5 hover:bg-black px-4 py-2 font-bold border-2 border-black p-1 mt-6 transition-colors hover:text-white"
                >
                    {homeContent.cta}
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"/>
                </motion.a>
                </div>
            </div>
        </section>
    )
}
