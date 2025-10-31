import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";


export default function ThankYouMessage ({color}) {
    return (
        <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="max-w-md mx-auto p-10 rounded-xl bg-gray-800 shadow-2xl mt-10"
    >
        <motion.div
            style={{color}}
        >   
            <FiCheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color }} />
        </motion.div>
        <p className="text-xl text-white font-semibold mb-3">
            Thanks for reaching out!
        </p>
        <p className="text-gray-400">
            I'll review your message and get back to you as soon as possible.
        </p>
    </motion.div>
    );
}