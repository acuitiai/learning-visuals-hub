import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
const Demo = () => {
  return <section id="demo" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See Auto Animate in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how simple it is to bring your ideas to life with Auto Animate.
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
            <video src="https://drive.google.com/uc?export=download&id=1FZDPFgpKnWfNg9rK_TMYezMwV9hoZ_av" className="w-full h-auto" controls autoPlay muted loop playsInline />
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.9
        }} className="text-center mt-8">
            
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Demo;