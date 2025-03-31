import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            setScrollPercentage(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 h-2 z-50 rounded-full shadow-lg"
            style={{
                width: `${scrollPercentage}%`,
                background: "linear-gradient(90deg,rgb(0, 13, 255),rgb(4, 0, 254))",
                boxShadow: "0px 0px 5px rgba(22, 30, 254, 0.7)",
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${scrollPercentage}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
        />
    );
};

export default ProgressBar;
