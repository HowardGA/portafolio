import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";


export default function ThankYouMessage () {
    return (
        <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="max-w-md mx-auto p-12 border-2 border-black bg-white text-center relative overflow-hidden"
            >
                <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-red-800/20 rounded-full flex items-center justify-center -rotate-12 pointer-events-none">
                    <span className="text-red-800/30 font-bold text-xs uppercase text-center leading-none">
                        Received<br/>Jan 2026
                    </span>
                </div>

                <div className="border-b border-black/10 pb-4 mb-4">
                    <p className="text-2xl font-bold uppercase tracking-tighter italic">
                        Acknowledgment of Receipt
                    </p>
                </div>
                
                <p className="text-lg leading-snug italic text-gray-800 mb-6">
                    "Thank you for reaching out. Your message has been filed and I shall review the contents as soon as my schedule permits."
                </p>
                
                <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                    Transmission Successful — Ref: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </div>
            </motion.div>
    );
}