import { staticClients } from '../../data/staticClients';
import { useLanguage } from '../../context/LanguageContext';
import ClientEntry from '../ClientEntry';

export default function Clients() {
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
        <section id="clients" className="min-h-screen border-b-[1px] border-black mx-4 py-20">   
            <div className="max-w-6xl mx-auto px-4">
                <div className="border-y-2 border-black py-2 mb-12 flex justify-between items-center px-2">
                    <span className="font-mono text-xs uppercase font-bold tracking-widest">Economic Report</span>
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter italic">
                        {clientsContent.title}
                    </h1>
                    <span className="font-mono text-xs uppercase font-bold tracking-widest">Est. 2026</span>
                </div>

                <div className="grid grid-cols-1 gap-0 border-[0.5px] border-black">
                    {combinedClients.map((client, index) => (
                        <ClientEntry key={index} client={client} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
}