import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPython, FaLaravel, FaGitAlt, FaWifi } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiMysql, SiPostgresql, SiTypescript } from "react-icons/si";

import { SiTailwindcss } from 'react-icons/si';
import { SkillCard } from './SkillCard';
const skills = [
  { icon: <FaReact />, name: 'React', percentage: 65 },
  { icon: <FaHtml5 />, name: 'HTML5', percentage: 90 },
  { icon: <FaCss3Alt />, name: 'CSS3', percentage: 85 },
  { icon: <FaJsSquare />, name: 'JavaScript', percentage: 70 },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', percentage: 80 },
  { icon: <FaNodeJs />, name: 'Node.js', percentage: 55 },
  { icon: <FaPython />, name: 'Python', percentage: 75 },
  { icon: <SiNextdotjs />, name: 'NextJS', percentage: 65 },
  { icon: <FaLaravel />, name: 'Laravel REST', percentage: 65 },
  { icon: <SiDjango />, name: 'Django REST', percentage: 65 },
  { icon: <SiMysql />, name: 'MySQL', percentage: 75 },
  { icon: <SiPostgresql />, name: 'PostgreSQL', percentage: 75 },
  { icon: <SiTypescript />, name: 'TypeScript', percentage: 75 },
  { icon: <FaGitAlt />, name: 'Git', percentage: 65 },
  { icon: <FaWifi />, name: 'IoT', percentage: 65 },
  
];

export const SkillsGrid = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

