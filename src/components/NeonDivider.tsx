import { motion } from "framer-motion";

const NeonDivider = () => {
  return (
    <div className="w-full h-px my-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-30" />
      <motion.div
        className="absolute inset-0 bg-gradient-primary"
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{ height: "2px" }}
      />
    </div>
  );
};

export default NeonDivider;
