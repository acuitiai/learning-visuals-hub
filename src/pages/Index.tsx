import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import NeonDivider from "@/components/NeonDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <ScrollProgress />
      <Header />
      <Hero />
      <NeonDivider />
      <Demo />
      <NeonDivider />
      <HowItWorks />
      <NeonDivider />
      <UseCases />
      <NeonDivider />
      <Features />
      <NeonDivider />
      <Pricing />
      <NeonDivider />
      <About />
      <NeonDivider />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
