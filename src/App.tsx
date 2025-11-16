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
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.title = "LingExpress - 灵思跨境专线 | 解决跨境电商网络与运营问题";
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
      >
        跳转到主要内容
      </a>
      <header>
        <Navigation />
      </header>
      <main id="main-content" className="flex-1">
        <Hero />
        <PainPoints />
        <Solution />
        <Comparison />
        <UseCases />
        <Pricing />
        <Deployment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}