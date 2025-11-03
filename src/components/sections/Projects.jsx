import { motion } from "framer-motion";
import { ProjectsCarousel } from "../ProjectsCarousel";
import { useLanguage } from "../../context/LanguageContext";

export const Projects = () => {
     const {currentContent} = useLanguage();
     const projectsContent = currentContent.projects;
    return (
         <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center relative"
        >
        <div className="container mx-auto px-4">
             <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 text-center"
                >
                {projectsContent.title}
            </motion.h1>
            <ProjectsCarousel />
         </div>
        </section>

    )
};