import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: '业务痛点', id: 'problems' },
    { label: '解决方案', id: 'solution' },
    { label: '客户案例', id: 'use-cases' },
    { label: '价格套餐', id: 'pricing' },
    { label: '联系我们', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="flex flex-col">
                <span className="text-gray-900 transition-colors group-hover:text-blue-600 text-sm sm:text-base">LingExpress</span>
                <span className="text-xs text-gray-500 hidden sm:block">灵思跨境专线</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="bg-orange-500 hover:bg-orange-600"
              onClick={() => scrollToSection('contact')}
            >
              获取专属方案
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="w-full mt-4 bg-orange-500 hover:bg-orange-600"
              onClick={() => scrollToSection('contact')}
            >
              获取专属方案
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}