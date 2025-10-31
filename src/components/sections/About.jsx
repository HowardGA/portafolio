import { Card } from "../Card";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { SkillsGrid } from "../SkillGrid";

export const About = () => {
    const {color} = useTheme();
    return (
         <section 
            id="about" 
            className="min-h-screen flex items-center justify-center relative"
        >
         <div className="text-center z-10 px-4">
             <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 "
                >
                Who am i?
            </motion.h1>
            
            <motion.div
                className="container text-gray-400 text-lg leading-relaxed space-y-5 mb-12 text-justify md:text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                <p>
                    Hi, I'm <motion.span className="text-white font-semibold" style={{color}}>Howard Garcia</motion.span>, a freshly graduated software developer eager to grow and take on new challenges. 
                    I’m passionate about creating clean, efficient, and user-friendly applications, and I’m always looking for opportunities to learn from experienced teams and contribute to meaningful projects.
                </p>

                <p>
                    While most of my experience has been focused on <motion.span className="text-white font-semibold" style={{color}}>web development</motion.span>, I’m also fascinated by the world of <motion.span className="text-white font-semibold" style={{color}}>IoT (Internet of Things)</motion.span>. 
                    I’ve worked with microcontrollers such as the <motion.span className="text-white" style={{color}}>ESP32</motion.span>, <motion.span className="text-white" style={{color}}>ESP8266</motion.span>, and <motion.span className="text-white" style={{color}}>Arduino</motion.span>, exploring how hardware and software can come together to create innovative solutions.
                </p>

                <p>
                    I consider myself a <motion.span className="text-white font-semibold" style={{color}}>fast learner</motion.span>, a <motion.span className="text-white font-semibold" style={{color}}>curious problem-solver</motion.span>, and someone who thrives in collaborative environments. 
                    I’m currently <motion.span className="text-white font-semibold" style={{color}}>open to work</motion.span>, looking for a place where I can continue to learn, grow, and make an impact through technology.
                </p>
        </motion.div>


            <SkillsGrid />

         </div>
        </section>

    )
};