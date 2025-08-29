import { motion } from "framer-motion";
import urbancodeLogoSrc from "@/assets/urbancode-logo.png";

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <img 
              src={urbancodeLogoSrc} 
              alt="Urbancode Logo" 
              className="h-10 w-auto"
            />
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {["home", "projects", "about", "clients", "testimonials", "contact"].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => scrollToSection(item)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 capitalize font-medium"
              >
                {item}
              </motion.button>
            ))}
          </div>

        </div>
      </div>
    </motion.nav>
  );
}