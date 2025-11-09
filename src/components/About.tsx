import { motion } from "framer-motion";
import { Users } from "lucide-react";

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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Profile Icon Column */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl gradient-primary flex items-center justify-center shadow-2xl">
                  <Users className="text-primary-foreground" size={96} />
                </div>
              </div>

              {/* Text Content Column */}
              <div className="flex-1 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Auto Animate is founded by{" "}
                  <span className="text-foreground font-semibold">Javeria Hassan</span> and{" "}
                  <span className="text-foreground font-semibold">Jaweria Sohail</span> — two
                  engineers passionate about AI and education.
                </p>

                <p>
                  <span className="text-foreground font-semibold">Javeria</span> is an AI/ML
                  Engineer with 4+ years of experience in generative AI, LLM agents, and
                  educational automation, having worked with UK-based firms.
                </p>

                <p>
                  <span className="text-foreground font-semibold">Jaweria</span> is a Software
                  Consultant at a US-based company, specializing in scalable systems and product
                  strategy.
                </p>

                <p className="text-foreground text-xl font-semibold">
                  Together, they're reimagining how knowledge is shared — making learning visual,
                  explainable, and accessible for everyone.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
