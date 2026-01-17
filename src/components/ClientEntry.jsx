import { motion } from "framer-motion";
import { FiArrowRight } from 'react-icons/fi';

const ClientEntry = ({ client, index }) => {
    return (
        <motion.div
            className="group flex flex-col md:flex-row items-center gap-6 p-8 border-[0.5px] border-black bg-white/30 hover:bg-white transition-all duration-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            key={index}
        >
            <div className="w-full md:w-1/3 flex justify-center border-b md:border-b-0 md:border-r border-black/10 pb-4 md:pb-0 md:pr-4">
                <img 
                    src={client.image} 
                    alt={client.title} 
                    className="h-50 w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100" 
                />
            </div>

            <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-1">{client.title}</h3>
                
                {client.subtitle && (
                    <p className="font-mono text-[10px] uppercase text-gray-500 mb-2 italic">
                        Collaborative Partner — {client.subtitle}
                    </p>
                )}

                {client.description && (
                    <p className="text-sm leading-snug mb-4 italic text-gray-700">
                        "{client.description}"
                    </p>
                )}
                
                {client.link && (
                    <a 
                        href={client.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest border-b-2 border-black pb-0.5 hover:bg-black hover:text-white transition-all"
                    >
                        {client.buttonText} <FiArrowRight />
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default ClientEntry;