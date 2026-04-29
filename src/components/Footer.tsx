import { motion } from "framer-motion";
const Footer = () => {
  return <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-2xl font-bold text-gradient">
            Auto Animate
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              
            </a>
          </motion.div>

          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.4
        }} className="text-muted-foreground">
            © {new Date().getFullYear()} Auto Animate. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>;
};
export default Footer;