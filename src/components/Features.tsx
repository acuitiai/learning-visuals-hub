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
    <section id="features" className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            What Makes Auto Animate <span className="text-gradient">Different</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto relative">
          {/* Connection lines - hidden on mobile */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.6 }} />
              </linearGradient>
            </defs>
            {/* Lines connecting features in a flow */}
            <path d="M 300 150 Q 450 200 600 150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
            <path d="M 600 350 Q 450 400 300 350" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
            <path d="M 300 550 Q 450 600 600 550" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative" style={{ zIndex: 1 }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center gap-6 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Circular Image Container */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Icon badge */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg border-2 border-background">
                      <Icon className="text-primary-foreground" size={20} />
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <div className={`flex-1 ${isLeft ? "text-left" : "lg:text-right"}`}>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
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
