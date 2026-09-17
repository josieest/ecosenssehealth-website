import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "figma:asset/8b0802d0b6a39071ba887d5279730203f5255349.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = ["Problem", "Solution", "Platform", "Pricing", "Partner"];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-2xl shadow-[0_1px_18px_rgba(10,35,66,0.05)]">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 md:px-8 lg:px-10">
        <a href="#hero" className="group flex min-w-0 items-center gap-3">
          <img src={logo} alt="ecoSENSSEhealth logo" className="h-[52px] w-[52px] object-contain transition-transform duration-300 group-hover:scale-[1.03] md:h-[56px] md:w-[56px]" />
          <span className="whitespace-nowrap text-[19px] font-semibold tracking-[-0.035em] text-[#0A2342] md:text-[23px]">
            eco<span className="text-[#d4183d]">SENSSE</span>health
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          <nav className="flex items-center gap-6">
            {links.map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`} className="relative py-2 text-[12px] font-semibold tracking-[0.02em] text-[#0A2342]/75 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0D7377] after:transition-all hover:text-[#0A2342] hover:after:w-full">
                {label}
              </a>
            ))}
          </nav>
          <a href="#partner" className="inline-flex items-center gap-2 rounded-full bg-[#0A2342] px-5 py-2.5 text-[12px] font-extrabold tracking-wide text-white shadow-[0_8px_22px_rgba(10,35,66,.16)] transition hover:-translate-y-0.5 hover:bg-[#0D7377]">
            Founding Pilot <ArrowUpRight size={14}/>
          </a>
        </div>
        <button onClick={() => setMobileMenuOpen(v => !v)} className="rounded-xl border border-slate-200 bg-white p-2.5 text-[#0A2342] shadow-sm lg:hidden" aria-label="Toggle navigation">
          {mobileMenuOpen ? <X size={22}/> : <Menu size={22}/>} 
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="border-t border-slate-100 bg-white/98 px-5 py-4 shadow-xl lg:hidden">
          {links.map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-bold text-[#0A2342] hover:bg-slate-50 hover:text-[#0D7377]">
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
