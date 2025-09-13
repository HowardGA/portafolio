import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const SkillCard = ({ icon, name, percentage }) => {
    const { border, boxShadow, color } = useTheme();
    return (
        <motion.div
            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            style={{border, boxShadow}}
        >
            <motion.div
                className="text-4xl mb-2"
                style={{color}}
            >
                {icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    className="h-full transition-all duration-500 ease-in-out"
                    style={{ width: `${percentage}%`, backgroundColor: color }}
                />
            </div>
            <span className="mt-2 text-sm text-gray-400">{percentage}%</span>
        </motion.div>
    );
};