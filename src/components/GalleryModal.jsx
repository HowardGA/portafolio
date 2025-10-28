import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTheme } from '../context/ThemeContext';

export default function GalleryModal ({ project, onClose }) {
    const { border, boxShadow} = useTheme();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative w-full max-w-4xl max-h-full bg-gray-800 rounded-lg shadow-2xl p-6"
                style={{ border, boxShadow}}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-white text-3xl z-10"
                >
                    &times; 
                </button>
                
                <h3 className="text-white text-xl mb-4">{project.title} Gallery</h3>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }} 
                    className="w-full h-[70vh]" 
                >
                    {project.galleryImages.map((imgSrc, index) => (
                        <SwiperSlide key={index}>
                            <img 
                                src={imgSrc} 
                                alt={`${project.title} screenshot ${index + 1}`} 
                                className="w-full h-full object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
};