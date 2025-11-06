import { useEffect } from "react";
import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { Solution } from "./components/Solution";
import { Comparison } from "./components/Comparison";
import { UseCases } from "./components/UseCases";
import { Pricing } from "./components/Pricing";
import { Deployment } from "./components/Deployment";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.title = "LingExpress - 灵思跨境专线 | 企业级合规跨境网络解决方案";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <PainPoints />
      <Solution />
      <Comparison />
      <UseCases />
      <Pricing />
      <Deployment />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
