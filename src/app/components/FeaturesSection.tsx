import glassCaseImage from "../../assets/glasscase.png";
export function FeaturesSection() {
  return (
    <section id="problem" className="bg-white">

      {/* ══════════════════════════════════════
          HERO — Full content left, big image right
      ══════════════════════════════════════ */}
      <div className="mx-auto max-w-[1180px] px-5 md:px-8 pt-20 md:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] gap-10 xl:gap-14 items-center">

          {/* ── LEFT: all the content ── */}
          <div className="flex flex-col justify-between py-2">

            {/* Label + headline */}
            <div className="mb-8">
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#E63946] mb-4">
                The Problem
              </p>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-[#0A2342] leading-[1.0] tracking-tight mb-6">
                The Glass Case<br />
                <span className="text-[#E63946]">of Home Care.</span>
              </h2>
              <p className="text-[#0A2342]/55 text-lg leading-relaxed max-w-lg">
                UK home care agencies are trapped — fully visible to three regulators,
                but given no affordable way to prove compliance. One failed inspection
                and the people inside lose everything.
              </p>
            </div>

            {/* 3 regulator threats — full detail */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                {
                  accent: "#E63946",
                  bg: "#FFF5F5",
                  border: "#E6394620",
                  icon: "🔴",
                  regulator: "CQC — Care Quality Commission",
                  title: "Failed inspection = closure",
                  detail: "9,000+ inspections ramping by 2026. No digital evidence = failed rating = shutdown.",
                  badge: "Agency closure",
                },
                {
                  accent: "#D4820A",
                  bg: "#FFFBF0",
                  border: "#D4820A20",
                  icon: "🏛",
                  regulator: "Home Office — Sponsor License",
                  title: "Manual tracking = £45,000 fines",
                  detail: "~25% of staff are migrants. Manual visa tracking = six-figure fines + license revoked.",
                  badge: "£45,000+ fines",
                },
                {
                  accent: "#0A7A6E",
                  bg: "#F0FAF9",
                  border: "#0A7A6E20",
                  icon: "📋",
                  regulator: "Local Authorities — Contracts",
                  title: "No digital proof = contract terminated",
                  detail: "£22B in LA-funded care. New QAF demands digital evidence. No compliance = no revenue.",
                  badge: "Contract terminated",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  className="rounded-xl px-5 py-4 border"
                  style={{ background: r.bg, borderColor: r.border }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 min-w-0">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0 mt-0.5"
                        style={{ background: `${r.accent}15` }}
                      >
                        {r.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-black tracking-[0.14em] uppercase mb-0.5" style={{ color: r.accent }}>
                          {r.regulator}
                        </p>
                        <p className="text-[#0A2342] font-bold text-sm leading-snug mb-1">{r.title}</p>
                        <p className="text-[#0A2342]/45 text-xs leading-relaxed">{r.detail}</p>
                      </div>
                    </div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap mt-1"
                      style={{ background: `${r.accent}15`, color: r.accent }}
                    >
                      ⚠ {r.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Urgency stat row */}
            <div
              className="rounded-xl border border-[#E63946]/15 px-5 py-4 flex flex-wrap items-center gap-6"
              style={{ background: "#FFF5F5" }}
            >
              <div className="flex items-center gap-2">
                <span>⏰</span>
                <p className="text-[#E63946] text-sm font-bold">September 2026 deadline</p>
              </div>
              <div className="flex gap-6 flex-wrap">
                {[
                  { val: "398", label: "agencies still analog" },
                  { val: "£45K+", label: "fine per violation" },
                  { val: "£50–75", label: "cheapest tool/client" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="text-[#E63946] font-black text-xl leading-none">{s.val}</p>
                    <p className="text-[#0A2342]/40 text-[10px] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT: big image, full height ── */}
          <div
            className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl shadow-[0_22px_60px_rgba(10,35,66,0.16)]"
            style={{ aspectRatio: "2 / 3" }}
          >
            <img
              src={glassCaseImage}
              alt="The Glass Case of Home Care"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Bottom badge */}
            <div
              className="absolute bottom-6 left-6 right-6 rounded-xl px-4 py-3 border border-white/20"
              style={{ background: "rgba(10,35,66,0.82)", backdropFilter: "blur(12px)" }}
            >
              <p className="text-white font-bold text-sm">"The Glass Case of Home Care"</p>
              <p className="text-white/55 text-xs mt-0.5">3 regulators. 1 deadline. 0 affordable tools.</p>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════
          COMPETITOR BREAKDOWN
      ══════════════════════════════════════ */}
      <div className="bg-[#F9F9F9] py-24">
        <div className="container mx-auto px-6 md:px-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0A7A6E] mb-4">
                Why existing tools fail
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2342] leading-tight tracking-tight">
                Every solution was built<br />for someone else.
              </h2>
            </div>
            <p className="text-[#0A2342]/45 text-base max-w-sm leading-relaxed md:text-right">
              Not one tool on the market was designed for the 9,000+ LA-funded analog agencies facing shutdown in 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                accent: "#E63946",
                lightBg: "#FFF5F5",
                emoji: "💸",
                name: "Other SaaS Providers",
                tag: "Too expensive",
                statLabel: "Per client / month",
                stat: "£50–75",
                problems: [
                  "Built for private-pay digital agencies only",
                  "Ignores 70% of market — LA-funded agencies",
                  "CQC focus only — no Home Office or LA compliance",
                  "Pricing model excludes agencies that need help most",
                ],
                diff: "ecoSENSSEhealth charges £7.50/client/month and covers all 3 regulators — built for the agencies Birdie never served.",
              },
              {
                accent: "#D4820A",
                lightBg: "#FFFBF0",
                emoji: "📊",
                name: "Spreadsheets",
                tag: "Non-compliant",
                statLabel: "Regulatory proof generated",
                stat: "Zero",
                problems: [
                  "Cannot produce MODS-compliant evidence packs",
                  "No audit trail accepted by CQC inspectors",
                  "Zero Home Office visa tracking capability",
                  "Manual errors create immediate legal exposure",
                ],
                diff: "ecoSENSSEhealth is MODS-compliant from day one. Every care log auto-generates structured, timestamped regulatory evidence.",
              },
              {
                accent: "#555",
                lightBg: "#F5F5F5",
                emoji: "🚪",
                name: "Doing nothing",
                tag: "Most common response",
                statLabel: "Likely outcome",
                stat: "Shutdown",
                problems: [
                  "Agencies paralysed by cost of available tools",
                  "Inspections failed for missing digital evidence",
                  "Sponsor licenses revoked, staff unable to work",
                  "LA contracts terminated — revenue gone overnight",
                ],
                diff: "ecoSENSSEhealth is the only affordable compliance tool built for analog agencies — the ones with no other option.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden flex flex-col bg-white"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: "1px solid #EFEFEF" }}
              >
                <div className="px-7 pt-7 pb-5" style={{ background: c.lightBg, borderBottom: `3px solid ${c.accent}` }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-[#0A2342]/40 text-[10px] font-bold tracking-[0.16em] uppercase mb-1">{c.tag}</p>
                      <p className="text-[#0A2342] font-black text-2xl">{c.name}</p>
                    </div>
                    <span className="text-3xl">{c.emoji}</span>
                  </div>
                  <div>
                    <p className="text-[#0A2342]/35 text-[10px] uppercase tracking-widest mb-1">{c.statLabel}</p>
                    <p className="font-black text-5xl leading-none tracking-tight" style={{ color: c.accent }}>{c.stat}</p>
                  </div>
                </div>
                <div className="px-7 py-6 space-y-3 flex-1">
                  {c.problems.map((p, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <span className="font-bold text-sm flex-shrink-0 mt-0.5" style={{ color: c.accent }}>✕</span>
                      <p className="text-[#0A2342]/60 text-sm leading-snug">{p}</p>
                    </div>
                  ))}
                </div>
                <div className="px-7 py-5 border-t-2 border-[#0A7A6E]/20" style={{ background: "#F0FAF9" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 rounded-full bg-[#0A7A6E] flex items-center justify-center">
                      <span className="text-white text-[8px] font-black">✓</span>
                    </div>
                    <p className="text-[10px] font-black tracking-[0.16em] uppercase text-[#0A7A6E]">ecoSENSSEhealth</p>
                  </div>
                  <p className="text-[#0A2342]/70 text-sm leading-relaxed">{c.diff}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison strip */}
          <div className="rounded-2xl bg-[#0A2342] px-8 py-7">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-shrink-0">
                <p className="text-[#0A7A6E] text-[10px] font-bold tracking-widest uppercase mb-2">The difference</p>
                <p className="text-white text-xl font-black leading-snug">
                  Not just cheaper.<br />The only option.
                </p>
              </div>
              <div className="w-px h-16 bg-white/10 hidden md:block flex-shrink-0" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
                {[
                  { label: "Price", them: "£50–75/client", us: "£7.50/client" },
                  { label: "Regulators covered", them: "1 (CQC only)", us: "3 (CQC + HO + LA)" },
                  { label: "Built for", them: "Private-pay digital", us: "Analog LA-funded" },
                ].map((row, i) => (
                  <div key={i} className="bg-white/5 rounded-xl px-5 py-4 text-center border border-white/8">
                    <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">{row.label}</p>
                    <p className="text-white/30 text-xs line-through mb-1">{row.them}</p>
                    <p className="text-[#2DD4BF] font-bold text-sm">{row.us}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════
          BRIDGE TO SOLUTION
      ══════════════════════════════════════ */}
      <div className="bg-white py-24 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-[#0A2342]/30 text-xl md:text-2xl font-medium max-w-xl mx-auto mb-3 leading-relaxed">
            The problem isn't willingness.
          </p>
          <p className="text-[#0A2342] text-2xl md:text-4xl font-black max-w-2xl mx-auto leading-tight mb-10 tracking-tight">
            Three regulators. Three evidence formats.
            Zero affordable tools built for LA-funded agencies.
          </p>
          <a
            href="#solution"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-105"
            style={{ background: "#E63946", boxShadow: "0 4px 20px rgba(230,57,70,0.35)" }}
          >
            See how we fix it
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
