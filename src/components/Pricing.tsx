import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Great for educators exploring Auto Animate",
    features: ["1 video per month", "Basic animations", "Community support", "720p export"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$25",
    period: "/month",
    description: "Unlimited videos, branding, AI voiceovers",
    features: [
      "Unlimited videos",
      "Custom branding",
      "AI voiceovers",
      "1080p export",
      "Priority support",
      "Advanced animations",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "plan",
    description: "LMS integration, multi-user access, dedicated support",
    features: [
      "Everything in Pro",
      "LMS integration",
      "Multi-user access",
      "Dedicated support",
      "Custom features",
      "SLA guarantee",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple Pricing, <span className="text-gradient">Big Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start for free, scale when you're ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`glass rounded-2xl p-8 ${
                plan.highlight
                  ? "border-2 border-primary shadow-2xl shadow-primary/20"
                  : ""
              } relative overflow-hidden`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                  Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => window.open("https://forms.gle/viHLngsQck1ZXv139", "_blank")}
                className={
                  plan.highlight
                    ? "w-full gradient-primary hover:opacity-90"
                    : "w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
                variant={plan.highlight ? "default" : "outline"}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Join Beta to unlock early-access pricing.
          </p>
          <Button
            size="lg"
            onClick={() => window.open("https://forms.gle/viHLngsQck1ZXv139", "_blank")}
            className="gradient-primary hover:opacity-90"
          >
            Join Beta Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
