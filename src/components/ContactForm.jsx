import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const ContactForm = ({ formspreeAction }) => {
    const contactInfo = [
        { icon: FiMail, title: "Email", value: "howardisaigarciaarreola@gmail.com", link: "mailto:howardisaigarciaarreola@gmail.com" },
        { icon: FiPhone, title: "Phone", value: "661 146 3164", link: "tel:+526611463164" },
        { icon: FiMapPin, title: "Location", value: "Playas de Rosarito, BC", link: "https://maps.app.goo.gl/YourMapLink" }
    ];
    const {border, boxShadow, color} = useTheme();

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    
               <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="lg:w-1/3 p-6 rounded-xl bg-gray-800 shadow-2xl"
                    style={{border, boxShadow}}
                >
                    <h3 className="text-2xl font-semibold text-white mb-6 text-left">My Details</h3>                     
                    <div className="space-y-8">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="flex flex-col items-start gap-2 border-b border-gray-700 pb-4"> 
                                
                                <div className="flex items-center gap-3">
                                    <item.icon className="w-8 h-8 text-indigo-400 flex-shrink-0" /> 
                                    
                                    <p className="text-lg font-bold text-gray-200">{item.title}</p>
                                </div>
                                
                                <motion.a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-400 hover:text-indigo-400 transition ml-11 text-base" 
                                    style={{color}}
                                >
                                    {item.value}
                                </motion.a>
                            </div>
                        ))}
                    </div>
                </motion.div>

                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-2/3 p-8 rounded-xl bg-gray-800 shadow-2xl"
                        style={{border, boxShadow}}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
                        
                        <form action={formspreeAction || "#"} method="POST" className="space-y-6">
                            
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name or Company"
                                required
                                className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                            />
                            
                            <input
                                type="email"
                                name="_replyto" 
                                placeholder="Your Email Address"
                                required
                                className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                            />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                required
                                className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                            ></textarea>

                            <motion.button 
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                                style={{border, boxShadow}}
                            >
                                Send Message 
                                <FiSend className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"/>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};