import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import heroImage from "../../assets/breaking-the-glass-case.png";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#07192f] text-white">
      <div className="absolute inset-0 opacity-60" style={{backgroundImage:'linear-gradient(rgba(20,192,198,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(20,192,198,.08) 1px,transparent 1px)',backgroundSize:'52px 52px'}} />
      <div className="absolute -left-40 top-12 h-[520px] w-[520px] rounded-full bg-[#0D7377]/20 blur-[110px]" />
      <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[#164f83]/25 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-[1240px] items-center gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.02fr_.98fr] lg:px-10 lg:py-16">
        <div className="max-w-[650px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#14C0C6]/25 bg-[#14C0C6]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.20em] text-[#5ee5e8]">
            <Sparkles size={14}/> Built for UK home care
          </div>
          <h1 className="max-w-[650px] font-['Playfair_Display'] text-[clamp(40px,4.55vw,64px)] font-extrabold leading-[1.02] tracking-[-.038em] text-white">
            Fix the failing care system <span className="text-[#F2A51A]">for £7.50.</span>
          </h1>
          <p className="mt-6 max-w-[600px] text-[clamp(16px,1.3vw,19px)] font-normal leading-[1.68] tracking-[-.01em] text-slate-300">
            One affordable transparency layer for care evidence, workforce protection and regulatory readiness — designed for agencies that legacy care software priced out.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#platform" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0D7377] to-[#14C0C6] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(20,192,198,.2)] transition hover:-translate-y-0.5">
              Explore the platform <ArrowRight size={16}/>
            </a>
            <a href="#pricing" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10">
              See £7.50 pricing
            </a>
          </div>

          <div className="mt-8 grid max-w-[610px] grid-cols-1 gap-3 sm:grid-cols-3">
            {[['CQC','Evidence ready'],['Home Office','Workforce protected'],['Local Authority','Digital proof']].map(([a,b]) => (
              <div key={a} className="rounded-xl border border-white/10 bg-white/[.045] p-3.5 backdrop-blur-sm">
                <div className="mb-2 flex items-center gap-2 text-[#5ee5e8]"><CheckCircle2 size={15}/><span className="text-[11px] font-black uppercase tracking-[.12em]">{a}</span></div>
                <p className="text-[13px] font-semibold leading-snug text-white/80">{b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
          <div className="absolute -inset-5 rounded-[34px] bg-gradient-to-br from-[#14C0C6]/20 via-transparent to-[#F2A51A]/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 p-2 shadow-[0_32px_90px_rgba(0,0,0,.42)] backdrop-blur">
            <img src={heroImage} alt="Breaking the glass case of home care" className="aspect-[16/10] w-full rounded-[22px] object-cover" />
            <div className="absolute inset-x-6 bottom-6 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-[#07192f]/82 px-5 py-4 backdrop-blur-xl">
              <div><p className="text-[10px] font-black uppercase tracking-[.18em] text-[#5ee5e8]">The Glass Case of Home Care</p><p className="mt-1 text-sm font-bold text-white">Visibility without affordable infrastructure ends here.</p></div>
              <ShieldCheck className="hidden shrink-0 text-[#5ee5e8] sm:block" size={28}/>
            </div>
          </div>
          <div className="absolute -right-3 -top-4 rounded-2xl border border-white/15 bg-[#0A2342]/90 px-4 py-3 shadow-xl backdrop-blur">
            <p className="text-[10px] font-bold uppercase tracking-[.16em] text-white/45">Starting at</p><p className="text-2xl font-black text-[#F2A51A]">£7.50</p><p className="text-[10px] text-white/45">client / month</p>
          </div>
        </div>
      </div>
    </section>
  );
}
