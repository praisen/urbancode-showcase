import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              Contact Us
            </span>
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're here to help bring your vision to life. Whether you have a
                specific project in mind or just want to explore possibilities,
                we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">
                    hello@urbancode.com
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* <div className="pt-8">
              <h4 className="font-bold mb-4 text-foreground">
                Why Choose Urbancode?
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Expert team with 5+ years experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Custom solutions tailored to your needs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>24/7 support and maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Competitive pricing and fast delivery</span>
                </li>
              </ul>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl shadow-2xl shadow-black/20"
            style={{ backgroundColor: "#F4FBF9" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Name *
                  </label>
                  <Input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
  className="bg-white border border-border focus:border-primary focus:ring-2 focus:ring-primary/50"
  placeholder="Your full name"
/>

                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white border border-border focus:border-primary focus:ring-2 focus:ring-primary/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Subject *
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white border border-border focus:border-primary focus:ring-2 focus:ring-primary/50"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white border border-border focus:border-primary focus:ring-2 focus:ring-primary/50"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground py-6 text-lg font-semibold rounded-xl glow-button hover:scale-105 transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
