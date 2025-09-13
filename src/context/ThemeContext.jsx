import { createContext, useContext } from 'react';
import { useMotionTemplate, useMotionValue, animate, easeInOut } from 'framer-motion';
import { useEffect } from 'react';

const ThemeContext = createContext(null);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]; 
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 170% at 50% 50%, #020617 25%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    const value = { color, backgroundImage, border, boxShadow };

    useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    })
  });

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};