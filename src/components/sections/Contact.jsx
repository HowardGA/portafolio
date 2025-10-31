import { motion } from "framer-motion"
import { useTheme } from "../../context/ThemeContext"
import { ContactForm } from "../ContactForm";
import { useState, useCallback } from "react";
import ThankYouMessage from "../ThankYouMessage";

export const Contact = () => {
    const {color} = useTheme();
    const [isSubmitted, setIsSubmitted] = useState(false);

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
                { isSubmitted ? 'Message Sent!' : 'Get in touch' }
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