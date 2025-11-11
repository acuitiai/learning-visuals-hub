import { motion } from "framer-motion";

const Footer = () => {
  return <footer className="py-12 border-t border-primary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-2xl font-bold font-heading text-gradient">
            Auto Animate
          </motion.div>

          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="text-muted-foreground">
            © 2025 Auto Animate. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>;
};

export default Footer;