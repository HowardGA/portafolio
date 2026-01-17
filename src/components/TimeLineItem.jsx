import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
export const TimelineItem = ({ title, subtitle, date, description, side = 'right', certificateUrl=null }) => {
  const isLeft = side === 'left';

  return (
    <div className={`relative flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      <motion.div
        className="w-full md:w-[45%] pl-12 md:pl-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className={`p-6 border border-black bg-white/40 hover:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
          <span className="font-mono text-xs font-bold uppercase bg-black text-white px-2 py-1 mb-3 inline-block">
            {date}
          </span>
          <h3 className="text-2xl font-bold uppercase leading-none mb-1 tracking-tighter">{title}</h3>
          <h4 className="text-md italic font-medium mb-3 border-b border-black/10 pb-2">{subtitle}</h4>
          <p className="text-sm leading-relaxed text-justify italic text-gray-800">{description}</p>
          
          {certificateUrl && (
            <motion.a 
                href={certificateUrl} 
                download
                className="mt-6 flex w-fit items-center gap-2 border-[1px] border-black px-4 py-2 font-mono text-xs uppercase hover:bg-black hover:text-white transition-all"
            >
                <FaFilePdf /> [Download Record]
            </motion.a>
          )}
        </div>
      </motion.div>
      
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="w-3 h-3 bg-black rotate-45 border border-white"></div>
      </div>
      
      <div className="hidden md:block md:w-[45%]"></div>
    </div>
  );
};