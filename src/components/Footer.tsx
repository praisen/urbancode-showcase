import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone, ArrowUpRight } from "lucide-react";
import urbancodeLogoSrc from "@/assets/urbancode-logo.png";
import footerBgSrc from "@/assets/footer-bg.jpg";

const LetterAnimation = ({ letter, index }: { letter: string; index: number }) => {
  return (
    <motion.span
      className="inline-block"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ 
        y: [50, -10, 0], 
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
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
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

export function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={footerBgSrc} 
          alt="Footer Background" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <motion.div
                className="flex flex-col space-y-3"
                initial={{ y: 0 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
              >
                <img 
                  src={urbancodeLogoSrc} 
                  alt="Urbancode Logo" 
                  className="h-12 w-auto footer-logo"
                />
              </motion.div>
            </motion.div>

            {/* Useful Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-6 text-gray-400 text-sm uppercase tracking-wider">Useful Pages</h4>
              <ul className="space-y-3 text-white/80">
                <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </motion.div>

            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold">Our Services</h4>
              <ul className="space-y-3 text-white/80">
                <li><a href="#" className="hover:text-primary transition-colors">Strategic Planning</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Financial Consulting</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Operational Optimization</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">HR Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Marketing Strategy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Technology Integration</a></li>
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Contact Info */}
              <div className="space-y-3">
                <p className="text-white/80 text-sm">Have any questions?</p>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-white font-medium">Free: +1 917 265 8444</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-white/10 border border-white/20 rounded-md flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all">
                  <Github className="h-4 w-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 border border-white/20 rounded-md flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all">
                  <Linkedin className="h-4 w-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 border border-white/20 rounded-md flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all">
                  <Twitter className="h-4 w-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 border border-white/20 rounded-md flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all">
                  <Mail className="h-4 w-4 text-white" />
                </a>
              </div>

              {/* Join Us CTA */}
              <div className="pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors group"
                >
                  <span className="font-medium">Join Us to shape the future</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 border-t border-white/10 py-6"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              ©2025 <span className="text-white">urbancode</span>. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Partner Registration</a>
              <a href="#" className="hover:text-white transition-colors">Terms Of Service</a>
              <a href="#" className="hover:text-white transition-colors">Legal Info</a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
