import { TimelineItem } from "../TimeLineItem";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
export const Timeline = () => {
  const {color} = useTheme();
  return (
    <section id="formation" className="py-12">
      <div className="container mx-auto px-4 text-center z-10 px-4">
          <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 "
          >
                My Journey
          </motion.h1>        
          <div className="relative wrap overflow-hidden p-10 h-full">
          <motion.div className="border-2-2 absolute border-opacity-20 h-full border z-10" style={{ left: '50%', color }}></motion.div>
          
          <TimelineItem 
            title="Software Engineering"
            subtitle="Universidad Tecnológica de Tijuana"
            date="2025 - Present"
            description="Currently in my 11th quarter, specializing in software engineering with a focus on web development."
            side="left" 
          />
          <TimelineItem 
            title="Front-End Developer Internship"
            subtitle="Itransition"
            date="Summer 2025"
            description="Developed responsive user interfaces and collaborated with a team to build a new feature."
            side="right" 
          />
           <TimelineItem 
            title="Project Manager Certificate"
            subtitle="Universidad Tecnológica de Tijuana"
            date="Summer 2025"
            description="Developed responsive user interfaces and collaborated with a team to build a new feature."
            side="left" 
          />
          <TimelineItem 
            title="TSU in Software Development"
            subtitle="Universidad Tecnológica de Tijuana"
            date="2021 - 2024"
            description="Acquired foundational knowledge in programming, databases, and software design principles."
            side="right" 
          />
        </div>
      </div>
    </section>
  );
};