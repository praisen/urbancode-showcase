import { motion } from "framer-motion";

interface LogoAnimationProps {
  children: React.ReactNode;
}

const LogoAnimation: React.FC<LogoAnimationProps> = ({ children }) => {
  return (
    <motion.div
      className="inline-block"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ 
        y: [50, -10, 0], 
        opacity: 1,
        transition: {
          duration: 0.6,
          times: [0, 0.6, 1],
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ 
        y: [-5, -15, -5],
        transition: {
          duration: 0.4,
          times: [0, 0.5, 1],
          ease: "easeInOut"
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default LogoAnimation;
