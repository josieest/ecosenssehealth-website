import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/8b0802d0b6a39071ba887d5279730203f5255349.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = ["Problem", "Solution", "Platform", "Pricing", "Partner"];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 md:px-8">
        <a href="#hero" className="flex min-w-0 items-center gap-2.5">
          <img src={logo} alt="ecoSENSSEhealth logo" className="h-11 w-11 object-contain md:h-12 md:w-12" />
          <span className="whitespace-nowrap text-[19px] font-semibold tracking-tight text-[#0A2342] md:text-[22px]">
            eco<span className="text-[#d4183d]">SENSSE</span>health
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`} className="text-sm font-bold text-[#0A2342] transition-colors hover:text-[#d4183d]">
              {label}
            </a>
          ))}
        </nav>
        <button onClick={() => setMobileMenuOpen(v => !v)} className="rounded-lg p-2 text-[#0A2342] lg:hidden" aria-label="Toggle navigation">
          {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>} 
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="border-t border-slate-100 bg-white px-5 py-3 lg:hidden">
          {links.map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-bold text-[#0A2342] hover:bg-slate-50 hover:text-[#d4183d]">
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
