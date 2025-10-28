import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export const Card = ({children}) => {
    const {border, boxShadow} = useTheme();

    return (
        <motion.div
            style={{border, boxShadow}}
            className="rounded-xl p-4 sm:p-6 md:p-8 flex flex-col gap-4"
        >
            {children}
        </motion.div>
    );
}