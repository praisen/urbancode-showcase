import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Zap, Target } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "5+" },
  { icon: Users, label: "Happy Clients", value: "25+" },
  { icon: Zap, label: "Projects Completed", value: "50+" },
  { icon: Target, label: "Success Rate", value: "98%" }
];

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "We leverage cutting-edge technologies to create solutions that push boundaries."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your vision drives our mission. We collaborate closely to exceed expectations."
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and attention to detail ensure flawless user experiences."
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "We measure success by your growth and the impact we create together."
  }
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-semibold tracking-wide uppercase">About Us</span>
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting Digital <span className="text-gradient">Excellence</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Urbancode, we're passionate about transforming ideas into exceptional web experiences. 
            Our team combines creativity with technical expertise to deliver solutions that drive business growth.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <stat.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover-lift group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}