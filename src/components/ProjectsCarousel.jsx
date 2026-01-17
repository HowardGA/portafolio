import { staticProjects } from '../data/projects';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiGithub } from 'react-icons/fi';
import { useState } from 'react';
import ImageGalleryCarousel from './ImageGalleryCarousel';
import { Card } from './Card';
import GalleryModal from './GalleryModal';
import { useLanguage } from '../context/LanguageContext';

export const ProjectsCarousel = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ selectedProject, setSelectedProject ] = useState(null);
    const { currentContent, lang } = useLanguage();
    const projectsContent = currentContent.projects;
    const buttonText = lang === 'en' ? "View more" : "Ver más";

    const combinedProjects = projectsContent.items.map((textItem, index) => {
        const staticItem = staticProjects[index];

        return {
            ...textItem, 
            ...staticItem,
        };
    });

    const openModal = (project) => {
        setIsModalOpen(true);
        setSelectedProject(project);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    }

    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                    {combinedProjects.map((project, index) => (
                        <Card key={index}>
                            <div className="border border-black p-1 bg-white">
                                <ImageGalleryCarousel 
                                    project={project}
                                    onImageClick={openModal}
                                    className="w-full grayscale hover:grayscale-0 transition-all duration-500"
                                />
                                <p className="text-[10px] font-mono uppercase mt-1 text-right">Fig. {index + 1} — Documentation View</p>
                            </div>

                            <div className="flex flex-col flex-grow">
                                <h3 className="text-3xl font-bold uppercase mb-1 leading-none tracking-tighter">
                                    {project.title}
                                </h3>
                                <p className="font-mono text-xs uppercase text-gray-600 mb-4 italic border-b border-black pb-2">
                                    Subject: {project.subtitle}
                                </p>
                                
                                <p className="text-sm leading-snug text-justify mb-4">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    {project.techStack && (
                                        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6 border-y border-black border-dotted py-2">
                                            {project.techStack.map((tech, i) => (
                                                <span key={i} className="text-[10px] font-mono uppercase font-bold">
                                                    #{tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <motion.a 
                                        href={project.link} 
                                        target="_blank"
                                        className="inline-flex items-center gap-2 border-2 border-black px-6 py-2 font-bold uppercase text-sm hover:bg-black hover:text-white transition-all"
                                    >
                                        {buttonText}
                                        <FiGithub />
                                    </motion.a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                {isModalOpen && selectedProject && (
                    <GalleryModal 
                        project={selectedProject} 
                        onClose={closeModal} 
                    />
                )}
        </>
    );
};