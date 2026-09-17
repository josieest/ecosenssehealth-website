import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/8b0802d0b6a39071ba887d5279730203f5255349.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [onDarkSection, setOnDarkSection] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
      
      // If we're at the very top, header is over itself (light background)
      if (window.scrollY < 100) {
        setOnDarkSection(false);
        return;
      }
      
      // Dynamically detect if background is dark or light
      // Check multiple points across the header to detect boxes
      const checkPoint = 80; // Y position to check
      
      // Check multiple X positions to catch boxes
      const xPositions = [
        window.innerWidth * 0.2,
        window.innerWidth * 0.4,
        window.innerWidth * 0.5,
        window.innerWidth * 0.6,
        window.innerWidth * 0.8
      ];
      
      // Get the header element
      const header = document.querySelector('header');
      if (header) {
        (header as HTMLElement).style.pointerEvents = 'none';
      }
      
      let darkCount = 0;
      let totalChecks = 0;
      
      // Check each position
      xPositions.forEach(x => {
        const element = document.elementFromPoint(x, checkPoint);
        
        if (element) {
          // Get the background color of the element or its parents
          let bgColor = '';
          let currentElement: HTMLElement | null = element as HTMLElement;
          
          // Check up to 5 parent levels for background color
          let depth = 0;
          while (currentElement && !bgColor && depth < 5) {
            const style = window.getComputedStyle(currentElement);
            const bg = style.backgroundColor;
            
            // Check if background is not transparent
            if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
              bgColor = bg;
              break;
            }
            currentElement = currentElement.parentElement;
            depth++;
          }
          
          // Calculate luminance to determine if background is dark
          if (bgColor) {
            const rgb = bgColor.match(/\d+/g);
            if (rgb && rgb.length >= 3) {
              const r = parseInt(rgb[0]) / 255;
              const g = parseInt(rgb[1]) / 255;
              const b = parseInt(rgb[2]) / 255;
              
              // Calculate relative luminance
              const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
              
              totalChecks++;
              if (luminance < 0.5) {
                darkCount++;
              }
            }
          }
        }
      });
      
      if (header) {
        (header as HTMLElement).style.pointerEvents = 'auto';
      }
      
      // If majority of points are dark, consider it a dark section
      if (totalChecks > 0) {
        setOnDarkSection(darkCount / totalChecks > 0.5);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <header className={`w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${scrolled ? "h-16" : "h-20 md:h-24"}`}>
        <div className={`flex items-center justify-between px-4 md:px-2 pt-[75px] transition-all duration-300 ${scrolled ? "h-16" : "h-20 md:h-24"}`}>
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="flex items-center space-x-2 pt-[3px]">
              <img
                src={logo}
                alt="ecosenssehealth logo"
                className={`transition-all duration-300 ${scrolled ? "h-12 w-12 md:h-16 md:w-16" : "h-16 w-16 md:h-24 md:w-24"}`}
              />
              <span
                className={`font-semibold transition-all duration-300 ${scrolled ? "text-xl md:text-2xl" : "text-2xl md:text-4xl"} -mt-5 ${onDarkSection ? "text-white" : "text-[#0A2342]"}`}
              >
                eco<span style={{ color: '#d4183d' }}>SENSSE</span>health
              </span>
            </div>
            <nav
              className="hidden lg:flex items-center space-x-6 xl:space-x-9 xl:ml-16 ml-[10px]"
            >
              <a href="#problem" className={`text-base xl:text-lg font-bold hover:text-[#d4183d] transition-colors ${onDarkSection ? "text-white" : "text-[#0A2342]"}`}>
                Problem
              </a>
              <a href="#solution" className={`text-base xl:text-lg font-bold hover:text-[#d4183d] transition-colors ${onDarkSection ? "text-white" : "text-[#0A2342]"}`}>
                Solution
              </a>
              <a href="#platform" className={`text-base xl:text-lg font-bold hover:text-[#d4183d] transition-colors ${onDarkSection ? "text-white" : "text-[#0A2342]"}`}>
                Platform
              </a>
              <a href="#pricing" className={`text-base xl:text-lg font-bold hover:text-[#d4183d] transition-colors ${onDarkSection ? "text-white" : "text-[#0A2342]"}`}>
                Pricing
              </a>
              <a href="#partner" className={`text-base xl:text-lg font-bold hover:text-[#d4183d] transition-colors ${onDarkSection ? "text-white" : "text-[#0A2342]"}`}>
                Partner
              </a>
            </nav>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0A2342] hover:text-[#d4183d] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden bg-background/98 backdrop-blur border-t border-gray-200">
            <div className="flex flex-col space-y-1 px-4 py-4">
              <a 
                href="#problem" 
                className="text-base font-bold text-[#0A2342] hover:text-[#d4183d] transition-colors py-3 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Problem
              </a>
              <a 
                href="#solution" 
                className="text-base font-bold text-[#0A2342] hover:text-[#d4183d] transition-colors py-3 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solution
              </a>
              <a 
                href="#platform" 
                className="text-base font-bold text-[#0A2342] hover:text-[#d4183d] transition-colors py-3 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Platform
              </a>
              <a 
                href="#pricing" 
                className="text-base font-bold text-[#0A2342] hover:text-[#d4183d] transition-colors py-3 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#partner" 
                className="text-base font-bold text-[#0A2342] hover:text-[#d4183d] transition-colors py-3 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner
              </a>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}