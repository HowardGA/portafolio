import { motion } from "framer-motion"
import { useTheme } from "../../context/ThemeContext"
import { ContactForm } from "../ContactForm";

export const Contact = () => {
    const {color} = useTheme();
    return (
         <section 
            id="contact" 
            className="min-h-screen flex items-center justify-center relative"
        >
         <div className="text-center z-10 px-4">
             <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 "
                >
                Get in touch
            </motion.h1>
            
            <ContactForm />
         </div>
        </section>
    )
}