import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, BarChart3, FileText, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section ref={ref} className="py-24 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 text-primary mb-4">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-sm font-semibold tracking-wide uppercase">Experience Creative Freedom</span>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Tailored Corporate Solutions For Your
            <span className="block text-primary">Business Needs.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Urbancode empowers your business with dynamic, user-centric software solutions tailored to your 
            unique needs. Enhance customer engagement, streamline digital communication, and drive growth 
            with our innovative and comprehensive software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Card className="h-full glass-card border-card-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Join Our Team: Recruiting Skilled Business Executives for Exciting, Rewarding Opportunities
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary-glow text-primary-foreground rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}