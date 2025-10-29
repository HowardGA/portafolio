import { Card } from "../Card";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { ProjectsCarousel } from "../ProjectsCarousel";


export const Projects = () => {
    const {color} = useTheme();
    return (
         <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center relative"
        >
        <div className="container mx-auto px-4">
             <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 text-center"
                >
                Projects
            </motion.h1>
            <ProjectsCarousel />
         </div>
        </section>

    )
};