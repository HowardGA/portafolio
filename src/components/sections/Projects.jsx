import { motion } from "framer-motion";
import { ProjectsCarousel } from "../ProjectsCarousel";
import { useLanguage } from "../../context/LanguageContext";

export const Projects = () => {
     const {currentContent} = useLanguage();
     const projectsContent = currentContent.projects;
    return (
        <section id="projects" className="min-h-screen border-b-[1px] border-black mx-4 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="border-b-2 border-black mb-10 pb-2 flex justify-between items-end">
                    <h2 className="text-xl font-mono uppercase tracking-tighter">Section IV: Case Studies (School, Individual & Internship)</h2>
                    <span className="font-mono text-xs uppercase hidden md:block">Issue No. 01 — 2026</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold mb-12 text-center uppercase tracking-tighter italic">
                    {projectsContent.title}
                </h1>

                <ProjectsCarousel />
            </div>
        </section>
    )
};