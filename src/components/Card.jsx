import { motion } from "framer-motion";

export const Card = ({children}) => {
    return (
        <motion.div
            className="border-[1px] border-black p-4 md:p-6 flex flex-col gap-4 bg-white/50 hover:bg-white transition-colors duration-300 relative"
            style={{ outline: '4px solid transparent', outlineOffset: '-4px' }}
        >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-black"></div>
            {children}
        </motion.div>
    );
}