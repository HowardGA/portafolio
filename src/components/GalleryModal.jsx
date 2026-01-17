import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaXmark } from 'react-icons/fa6';

export default function GalleryModal ({ project, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#f4f1ea]/90 backdrop-blur-md">
            <motion.div 
                className="relative w-full max-w-5xl bg-[#f4f1ea] border-2 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] p-8"
            >
                <button onClick={onClose} className="absolute -top-4 -right-4 bg-black text-white p-2 border-2 border-black hover:bg-white hover:text-black transition-colors">
                   <FaXmark size={24}/>
                </button>
                
                <div className="border-b border-black mb-6 pb-2">
                    <h3 className="text-2xl font-bold uppercase italic">Evidence Folder: {project.title}</h3>
                </div>

                <Swiper className="w-full h-[60vh] border border-black bg-white">
                    {project.galleryImages.map((imgSrc, index) => (
                        <SwiperSlide key={index}>
                            <img src={imgSrc} className="w-full h-full object-contain p-4 grayscale hover:grayscale-0 transition-all" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
};