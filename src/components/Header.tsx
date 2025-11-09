import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Solution", href: "#features" },
    { label: "Features", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {/* Stylized A Logo */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#E9B7D1", stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: "#9b87f5", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#6E59A5", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              {/* Outer chevron */}
              <path 
                d="M 20 8 L 32 28 L 28 28 L 20 16 L 12 28 L 8 28 Z" 
                fill="url(#logoGradient)"
              />
              {/* Inner chevron */}
              <path 
                d="M 20 16 L 26 26 L 14 26 Z" 
                fill="url(#logoGradient)"
                opacity="0.6"
              />
            </svg>
            <span className="text-2xl font-bold">
              <span className="text-gradient">auto</span>{" "}
              <span className="text-gradient italic font-light">animate</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                onClick={() => window.open("https://forms.gle/viHLngsQck1ZXv139", "_blank")}
                className="gradient-primary hover:opacity-90 transition-opacity"
              >
                Join Beta
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 flex flex-col gap-4"
          >
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.open("https://forms.gle/viHLngsQck1ZXv139", "_blank")}
              className="gradient-primary hover:opacity-90 transition-opacity w-full"
            >
              Join Beta
            </Button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
