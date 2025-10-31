import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import PFP from "../../assets/pfp.png";
import { useTheme } from "../../context/ThemeContext";

export const Home = () => {
    const { border, boxShadow } = useTheme();

    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="text-center z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    style={{
                        border, boxShadow
                    }}
                    className="w-68 h-68 rounded-full overflow-hidden shadow-lg items-center justify-center relative mx-auto"
                >
                    <img
                        src={PFP}
                        alt="Howard"
                        style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                        }}
                    />
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-4">
                    Hi, I'm Howard Garcia
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                   As a software developer ready to take on new challenges, I'm passionate about building clean, efficient, and user-friendly applications. I'm a quick learner and a strong communicator, always eager to expand my skills and collaborate on exciting projects.
                </p>
                <div className="flex justify-center space-x-4">
                <motion.a 
                    href="#contact"
                    whileHover={{
                        scale: 1.015
                    }}
                    whileTap={{
                        scale: 0.985
                    }}
                    style={{
                        border, boxShadow
                    }}
                    className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                >
                    Contact Me
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"/>
                </motion.a>
                </div>
            </div>
        </section>
    )
}
