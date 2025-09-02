import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import { Trophy, BarChart3, FileText, Globe } from "lucide-react";
import sectionGroup from "../assets/clients/section-group.png";
import sectionLine from "../assets/clients/section-f5-line.png";
import cardOverlay1 from "../assets/clients/card-overlay-plus-overlay-blur-mask-group1.png";
import cardOverlay2 from "../assets/clients/card-overlay-plus-overlay-blur-mask-group2.png";
import cardOverlay3 from "../assets/clients/card-overlay-plus-overlay-blur-mask-group3.png";

const services = [
  {
    icon: Trophy,
    title: "Customer Focus",
    description: "Our customer focus delivers personalized service, ensuring satisfaction and fostering long-term relationships."
  },
  {
    icon: BarChart3,
    title: "Data Analytics", 
    description: "Data analytics drives informed decisions, optimizing performance and achieving measurable business success."
  },
  {
    icon: FileText,
    title: "Market Analysis",
    description: "Market analysis identifies opportunities, informs strategy, and drives business growth and success."
  },
  {
    icon: Globe,
    title: "Sustainable Practice",
    description: "Our commitment to sustainable practices ensures environmental responsibility and business resilience."
  }
];

const cardOverlays = [cardOverlay1, cardOverlay2, cardOverlay3];

export function ServicesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={ref} className="py-24 bg-[#3A3D40] relative overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <img
          src={sectionGroup}
          alt="Services Background"
          className="w-full h-full object-cover"
        />
        <img
            src={sectionLine}
            alt="wavy line"
            className="absolute top-1/2 left-0 w-full h-auto object-contain -translate-y-1/2"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const shouldRiseUp = index === 1 || index === 3; // Cards 2 and 4
            const shouldMoveDown = index === 0 || index === 2; // Cards 1 and 3
            
            let targetY = 0;
            if (inView && scrollDirection === 'down') {
              if (shouldRiseUp) {
                targetY = -50; // Cards 2 and 4 rise up by -50px
              } else if (shouldMoveDown) {
                targetY = 50; // Cards 1 and 3 move down by 50px
              }
            } else {
              targetY = 0; // All cards at same height when scrolling up or not in view
            }

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 80 }}
                animate={{ 
                  opacity: 1, 
                  y: targetY
                }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: shouldRiseUp ? -60 : (shouldMoveDown ? 60 : -10), // Adjust hover based on their active position
                  transition: { duration: 0.3 }
                }}
                className="h-full"
              >
                <div className="bg-[#434649]/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 h-full min-h-[280px] transition-all duration-500 hover:border-primary/40 hover:bg-[#202020] group flex flex-col relative overflow-hidden">
                  <img 
                    src={cardOverlays[index % cardOverlays.length]}
                    alt="Card overlay"
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none mix-blend-overlay opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="mb-6 relative z-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-primary stroke-[1.5]" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-white/70 leading-relaxed flex-1 relative z-10">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-24 max-w-3xl mx-auto">
          <p className="text-lg text-white/70">
            Join Our Team: Recruiting Skilled Business Executives for Exciting, Rewarding Opportunities
          </p>
        </div>
      </div>
    </section>
  );
}