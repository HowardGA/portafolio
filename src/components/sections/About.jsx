import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { SkillsGrid } from "../SkillGrid";
import { useLanguage } from "../../context/LanguageContext";

const StyledSpan = ({ children, color, isStrong = false }) => (
    <motion.span 
        className={`${isStrong ? 'font-semibold' : ''}`} 
    >
        {children}
    </motion.span>
);

export const About = () => {
    const { color } = useTheme();
    const { currentContent } = useLanguage();

    const aboutContent = currentContent.about;
    
    const replacements = {
        HILIGHT_NAME: <StyledSpan isStrong={true}>Howard Garcia</StyledSpan>,
        HILIGHT_WEBDEV: <StyledSpan isStrong={true}>web development</StyledSpan>,
        HILIGHT_IOT: <StyledSpan isStrong={true}>IoT</StyledSpan>,
        HILIGHT_ESP32: <StyledSpan>ESP32</StyledSpan>,
        HILIGHT_ESP8266: <StyledSpan>ESP8266</StyledSpan>,
        HILIGHT_ARDUINO: <StyledSpan >Arduino</StyledSpan>,
        HILIGHT_FASTLEARNER: <StyledSpan isStrong={true}>fast learner</StyledSpan>,
        HILIGHT_PROBLEMSOLVER: <StyledSpan isStrong={true}>curious problem-solver</StyledSpan>,
        HILIGHT_OPENFORWORK: <StyledSpan isStrong={true}>open to work</StyledSpan>,
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
        <section id="about" className="min-h-screen border-b-[1px] border-black mx-4 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="border-b-2 border-black mb-10 pb-2">
                    <h2 className="text-xl font-mono uppercase tracking-tighter">Section II: Biography & Technical Background</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-5 border-r-0 md:border-r-[1px] border-black pr-0 md:pr-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-none italic">
                            {aboutContent.headline}
                        </h1>

                        <motion.div
                            className="text-lg leading-relaxed space-y-6 text-justify"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <div className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                                <p>{renderParagraph(aboutContent.paragraph1)}</p>
                            </div>
                            <p>{renderParagraph(aboutContent.paragraph2)}</p>
                            <p className="pt-4 border-t border-black border-dashed italic">
                                {renderParagraph(aboutContent.paragraph3)}
                            </p>
                        </motion.div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="bg-[#1a1a1a] text-[#f4f1ea] p-4 mb-4 uppercase text-center font-bold tracking-widest">
                            Technical Specifications & Tooling
                        </div>
                        <SkillsGrid />
                    </div>
                </div>
            </div>
        </section>
    );
};