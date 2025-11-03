import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { SkillsGrid } from "../SkillGrid";
import { useLanguage } from "../../context/LanguageContext";

const StyledSpan = ({ children, color, isStrong = false }) => (
    <motion.span 
        className={`text-white ${isStrong ? 'font-semibold' : ''}`} 
        style={{ color }}
    >
        {children}
    </motion.span>
);

export const About = () => {
    const { color } = useTheme();
    const { currentContent } = useLanguage();

    const aboutContent = currentContent.about;
    
    const replacements = {
        HILIGHT_NAME: <StyledSpan color={color} isStrong={true}>Howard Garcia</StyledSpan>,
        HILIGHT_WEBDEV: <StyledSpan color={color} isStrong={true}>web development</StyledSpan>,
        HILIGHT_IOT: <StyledSpan color={color} isStrong={true}>IoT</StyledSpan>,
        HILIGHT_ESP32: <StyledSpan color={color}>ESP32</StyledSpan>,
        HILIGHT_ESP8266: <StyledSpan color={color}>ESP8266</StyledSpan>,
        HILIGHT_ARDUINO: <StyledSpan color={color}>Arduino</StyledSpan>,
        HILIGHT_FASTLEARNER: <StyledSpan color={color} isStrong={true}>fast learner</StyledSpan>,
        HILIGHT_PROBLEMSOLVER: <StyledSpan color={color} isStrong={true}>curious problem-solver</StyledSpan>,
        HILIGHT_OPENFORWORK: <StyledSpan color={color} isStrong={true}>open to work</StyledSpan>,
    };

    const renderParagraph = (text) => {
        let parts = [text];
        Object.entries(replacements).forEach(([placeholder, component]) => {
            parts = parts.flatMap(part => {
                if (typeof part !== 'string') return part;                
                const segments = part.split(`<${placeholder}>`);
                if (segments.length > 1) {
                    return [
                        segments[0],
                        component,  
                        segments[1] 
                    ];
                }
                return part;
            });
        });

        return parts.filter(p => p !== ''); 
    };

    return (
         <section 
            id="about" 
            className="min-h-screen flex items-center justify-center relative"
        >
         <div className="text-center z-10 px-4">
             <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 "
                >
                {aboutContent.headline}
            </motion.h1>
            
            <motion.div
                className="container text-gray-400 text-lg leading-relaxed space-y-5 mb-12 text-justify md:text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p>
                   {renderParagraph(aboutContent.paragraph1)}
                </p>

                <p>
                   {renderParagraph(aboutContent.paragraph2)}
                </p>

                <p>
                    {renderParagraph(aboutContent.paragraph3)}
                </p>
            </motion.div>

            <SkillsGrid />

         </div>
        </section>
    );
};