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
         <div className="text-center z-10 px-4">
             <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 "
                style={{color}}>
                A little of my work
            </motion.h1>
            
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptate ducimus quam sit expedita doloremque quos aperiam quidem autem provident quis, possimus excepturi! Maxime illo voluptate eos qui vero nesciunt.
            </p>
            <ProjectsCarousel />
         </div>
        </section>

    )
};