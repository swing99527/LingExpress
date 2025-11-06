import { useState, useEffect, type MouseEvent } from "react";
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

  const handleAnchorNavigation = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const element = typeof document !== 'undefined' ? document.getElementById(id) : null;
    if (element) {
      event.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', `#${id}`);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: '业务痛点', id: 'pain-points' },
    { label: '解决方案', id: 'solution' },
    { label: '为何选择我们', id: 'comparison' },
    { label: '应用场景', id: 'use-cases' },
    { label: '价格套餐', id: 'pricing' },
    { label: '联系我们', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a
              href="#hero"
              className="flex items-center gap-3 group"
              onClick={(event) => handleAnchorNavigation(event, 'hero')}
              aria-label="返回页面顶部"
            >
              <Logo className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-gray-900 transition-colors group-hover:text-blue-600">LingExpress</span>
                <span className="text-xs text-gray-500">灵思跨境专线</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleAnchorNavigation(event, item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-orange-500 hover:bg-orange-600" asChild>
              <a href="#contact" onClick={(event) => handleAnchorNavigation(event, 'contact')}>
                获取专属方案
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden mt-4 pb-4 border-t pt-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleAnchorNavigation(event, item.id)}
                className="block w-full py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600" asChild>
              <a href="#contact" onClick={(event) => handleAnchorNavigation(event, 'contact')}>
                获取专属方案
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
