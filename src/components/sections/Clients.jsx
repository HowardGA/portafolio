import { staticClients } from '../../data/staticClients';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Card } from '../Card';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

export default function Clients() {
    const {border, boxShadow, color} = useTheme()
    const { currentContent } = useLanguage(); 

    const clientsContent = currentContent.clients; 
    const buttonText = clientsContent.buttonText;
    const combinedClients = clientsContent.items.map((textItem, index) => {
        const staticItem = staticClients[index];

        return {
            ...textItem, 
            image: staticItem.image,
            techStack: staticItem.techStack,
            link: staticItem.link,
            buttonText: buttonText
        };
    });
    
    return (
        <section
            id="clients" 
            className="min-h-screen flex items-center justify-center py-12 relative"
        >   
              <div className="container mx-auto px-4">

            <div className="text-center z-10 px-4 w-full"> 
                <motion.h1 
                    className="text-4xl md:text-6xl font-bold mb-10 "
                    >
                   {clientsContent.title}
                </motion.h1>   
 
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-8">
                        {combinedClients.map((client, index) => (
                              <Card key={index}>
                                <motion.div
                                className="flex flex-col items-center justify-start text-center p-4  h-full gap-1"
                                initial={{ y: 20, opacity: 0 }} 
                                whileInView={{ y: 0, opacity: 1 }}  
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }} 
                            >
                                <img 
                                    src={client.image} 
                                    alt={client.title} 
                                    className="w-full h-20 object-contain mb-1" 
                                />
                                <h3 className="text-base font-semibold text-white">{client.title}</h3> 
                                
                                {client.subtitle && (
                                    <p className="text-gray-400 text-sm italic mb-1">{client.subtitle}</p>
                                )}

                                {client.description && (
                                    <p className="text-gray-300 text-xs mb-2 overflow-hidden ">
                                        {client.description}
                                    </p>
                                )}
                                
                                {client.link && (
                                  <motion.a 
                                        whileHover={{
                                            scale: 1.015
                                        }}
                                        whileTap={{
                                            scale: 0.985
                                        }}
                                        style={{
                                            border, boxShadow,
                                        }}
                                        href={client.link} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50 z-20"
                                    >
                                    {client.buttonText}
                                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"/>
                                </motion.a>
                                )}
                            </motion.div>
                              </Card>
                        ))}
                    </div>
            </div>
            </div>
        </section>
    );
}