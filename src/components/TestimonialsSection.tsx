import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1ad?w=80&h=80&fit=crop&crop=face",
    content: "Urbancode transformed our vision into a stunning reality. Their attention to detail and technical expertise exceeded all expectations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder of EcoMarket",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    content: "Working with Urbancode was seamless. They delivered our e-commerce platform ahead of schedule with exceptional quality.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "CTO at HealthPlus",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    content: "The team's innovative approach and problem-solving skills helped us create a healthcare app that truly makes a difference.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Director at FinanceFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    content: "Outstanding work on our fintech platform. The security implementation and user experience are absolutely top-notch.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager at EduTech",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&h=80&fit=crop&crop=face",
    content: "Urbancode's expertise in creating interactive learning platforms helped us revolutionize online education.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Founder of PropertyHub",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    content: "Their real estate platform solution increased our client engagement by 300%. Absolutely phenomenal results!",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
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
            <span className="text-sm font-semibold tracking-wide uppercase">Testimonials</span>
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15 
              }}
              className="glass-card p-8 rounded-2xl hover-lift group relative"
            >
              <Quote className="absolute top-4 right-4 h-6 w-6 text-primary/30" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-primary fill-current"
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Five Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <div className="text-sm text-muted-foreground">Repeat Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}