import { motion } from "framer-motion"
import { useTheme } from "../../context/ThemeContext"
import { ContactForm } from "../ContactForm";
import { useState, useCallback } from "react";
import ThankYouMessage from "../ThankYouMessage";
import { useLanguage } from "../../context/LanguageContext";

export const Contact = () => {
    const {color} = useTheme();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { currentContent } = useLanguage();
    const contactContent = currentContent.contact;

    const handleFormSuccess = useCallback(() => {
        setIsSubmitted(true);
    });

    return (
         <section 
            id="contact" 
            className="min-h-screen flex items-center justify-center relative"
        >
         <div className="text-center z-10 px-4">
             <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 "
                >
                { isSubmitted ? contactContent.formSubmittedTitle : contactContent.formTitle }
            </motion.h1>
                {
                    isSubmitted ? (
                        <ThankYouMessage color={color}/>
                    ) : (
                        <ContactForm 
                            formspreeAction="https://formspree.io/f/xyzbnqvv"
                            onSuccess={handleFormSuccess}
                            />
                    )
                }
         </div>
        </section>
    )
}