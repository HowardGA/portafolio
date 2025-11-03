import { TimelineItem } from "../TimeLineItem";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import Certificate from '../../assets/files/20250813150238.pdf';
import Constancia from '../../assets/files/noname.pdf';
import TSU from '../../assets/files/TSU.pdf';
import Titulo from '../../assets/files/constancia-titulo.pdf';
import { useLanguage } from "../../context/LanguageContext";

export const Timeline = () => {
  const {color} = useTheme();
  const { currentContent } = useLanguage(); 

  const timelineContent = currentContent.timeline;
  const certificateUrls = [Titulo, Constancia, Certificate, TSU];
  const combinedTimelineItems = timelineContent.items.map((item, index) => ({
    ...item,
    certificateUrl: certificateUrls[index]
  }));

  return (
    <section id="formation" className="py-12">
      <div className="container mx-auto px-4 text-center z-10 px-4">
          <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 "
          >
            {timelineContent.title}
          </motion.h1>        
          <div className="relative wrap overflow-hidden p-10 h-full">
          <motion.div className="border-2-2 absolute border-opacity-20 h-full border z-10" style={{ left: '50%', color }}></motion.div>
          
         {combinedTimelineItems.map((item, index) => (
                <TimelineItem 
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    date={item.date}
                    description={item.description}
                    side={item.side} 
                    certificateUrl={item.certificateUrl} 
                />
            ))}
        </div>
      </div>
    </section>
  );
};