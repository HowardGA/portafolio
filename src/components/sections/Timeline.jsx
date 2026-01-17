import { TimelineItem } from "../TimeLineItem";
import Certificate from '../../assets/files/20250813150238.pdf';
import Constancia from '../../assets/files/noname.pdf';
import TSU from '../../assets/files/TSU.pdf';
import Titulo from '../../assets/files/constancia-titulo.pdf';
import { useLanguage } from "../../context/LanguageContext";

export const Timeline = () => {
  const { currentContent } = useLanguage(); 
  const timelineContent = currentContent.timeline;
  const certificateUrls = [Titulo, Constancia, Certificate, TSU];
  
  const combinedTimelineItems = timelineContent.items.map((item, index) => ({
    ...item,
    certificateUrl: certificateUrls[index]
  }));

  return (
    <section id="formation" className="py-20 border-b border-black mx-4 ">
      <div className="max-w-6xl mx-auto px-4">
          <div className="border-y-2 border-black py-4 mb-16 text-center">
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter italic">
                {timelineContent.title}
              </h1>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[1px] bg-black"></div>
            
            <div className="space-y-12">
              {combinedTimelineItems.map((item, index) => (
                <TimelineItem 
                    key={index}
                    {...item}
                />
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};