import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import urbancodeLogoSrc from "@/assets/urbancode-logo.png";

const LetterAnimation = ({ letter, index }: { letter: string; index: number }) => {
  return (
    <motion.span
      className="inline-block"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-col space-y-3">
              <img 
                src={urbancodeLogoSrc} 
                alt="Urbancode Logo" 
                className="h-12 w-auto"
              />
              <div className="text-3xl font-bold tracking-wider">
                {"urbancode".split("").map((letter, index) => (
                  <LetterAnimation key={index} letter={letter} index={index} />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground">
              Crafting exceptional web experiences with cutting-edge technology and innovative design.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>E-commerce</li>
              <li>UI/UX Design</li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4 text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border pt-8 mt-8 text-center text-muted-foreground"
        >
          <p>&copy; 2024 Urbancode. All rights reserved. Built with ❤️ and cutting-edge technology.</p>
        </motion.div>
      </div>
    </footer>
  );
}