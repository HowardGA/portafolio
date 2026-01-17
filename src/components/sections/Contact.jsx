import { motion } from "framer-motion"
import { ContactForm } from "../ContactForm";
import { useState, useCallback } from "react";
import ThankYouMessage from "../ThankYouMessage";
import { useLanguage } from "../../context/LanguageContext";

export const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { currentContent } = useLanguage();
    const contactContent = currentContent.contact;

    const handleFormSuccess = useCallback(() => {
        setIsSubmitted(true);
    });

    return (
        <section id="contact" className="min-h-screen py-20 border-b border-black mx-4">
            <div className="max-w-6xl mx-auto px-4">
                <div className="border-b-2 border-black mb-12 pb-2 text-center">
                    <h2 className="text-xl font-mono uppercase tracking-widest">Post & Correspondence</h2>
                    <h1 className="text-5xl md:text-7xl font-bold uppercase italic mt-2">
                        {isSubmitted ? "Message Sent" : contactContent.formTitle}
                    </h1>
                </div>

                {isSubmitted ? (
                    <ThankYouMessage />
                ) : (
                    <div className="p-8 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <ContactForm 
                            formspreeAction="https://formspree.io/f/xyzbnqvv"
                            onSuccess={handleFormSuccess}
                        />
                    </div>
                )}
                
            </div>
        </section>
    )
}