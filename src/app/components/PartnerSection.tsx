
export function PartnerSection() {

  const benefits = [
    { icon: "🔒", title: "Preferred Pricing — Locked For Life", description: "Pilot partners receive permanently discounted rates, locked in before commercial launch. As ecosensse scales nationally, your cost never changes." },
    { icon: "🧭", title: "Shape the Product Roadmap", description: "Your operational reality directly influences what gets built. Pilot partners have a seat at the table — not just access to the platform, but influence over its future." },
    { icon: "📊", title: "Generate Evidence That Matters", description: "Your data and outcomes contribute to published clinical research and NHS submissions — raising your agency's credibility with commissioners and regulators." },
    { icon: "🏆", title: "First-Mover Advantage in Your Region", description: "Be the care agency in your area already operating at the intelligence level your competitors won't reach for years. That gap compounds over time." },
    { icon: "👥", title: "Direct Access to the Founding Team", description: "Not a support ticket. A relationship. Pilot partners work directly with ecosensse's founders throughout the validation period — full responsiveness, full transparency." },
    { icon: "🌍", title: "Recognised as a Pioneer in UK Care", description: "Founding partners are acknowledged in our public launch, investor materials, and NHS submissions as organisations that chose to lead rather than follow." }
  ];

  const timeline = [
    { icon: "🔬", date: "January 2026", title: "Expression of Interest Open", description: "Register your interest. We'll keep you informed as we approach the pilot launch and give you priority access when applications open.", color: "#0D7377" },
    { icon: "🤝", date: "February 2026", title: "Pilot Partner Selection", description: "A small cohort of founding partners selected. Onboarding, setup and co-design sessions begin with direct access to the ecosensse founding team.", color: "#0A5C8A" },
    { icon: "🚀", date: "May 2026", title: "Pilot Validation Launches", description: "Live deployment with real clients. Partners actively shape the product, generate clinical evidence, and build the data layer that powers national outcomes.", color: "#0A2342" }
  ];

  return (
    <section id="partner" className="relative overflow-hidden py-24 bg-[#F8FAFC]">

      {/* Teal top border */}
      <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: "linear-gradient(90deg, #0D7377 0%, #14C0C6 50%, #0D7377 100%)" }} />

      {/* Background texture — subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(13,115,119,0.07) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(13,115,119,0.35) 0%, transparent 65%)" }} />
      <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, rgba(13,192,198,0.25) 0%, transparent 65%)" }} />

      <div className="max-w-[1200px] mx-auto px-10 relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-16">
          <p className="text-base font-bold tracking-[0.22em] uppercase text-[#0D7377] mb-4">Partner With Us</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0A2342] mb-5 leading-tight">
            Be part of something<br />
            <span className="text-[#0D7377]">that changes UK care.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-[#64748B] leading-relaxed">
            We are selectively inviting a small number of forward-thinking care agencies to join our founding pilot cohort — shaping the platform that will define proactive elderly care in the UK.
          </p>
        </div>

        {/* ── TWO COLUMN: Timeline + Benefits ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 mb-20 items-start">

          {/* LEFT — Pilot Programme Timeline */}
          <div
            className="rounded-3xl p-10 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0A2342 0%, #0D3B6E 100%)" }}
          >
            {/* Dot grid */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(13,192,198,0.4) 1.5px, transparent 1.5px)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* Grid lines */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(rgba(13,192,198,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(13,192,198,0.08) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* Vignette to keep text readable */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, rgba(10,35,66,0.75) 100%)" }}
            />
            {/* Background number watermark */}
            <div className="absolute -bottom-4 -right-4 text-[160px] font-black text-white/5 leading-none select-none pointer-events-none">3</div>
            {/* Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-20"
              style={{ background: "radial-gradient(circle, rgba(13,192,198,0.5) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

            <p className="text-xs font-black tracking-[0.2em] uppercase text-[#14C0C6] mb-2">Pilot Programme</p>
            <h3 className="text-white font-black text-3xl leading-tight mb-2">3 Steps to<br /><span className="text-[#14C0C6]">Pioneer Status.</span></h3>
            <p className="text-white/50 text-sm leading-relaxed mb-10">Limited to 10 founding partners. Applications close when cohort is full.</p>

            <div className="flex flex-col gap-0 relative z-10">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-5 relative">
                  {index < timeline.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-[-8px] w-[2px]" style={{ background: "linear-gradient(180deg, rgba(13,192,198,0.5) 0%, rgba(13,192,198,0.1) 100%)" }} />
                  )}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-base flex-shrink-0 relative z-10 border-2 border-[#14C0C6]"
                    style={{ background: "rgba(13,192,198,0.15)" }}>
                    {item.icon}
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="text-[12px] font-black tracking-[0.15em] uppercase text-[#14C0C6] mb-1">{item.date}</p>
                    <p className="text-white font-bold text-[15px] mb-1.5">{item.title}</p>
                    <p className="text-white/50 text-[13px] leading-[1.6]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:info@ecosenssehealth.co.uk?subject=Founding%20Pilot%20Partnership%20Enquiry"
              className="block w-full mt-2 py-4 rounded-xl font-bold text-sm tracking-wide text-white text-center no-underline transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "linear-gradient(90deg, #0D7377 0%, #14C0C6 100%)" }}
            >
              Partner With Us →
            </a>
            <p className="text-white/30 text-xs text-center mt-3">Limited to 10 founding partners</p>
          </div>

          {/* RIGHT — Benefits Grid */}
          <div>
            <div className="flex items-center gap-2.5 mb-7">
              <p className="text-[13px] font-black tracking-[0.18em] uppercase text-[#64748B] whitespace-nowrap">What pilot partners gain</p>
              <div className="flex-1 h-[1px] bg-[#CBD5E1]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#E2E8F0] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,35,66,0.1)] hover:border-[#0D7377] relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background: "linear-gradient(180deg, #0D7377 0%, #14C0C6 100%)" }} />
                  <span className="text-2xl block mb-3">{benefit.icon}</span>
                  <p className="text-[14px] font-bold text-[#0A2342] mb-2 leading-snug">{benefit.title}</p>
                  <p className="text-[13px] text-[#64748B] leading-[1.65]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA BANNER ── */}
        <div
          className="rounded-3xl px-14 py-12 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden max-md:px-8"
          style={{ background: "linear-gradient(135deg, #0A2342 0%, #0D3B6E 100%)" }}
        >
          <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle, rgba(13,192,198,0.5) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none opacity-10"
            style={{ background: "radial-gradient(circle, rgba(13,115,119,0.5) 0%, transparent 70%)" }} />

          <div className="flex-1 relative z-10">
            <h3 className="text-[24px] font-black text-white mb-3 leading-snug">
              Ready to help shape the future<br />of UK elderly care?
            </h3>
            <p className="text-sm text-white/55 leading-[1.7] max-w-[520px]">
              We're not looking for everyone — we're looking for the right partners. If your organisation is forward-thinking, operationally ambitious, and genuinely committed to better outcomes for elderly individuals, we'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-col gap-3 flex-shrink-0 relative z-10 items-center">
            <a
              href="mailto:info@ecosenssehealth.co.uk?subject=Founding%20Pilot%20Partnership%20Enquiry"
              className="py-4 px-10 text-white rounded-xl text-sm font-black whitespace-nowrap tracking-wide text-center no-underline transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "linear-gradient(90deg, #0D7377 0%, #14C0C6 100%)" }}
            >
              Partner With Us
            </a>
            <p className="text-[12px] text-white/35 text-center">Limited to 10 founding partners</p>
          </div>
        </div>

      </div>

    </section>
  );
}