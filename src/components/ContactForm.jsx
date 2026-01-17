import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext'; 

const staticContactDetails = [
    { icon: FiMail, link: "mailto:howardisaigarciaarreola@gmail.com" },
    { icon: FiPhone, link: "tel:+526611463164" },
    { icon: FiMapPin }
];

export const ContactForm = ({ formspreeAction, onSuccess }) => {
    const { currentContent } = useLanguage(); 
    const contactContent = currentContent.contact;
    const localizedContactInfo = contactContent.contactInfo.map((item, index) => ({
            ...item,
            icon: staticContactDetails[index].icon,
            link: staticContactDetails[index].link
        }));

    const formText = contactContent.form;

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(formspreeAction, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                if (onSuccess) {
                    onSuccess();
                }
                form.reset(); 
            } else {
                alert("Oops! There was a problem sending your message.");
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert("Oops! A network error occurred.");
        }
    };

    return (
       <div className="flex flex-col lg:flex-row border-2 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">            
            <motion.div 
                className="lg:w-1/3 p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-[#f9f7f2]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-8 italic border-b border-black pb-2">
                    {contactContent.detailsTitle}
                </h3>                     
                <div className="space-y-10">
                    {localizedContactInfo.map((item, index) => (
                        <div key={index} className="group"> 
                            <div className="flex items-center gap-3 mb-1">
                                <item.icon className="w-5 h-5 text-black" /> 
                                <p className="font-mono text-xs uppercase font-bold tracking-widest">{item.title}</p>
                            </div>
                            
                            <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-lg font-serif italic hover:bg-black hover:text-white px-1 transition-colors block ml-8" 
                            >
                                {item.value}
                            </a>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 pt-8 border-t border-black border-dashed">
                    <p className="font-mono text-[10px] uppercase leading-tight text-gray-500">
                        * All correspondence is handled within 24 business hours.
                    </p>
                </div>
            </motion.div>

            <motion.div 
                className="lg:w-2/3 p-8 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-8">
                    {formText.messageTitle}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                required
                                className="peer w-full bg-transparent border-b-2 border-black py-2 focus:outline-none font-serif text-lg placeholder-transparent"
                                placeholder={formText.placeholderName}
                                id="name"
                            />
                            <label htmlFor="name" className="absolute left-0 -top-3.5 font-mono text-[10px] uppercase font-bold transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-black">
                                {formText.placeholderName}
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                name="_replyto" 
                                required
                                className="peer w-full bg-transparent border-b-2 border-black py-2 focus:outline-none font-serif text-lg placeholder-transparent"
                                placeholder={formText.placeholderEmail}
                            />
                            <label className="absolute left-0 -top-3.5 font-mono text-[10px] uppercase font-bold transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-black">
                                {formText.placeholderEmail}
                            </label>
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            name="subject"
                            required
                            className="peer w-full bg-transparent border-b-2 border-black py-2 focus:outline-none font-serif text-lg placeholder-transparent"
                            placeholder={formText.placeholderSubject}
                        />
                        <label className="absolute left-0 -top-3.5 font-mono text-[10px] uppercase font-bold transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-black">
                            {formText.placeholderSubject}
                        </label>
                    </div>

                    <div className="relative">
                        <textarea
                            name="message"
                            rows="4"
                            required
                            className="peer w-full bg-transparent border-b-2 border-black py-2 focus:outline-none font-serif text-lg placeholder-transparent resize-none"
                            placeholder={formText.placeholderMessage}
                        ></textarea>
                        <label className="absolute left-0 -top-3.5 font-mono text-[10px] uppercase font-bold transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-black">
                            {formText.placeholderMessage}
                        </label>
                    </div>

                    <motion.button 
                        type="submit"
                        whileHover={{ backgroundColor: "#000", color: "#fff" }}
                        className="w-full md:w-auto border-2 border-black px-10 py-3 font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-colors"
                    >
                        {formText.buttonText}
                        <FiSend />
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};