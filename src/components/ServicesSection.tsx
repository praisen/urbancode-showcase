import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, BarChart3, FileText, Globe } from "lucide-react";

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

export function ServicesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      {/* Dark background with subtle decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEvenIndex = index % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: isEvenIndex ? 100 : -100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                className={`flex-1 ${isEvenIndex ? 'lg:mt-16' : 'lg:mt-0'}`}
              >
                <div className="bg-[#1c1c1c] border border-primary/20 rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/40 hover:bg-[#202020] group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-primary stroke-[1.5]" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}