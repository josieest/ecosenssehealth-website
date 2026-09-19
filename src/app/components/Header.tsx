import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../../assets/08c6febabef0a4cdbffb121033a6556c9b7694cb.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = ["Problem", "Solution", "Platform", "Pricing", "Partner"];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-2xl shadow-[0_1px_18px_rgba(10,35,66,0.05)]">
      <div className="mx-auto flex h-[82px] max-w-[1240px] items-center justify-between px-5 md:px-8 lg:px-10">
        <a href="#hero" className="group flex min-w-0 translate-y-[9px] items-center gap-2.5">
          <img src={logo} alt="ecoSENSSEhealth logo" className="h-[54px] w-[54px] shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.03] md:h-[58px] md:w-[58px]" />
          <span className="whitespace-nowrap translate-y-[2px] text-[20px] font-semibold leading-none tracking-[-0.035em] text-[#0A2342] md:text-[24px]">
            eco<span className="text-[#d4183d]">SENSSE</span>health
          </span>
        </a>
        <div className="hidden translate-y-[8px] items-center gap-8 lg:flex">
          <nav className="flex items-center gap-7 xl:gap-8">
            {links.map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`} className="relative py-2.5 text-[17px] font-bold tracking-[0.005em] text-[#0A2342] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0D7377] after:transition-all hover:text-[#0A2342] hover:after:w-full">
                {label}
              </a>
            ))}
          </nav>
          <a href="#partner" className="inline-flex items-center gap-2 rounded-full bg-[#7C8793] px-5 py-2.5 text-[15px] font-extrabold tracking-wide text-white shadow-[0_8px_22px_rgba(10,35,66,.16)] transition hover:-translate-y-0.5 hover:bg-[#66717D]">
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
            <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="block rounded-xl px-3 py-3.5 text-[16px] font-bold text-[#0A2342] hover:bg-slate-50 hover:text-[#0D7377]">
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
