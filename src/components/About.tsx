import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="text-gradient">Founders</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Founder 1 - Javeria Hassan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full gradient-primary flex items-center justify-center shadow-2xl mb-6 border-4 border-primary/20">
                <User className="text-primary-foreground" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Javeria Hassan</h3>
              <p className="text-accent font-semibold mb-4">Co-Founder & AI/ML Engineer</p>
              <p className="text-muted-foreground leading-relaxed">
                AI/ML Engineer with 4+ years of experience in generative AI, LLM agents, and
                educational automation, having worked with UK-based firms. Passionate about
                leveraging AI to transform how we teach and learn.
              </p>
            </div>
          </motion.div>

          {/* Founder 2 - Jaweria Sohail */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full gradient-primary flex items-center justify-center shadow-2xl mb-6 border-4 border-primary/20">
                <User className="text-primary-foreground" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Jaweria Sohail</h3>
              <p className="text-accent font-semibold mb-4">Co-Founder & Software Consultant</p>
              <p className="text-muted-foreground leading-relaxed">
                Software Consultant at a US-based company, specializing in scalable systems and
                product strategy. Dedicated to building innovative solutions that make education
                more accessible and engaging.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-xl font-semibold">
            Together, they're reimagining how knowledge is shared — making learning visual,
            explainable, and accessible for everyone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
