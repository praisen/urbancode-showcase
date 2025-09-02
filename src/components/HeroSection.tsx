import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Globe } from "lucide-react";
import heroWebDev from "@/assets/hero-web-dev.jpg";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroWebDev}
          alt="Professional Web Development"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay on left side for content visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-end min-h-screen">
          {/* Left content with enhanced dark overlay background */}
          <div className="w-full lg:w-1/2 space-y-8 text-white bg-black/40 backdrop-blur-md p-8 lg:p-12 rounded-r-2xl border border-white/10 ml-[-1.5rem] mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2 text-primary">
                <Zap className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-wide uppercase">
                  Premium Web Development
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Building Digital
                <span className="block text-primary">Excellence</span>
                <span className="block">with Innovation</span>
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Crafting cutting-edge web solutions that transform businesses and create 
                exceptional digital experiences for users worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#333333] px-8 py-6 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center space-x-8 pt-8"
            >
              <div className="flex items-center space-x-2">
                <Code className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-white/80">Projects</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm text-white/80">Clients</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-white/80">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}