import { motion } from "framer-motion";
import { Brain, Clapperboard, Volume2, Palette } from "lucide-react";
import aiScriptImg from "@/assets/feature-ai-script.jpg";
import animationImg from "@/assets/feature-animation.jpg";
import voiceoverImg from "@/assets/feature-voiceover.jpg";
import brandingImg from "@/assets/feature-branding.jpg";

const features = [
  {
    icon: Brain,
    title: "AI Script Understanding",
    description: "Extracts key ideas and structures them visually.",
    image: aiScriptImg,
  },
  {
    icon: Clapperboard,
    title: "Scene & Animation Generation",
    description: "Converts text into explainable motion scenes.",
    image: animationImg,
  },
  {
    icon: Volume2,
    title: "Voiceover Synchronization",
    description: "Syncs narration perfectly with visuals.",
    image: voiceoverImg,
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Personalize visuals, colors, and tone.",
    image: brandingImg,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Makes Auto Animate <span className="text-gradient">Different</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="glass rounded-2xl p-8 hover:shadow-2xl transition-shadow">
                    <div className="w-16 h-16 mb-6 rounded-full gradient-primary flex items-center justify-center">
                      <Icon className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground">{feature.description}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-xl font-semibold">
            We combine the science of learning with the art of AI animation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
