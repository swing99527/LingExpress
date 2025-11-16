import { useEffect } from "react";
import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { Solution } from "./components/Solution";
import { UseCases } from "./components/UseCases";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.title = "LingExpress - 灵思跨境专线 | 解决跨境电商网络与运营问题";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <PainPoints />
      <Solution />
      <UseCases />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}