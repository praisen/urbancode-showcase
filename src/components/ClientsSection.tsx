import { motion } from "framer-motion";

export function ClientsSection() {
  // Sample client logos - in real app, these would be actual client logos
  const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLab", logo: "IL" },
    { name: "DataFlow", logo: "DF" },
    { name: "CloudSync", logo: "CS" },
    { name: "WebMaster", logo: "WM" },
    { name: "DigitalEdge", logo: "DE" },
    { name: "CodeCraft", logo: "CC" },
    { name: "ByteForce", logo: "BF" },
    { name: "NetSolutions", logo: "NS" },
    { name: "AppVision", logo: "AV" },
    { name: "DevStudio", logo: "DS" },
    { name: "TechFlow", logo: "TF" }
  ];

  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="text-gradient">Leading Companies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've had the privilege of working with amazing companies across various industries
          </p>
        </motion.div>

        {/* Animated logos marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12"
            animate={{
              x: [0, -1920]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-20 bg-card border border-border rounded-xl flex items-center justify-center hover-lift"
              >
                <div className="text-2xl font-bold text-primary">
                  {client.logo}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-20 bg-card border border-border rounded-xl flex items-center justify-center hover-lift"
              >
                <div className="text-2xl font-bold text-primary">
                  {client.logo}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}