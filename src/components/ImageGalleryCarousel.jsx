import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageGalleryCarousel ({ project, onImageClick }) {
    
    return (
        <div 
            onClick={() => onImageClick(project)} 
            className="cursor-pointer relative w-full rounded-lg overflow-hidden" 
        >
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                className="w-full h-[25vh] sm:h-[30vh]" 
            >
                {project.galleryImages.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                        <motion.img 
                            src={imgSrc} 
                            alt={`${project.title} screenshot ${index + 1}`} 
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.02 }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}