import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 800);
                    return 100;
                }
                return prev + 5; 
            });
        }, 80); 

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center papper-ink-bg justify-center text-black">
            <div className="max-w-md w-full px-8 text-center">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4 opacity-60">
                    Preparing 2026 Edition
                </h2>
                
                <h1 className="text-4xl md:text-5xl font-bold uppercase italic tracking-tighter mb-8">
                    Howard Garcia
                </h1>

                <div className="relative w-full h-[2px] bg-black/10 overflow-hidden">
                    <div 
                        className="absolute h-full bg-black transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="mt-4 flex justify-between font-mono text-[10px] uppercase font-bold">
                    <span>Press Status</span>
                    <span>{progress}%</span>
                </div>
            </div>
            
            <div className="absolute bottom-10 font-mono text-[9px] uppercase tracking-widest opacity-40">
                Rosarito — Digital Publication
            </div>
        </div>
    );
};