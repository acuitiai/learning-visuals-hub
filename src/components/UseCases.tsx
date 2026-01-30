import { motion } from "framer-motion";
import { GraduationCap, Video, Briefcase, Lightbulb } from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Teachers & Educators",
    description: "Simplify complex topics with animated explainers.",
  },
  {
    icon: Video,
    title: "Online Course Creators",
    description: "Produce polished educational content, faster.",
  },
  {
    icon: Briefcase,
    title: "Corporate Trainers",
    description: "Automate training video creation for teams.",
  },
  {
    icon: Lightbulb,
    title: "EdTech Innovators",
    description: "Integrate AI-powered video generation into learning platforms.",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who It's For</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-8 text-center hover:shadow-2xl hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-xl font-semibold text-gradient">
            If you teach, train, or explain — Auto Animate is for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
