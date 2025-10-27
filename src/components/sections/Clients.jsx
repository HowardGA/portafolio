import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { clients } from '../../data/clients';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiArrowRight } from "react-icons/fi";

export default function Clients() {
    const {border, boxShadow, color} = useTheme()
    return (
        <section
        id="clients" 
            className="min-h-screen flex items-center justify-center relative"
        >   
         <div className="text-center z-10 px-4">
             <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-10 "
          style={{color}}>
                My Clients
          </motion.h1>   
           <motion.div
                className="py-12 rounded-lg max-w-5xl mx-auto overflow-hidden"
                style={{ border, boxShadow }} 
            >
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="max-w-5xl mx-auto"
                
            >
                {clients.map((project, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            className="rounded-lg p-8 flex flex-col md:flex-row items-center gap-8"
                            initial={{ y: 50, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}  
                            transition={{ duration: 0.6, ease: "easeOut" }} 
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full md:w-1/2 rounded-lg"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                            <div className="text-white text-center md:text-left">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.subtitle}</p>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <motion.a 
                                    href={project.link}
                                    className='group relative flex w-fit items-center gap-1.5'
                                    style={{color}}
                                >
                                    View More 
                                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"/>
                                </motion.a>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </motion.div>
            </div>
        </section>
    );
}