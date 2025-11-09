import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Lightbulb, Brain, GraduationCap, Cpu, Network } from "lucide-react";
import heroTechBg from "@/assets/hero-tech-bg.jpg";
const Hero = () => {
  const scrollToDemo = () => {
    const element = document.querySelector("#demo");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const floatingIcons = [{
    Icon: BookOpen,
    delay: 0,
    duration: 20,
    x: "10%",
    y: "20%"
  }, {
    Icon: Lightbulb,
    delay: 2,
    duration: 25,
    x: "80%",
    y: "15%"
  }, {
    Icon: Brain,
    delay: 4,
    duration: 22,
    x: "15%",
    y: "70%"
  }, {
    Icon: GraduationCap,
    delay: 1,
    duration: 28,
    x: "85%",
    y: "65%"
  }, {
    Icon: Cpu,
    delay: 3,
    duration: 24,
    x: "25%",
    y: "40%"
  }, {
    Icon: Network,
    delay: 5,
    duration: 26,
    x: "75%",
    y: "50%"
  }, {
    Icon: BookOpen,
    delay: 6,
    duration: 23,
    x: "50%",
    y: "80%"
  }, {
    Icon: Brain,
    delay: 7,
    duration: 27,
    x: "60%",
    y: "25%"
  }];
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <motion.div className="absolute inset-0 z-0" initial={{
      scale: 1.1,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      duration: 2,
      ease: "easeOut"
    }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroTechBg})`
      }} />
        {/* Overlay for theme blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background" />
      </motion.div>

      {/* Animated Background Icons */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {floatingIcons.map((item, index) => <motion.div key={index} className="absolute opacity-10" style={{
        left: item.x,
        top: item.y
      }} animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        rotate: [0, 10, -10, 0]
      }} transition={{
        duration: item.duration,
        delay: item.delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
            <item.Icon size={48} className="text-primary" />
          </motion.div>)}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="mb-6">
            
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turn Lessons into{" "}
            <span className="text-gradient">Animated Explainers</span> — Instantly.
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Auto Animate helps educators, creators, and teams convert any lesson script into
            an AI-generated, animated explainer video — saving hours of editing while making
            learning more visual and engaging.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.open("https://forms.gle/viHLngsQck1ZXv139", "_blank")} className="gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6">
              Join Beta
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToDemo} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6">
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 1
        }} className="mt-16 text-sm text-muted-foreground">
            Powered by generative AI • Built for educators
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity
      }} className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;