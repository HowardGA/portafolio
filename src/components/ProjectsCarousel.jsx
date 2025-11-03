import { staticProjects } from '../data/projects';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
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
    const {color, border, boxShadow} = useTheme();
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
                                <ImageGalleryCarousel 
                                    project={project}
                                    onImageClick={openModal}
                                    className="w-full rounded-lg"
                                />
                                <div className="text-white text-center md:text-left">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-1">{project.title}</h3>
                                    <p className="text-gray-400 mb-2 text-sm">{project.subtitle}</p>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    {project.techStack && project.techStack.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                                            {project.techStack.map((tech, i) => (
                                                <motion.span 
                                                    key={i} 
                                                    className="px-2 py-0.5 text-xs font-medium rounded-full"
                                                    style={{ 
                                                        backgroundColor: `${color}1A`,
                                                        color: color, 
                                                        border: `1px solid ${color}33`
                                                    }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    )}
                                    <motion.a 
                                        whileHover={{
                                            scale: 1.015
                                        }}
                                        whileTap={{
                                            scale: 0.985
                                        }}
                                        style={{
                                            border, boxShadow,
                                        }}
                                        href={project.link} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50 z-20"
                                    >
                                        {buttonText}
                                    <FiGithub className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"/>
                                </motion.a>
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