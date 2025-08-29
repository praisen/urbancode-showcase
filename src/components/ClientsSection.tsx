import { motion } from "framer-motion";
import handmadeRamaLogo from "@/assets/clients/handmade-rama.webp";
import logo1 from "@/assets/clients/logo1.png";
import mobileLogoClient from "@/assets/clients/mobile-logo.webp";
import npGoldLogo from "@/assets/clients/np-gold-logo.png";
import client1 from "@/assets/clients/client1.png";
import client2 from "@/assets/clients/client2.png";
import client3 from "@/assets/clients/client3.png";
import jobzenterLogo from "@/assets/clients/jobzenter.png";
import client4 from "@/assets/clients/client4.png";
import client5 from "@/assets/clients/client5.png";

export function ClientsSection() {
  const clients = [
    { name: "Handmade by Rama Ayyappan", logo: handmadeRamaLogo },
    { name: "Logo1 Client", logo: logo1 },
    { name: "Mobile Logo", logo: mobileLogoClient },
    { name: "NP Gold", logo: npGoldLogo },
    { name: "Client 1", logo: client1 },
    { name: "Client 2", logo: client2 },
    { name: "Client 3", logo: client3 },
    { name: "Jobzenter", logo: jobzenterLogo },
    { name: "Client 4", logo: client4 },
    { name: "Client 5", logo: client5 }
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#333333]">
            Trusted by <span className="text-[#19B69C]">Leading Companies</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            We've had the privilege of working with amazing companies across various industries
          </p>
        </motion.div>

        {/* Animated logos marquee with multiple rows for visual appeal */}
        <div className="relative overflow-hidden">
          {/* First row - moving left to right */}
          <motion.div
            className="flex space-x-12 mb-8"
            animate={{
              x: [0, -1920]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear"
              }
            }}
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 w-40 h-24 bg-white border border-[#E5E5E5] rounded-xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(25, 182, 156, 0.15)"
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 w-40 h-24 bg-white border border-[#E5E5E5] rounded-xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(25, 182, 156, 0.15)"
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Second row - moving right to left for dynamic effect */}
          <motion.div
            className="flex space-x-12"
            animate={{
              x: [-1920, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {/* Reverse order for variety */}
            {clients.slice().reverse().map((client, index) => (
              <motion.div
                key={`third-${index}`}
                className="flex-shrink-0 w-40 h-24 bg-white border border-[#E5E5E5] rounded-xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 181, 111, 0.15)"
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.slice().reverse().map((client, index) => (
              <motion.div
                key={`fourth-${index}`}
                className="flex-shrink-0 w-40 h-24 bg-white border border-[#E5E5E5] rounded-xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 181, 111, 0.15)"
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}