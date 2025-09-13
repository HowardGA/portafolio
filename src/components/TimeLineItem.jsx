import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export const TimelineItem = ({ title, subtitle, date, description, side = 'right' }) => {
  const isLeft = side === 'left';
  const { color, border, boxShadow } = useTheme();

  return (
    <div className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
        <motion.div
        className="order-1 w-full md:w-5/12 bg-gray-800 rounded-lg shadow-xl px-6 py-4 mb-4 md:mb-0 z-20"
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        style={{ border, boxShadow }}
      >
        <h3 className="mb-2 font-bold text-gray-200 text-xl">{title}</h3>
        <motion.p className="mb-3 text-sm font-medium" style={{ color }}>{subtitle}</motion.p>
        <p className="text-sm leading-snug tracking-wide text-gray-400">{description}</p>
      </motion.div>
      
      <motion.div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-10 h-10 rounded-full" style={{ boxShadow, border }}>
        <h1 className="mx-auto font-semibold text-lg text-white"><FaGraduationCap /></h1>
      </motion.div>
      
      <div className={`order-1 w-full md:w-5/12 ${isLeft ? '' : 'hidden md:block'}`}></div>
    </div>
  );
};