import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export const Card = ({children}) => {
    const {border, boxShadow} = useTheme();

    return (
        <motion.div
            style={{border, boxShadow}}
            className="rounded-xl p-20"
        >
            {children}
        </motion.div>
    );
}