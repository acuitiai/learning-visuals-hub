import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build the Future of{" "}
            <span className="text-gradient">Learning Together</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12">
            Interested in partnerships, early access, or collaboration? We'd love to hear from
            you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open("https://forms.gle/viHLngsQck1ZXv139", "_blank")}
              className="gradient-primary hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="mr-2" size={20} />
              Join Beta List
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                (window.location.href = "mailto:javeria.hassan77@gmail.com")
              }
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="mr-2" size={20} />
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
