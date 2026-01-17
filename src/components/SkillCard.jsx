import { motion } from 'framer-motion';

export const SkillCard = ({ icon, name, percentage }) => {
    const getLevel = (p) => {
        if (p >= 85) return "Expert";
        if (p >= 70) return "Advanced";
        return "Proficient";
    };

    return (
        <motion.div
            className="group flex flex-col p-3 border-[0.5px] border-black hover:bg-black hover:text-[#f4f1ea] transition-colors duration-300"
            whileHover={{ y: -2 }}
        >
            <div className="flex justify-between items-start mb-2">
                <span className="text-2xl grayscale group-hover:text-[#f4f1ea]">{icon}</span>
                <span className="font-mono text-[10px] uppercase border border-black px-1 group-hover:border-[#f4f1ea]">
                    {getLevel(percentage)}
                </span>
            </div>
            
            <p className="text-lg font-bold uppercase leading-tight">{name}</p>
            
            <div className="mt-2 flex gap-1 ">
                {[...Array(5)].map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-1 w-full border border-black ${i < (percentage/20) ? 'bg-black group-hover:bg-[#f4f1ea]' : ''}`}
                    />
                ))}
            </div>
        </motion.div>
    );
};