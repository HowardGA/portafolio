import { TimelineItem } from "../TimeLineItem";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import Certificate from '../../assets/files/20250813150238.pdf';
import Constancia from '../../assets/files/noname.pdf';
import TSU from '../../assets/files/TSU.pdf';
import Titulo from '../../assets/files/constancia-titulo.pdf';
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
            description="I just graduated with a software engineering degree, but my official title and diploma are still pending. Thus the certificate of completion for now."
            side="left" 
            certificateUrl={Titulo}
            
          />
          <TimelineItem 
            title="Front-End Developer Internship"
            subtitle="Itransition"
            date="Summer 2025"
            description="Developed responsive user interfaces and collaborated with a team to build a new feature."
            side="right"
            certificateUrl={Constancia} 
          />
           <TimelineItem 
            title="Project Manager Certificate"
            subtitle="Universidad Tecnológica de Tijuana"
            date="Summer 2025"
            description="Developed responsive user interfaces and collaborated with a team to build a new feature."
            side="left"
            certificateUrl={Certificate} 
          />
          <TimelineItem 
            title="TSU in Software Development"
            subtitle="Universidad Tecnológica de Tijuana"
            date="2021 - 2024"
            description="Acquired foundational knowledge in programming, databases, and software design principles."
            side="right" 
            certificateUrl={TSU}
          />
        </div>
      </div>
    </section>
  );
};