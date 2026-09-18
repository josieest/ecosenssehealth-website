export function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#0D1F38]"
      style={{
        // Much subtler dot grid — barely visible, not distracting
        backgroundImage: `radial-gradient(circle, rgba(13,192,198,0.12) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    >
      {/* Soft vignette only — no circuit traces */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 50% 0%, rgba(13,192,198,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1100px] mx-auto px-10 py-[100px] relative z-10">

        {/* ══════ HEADER ══════ */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#14C0C6] mb-5">
            Our Solution
          </p>
          <h2 className="font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.1] tracking-tight text-white mb-6">
            One data layer.<br />
            <span className="text-[#14C0C6] italic">Three compliance outputs.</span>
          </h2>
          <p className="text-lg text-white/75 leading-relaxed font-light max-w-[600px] mx-auto">
            ecoSENSSEhealth sits underneath your operations — collecting structured evidence
            once and automatically generating proof for CQC, the Home Office, and Local
            Authorities. Starting at{" "}
            <span className="text-white font-bold">£7.50 per client per month.</span>
          </p>
        </div>

        {/* ══════ HERO IMAGE — Breaking the Glass Case ══════ */}
        <div className="relative rounded-2xl overflow-hidden mb-20" style={{ maxHeight: "480px" }}>
          <img
            src="https://i.imgur.com/PHgPXDD.png"
            alt="Breaking the Glass Case of Home Care — ecoSENSSEhealth solution"
            className="w-full object-cover object-center"
            style={{ maxHeight: "480px" }}
          />
          {/* Dark gradient overlay for text legibility */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(13,31,56,0.85) 0%, rgba(13,31,56,0.3) 50%, transparent 100%)" }}
          />
          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-10 max-w-lg">
              <p className="text-[#14C0C6] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                Breaking the glass case
              </p>
              <p className="text-white font-black text-3xl md:text-4xl leading-tight mb-3">
                We don't just document the problem.<br />
                <span className="text-[#14C0C6]">We dismantle it.</span>
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                One platform. Evidence-based reporting, real-time monitoring,
                and immutable audit trails — built for the agencies that can't
                afford to fail.
              </p>
            </div>
          </div>
        </div>

        {/* ══════ FEATURE LIST ══════ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-white/40 mb-3">
              What it actually does
            </p>
            <h3 className="text-white font-black text-2xl md:text-3xl leading-snug">
              Every feature built around<br />
              <span className="text-[#14C0C6]">one unbreakable principle.</span>
            </h3>
            <p className="text-white/55 text-sm max-w-md mx-auto mt-3 leading-relaxed">
              Collect evidence once. Generate proof everywhere. Never scramble for documentation again.
            </p>
          </div>

          {/* 2-column editorial feature list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              {
                icon: "📋",
                accent: "#14C0C6",
                title: "MODS-aligned evidence packs",
                body: "Automated, exportable, inspection-ready documentation that proves compliance across the 5 Key Questions — no more scrambling to compile paper trails or spreadsheets during audits.",
              },
              {
                icon: "📍",
                accent: "#14C0C6",
                title: "Real-time carer & client monitoring",
                body: "GPS-timestamped visit logs, activity & medication checks, and carer location tracking that creates an unbreakable chain of visibility between visits — no more 'black box' periods where regulators or families have zero insight.",
              },
              {
                icon: "🔒",
                accent: "#14C0C6",
                title: "Immutable audit trails",
                body: "Timestamped, uneditable logs of every action, note, signature, and change — built into core architecture so agencies can prove 'Well-Led' and defend against CQC enforcement, Home Office revocation, or LA contract disputes. 12-month history that can't be deleted or recreated.",
              },
              {
                icon: "⚡",
                accent: "#F4A261",
                title: "Proactive risk flagging & escalation",
                body: "AI-assisted anomaly detection — missed meds, unusual patterns, overdue RTW checks, visa expiry alerts — surfacing issues before they become inspection failures or fines.",
              },
              {
                icon: "👨‍👩‍👧",
                accent: "#14C0C6",
                title: "Family transparency portal",
                body: "Read-only, real-time access for families to see care logs, ETAs, and compliance status — turning families into advocates who expect and pressure agencies to keep the system running. Bundled at no extra cost.",
              },
              {
                icon: "🔗",
                accent: "#14C0C6",
                title: "Multi-regulator single-source truth",
                body: "One data layer generates three tailored compliance views — CQC evidence packs, Home Office visa/pay tracking, LA QAF/KPI dashboards — eliminating duplicate entry and the admin burden analog agencies can't afford.",
              },
              {
                icon: "🔄",
                accent: "#F4A261",
                title: "Low-friction onboarding for analog agencies",
                body: "No rip-and-replace. Import existing spreadsheets and legacy data via CSV/API, enrich with structured MODS compliance, push back clean evidence — agencies keep what they know while gaining the protection they desperately need.",
              },
              {
                icon: "💷",
                accent: "#E63946",
                title: "Cost barrier elimination",
                body: null, // handled separately as callout
              },
            ].filter(f => f.body !== null).map((f, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div
                  className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-lg mt-0.5"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.14em] uppercase mb-1.5" style={{ color: f.accent }}>
                    {f.title}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cost barrier — full width callout, bolder than the rest */}
          <div
            className="mt-10 rounded-2xl px-8 py-7 border border-[#E63946]/25 flex flex-col md:flex-row items-center gap-8"
            style={{ background: "rgba(230,57,70,0.07)" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl"
              style={{ background: "rgba(230,57,70,0.15)" }}
            >
              💷
            </div>
            <div className="flex-1">
              <p className="text-[#E63946] text-[11px] font-bold tracking-[0.18em] uppercase mb-1">
                The most important feature
              </p>
              <h4 className="text-white font-black text-xl mb-2">Cost barrier elimination.</h4>
              <p className="text-white/75 text-sm leading-relaxed">
                At <span className="text-white font-black">£7.50/client/month</span> versus
                £50–75 for Birdie or Lilli, even the smallest LA-funded agency can afford
                full compliance coverage. We've removed the "too expensive" excuse that keeps
                analog agencies trapped — and the people inside them at risk.
              </p>
            </div>
            <div className="flex-shrink-0 text-center">
              <p className="text-[#E63946] font-black text-5xl leading-none">10×</p>
              <p className="text-white/45 text-xs mt-1">cheaper than<br />alternatives</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-20 bg-white/20" />
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/50">Collect once</p>
            <div className="h-px w-20 bg-white/20" />
          </div>
          <p className="text-white font-black text-2xl md:text-3xl text-center mb-3">
            One care log entry.<br />
            <span className="text-[#14C0C6]">Structured from day one.</span>
          </p>
          <p className="text-white/65 text-sm text-center max-w-md leading-relaxed">
            Every interaction is captured in a MODS-compliant format — timestamped,
            immutable, and built for regulatory scrutiny from the moment it's recorded.
          </p>
          <div className="mt-6 flex flex-col items-center gap-1">
            <div className="w-px h-10 bg-[#14C0C6]/50" />
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1l5 6 5-6" stroke="#14C0C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
            </svg>
          </div>
        </div>

        {/* ══════ GENERATES AUTOMATICALLY LABEL ══════ */}
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="h-px flex-1 max-w-[140px] bg-white/15" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/45">Generates automatically</p>
          <div className="h-px flex-1 max-w-[140px] bg-white/15" />
        </div>

        {/* ══════ 3 OUTPUTS — no boxes, strong typography ══════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 mb-20">
          {[
            {
              accent: "#E63946",
              number: "01",
              label: "CQC Compliance",
              title: "5 Key Questions.\nMODS evidence packs.",
              detail: "Every care log auto-generates inspection-ready reports and a timestamped audit trail CQC inspectors can verify on the spot.",
              outcome: "Inspection ready ✓",
            },
            {
              accent: "#14C0C6",
              number: "02",
              label: "Home Office Compliance",
              title: "Visa & pay tracking.\nFully automated.",
              detail: "Right-to-work status, pay verification, and sponsor license obligations monitored in real time — no manual tracking, no £45,000 fines.",
              outcome: "License protected ✓",
            },
            {
              accent: "#F4A261",
              number: "03",
              label: "Local Authority Compliance",
              title: "QAF reports.\nGenerated automatically.",
              detail: "Digital KPI dashboards and Quality Assurance Framework reports produced from the same data — LA contracts secured without extra admin.",
              outcome: "Contracts secured ✓",
            },
          ].map((s, i) => (
            <div key={i} className="px-8 py-8 text-center md:text-left">
              {/* Number — high contrast, not ghosted */}
              <p
                className="font-black text-7xl leading-none mb-5"
                style={{ color: s.accent, opacity: 0.35 }}
              >
                {s.number}
              </p>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: s.accent }}>
                {s.label}
              </p>
              <h3 className="text-white font-black text-xl leading-snug mb-3 whitespace-pre-line">
                {s.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {s.detail}
              </p>
              <p className="text-sm font-bold" style={{ color: s.accent }}>
                {s.outcome}
              </p>
            </div>
          ))}
        </div>

        {/* ══════ PRICE CALLOUT ══════ */}
        <div className="text-center mb-20 py-14 border-t border-b border-white/10">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-white/40 mb-5">
            Transparency as infrastructure, not a feature
          </p>
          <p className="text-white font-black text-4xl md:text-5xl leading-tight mb-6 tracking-tight">
            Families see.<br />
            Agencies prove.<br />
            <span className="text-[#14C0C6]">Regulators verify.</span>
          </p>
          <div className="flex items-center justify-center gap-3 mb-8">
            <p className="text-white/50 text-lg">All of this.</p>
            <p className="text-[#14C0C6] font-black text-5xl leading-none">£7.50</p>
            <p className="text-white/50 text-lg">per client per month.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {[
              "CQC — 5 Key Questions, MODS evidence packs",
              "Home Office — visa tracking, pay verification",
              "Local Authority — QAF reports, KPI dashboards",
              "Family transparency portal — bundled free",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[#14C0C6] text-sm">✓</span>
                <p className="text-white/70 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════ ROADMAP ══════ */}
        <div className="mb-16">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-white/40 mb-3">
              Start with compliance. Grow with us.
            </p>
            <p className="text-white font-black text-2xl md:text-3xl leading-snug mb-4">
              First, we fix the crisis.<br />
              <span className="text-[#14C0C6]">Then we build the future.</span>
            </p>
            <p className="text-white/65 text-sm max-w-xl mx-auto leading-relaxed">
              Your compliance problem is urgent and needs solving now. Once you're protected,
              ecoSENSSEhealth grows into a complete home care operating system —
              all on the same data layer you started with.
            </p>
          </div>

          {/* Compliance foundation banner — runs through ALL tiers */}
          <div
            className="rounded-xl px-6 py-4 mb-10 flex items-center gap-4 border border-[#14C0C6]/20"
            style={{ background: "rgba(13,192,198,0.07)" }}
          >
            <div
              className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center text-base"
              style={{ background: "rgba(13,192,198,0.2)" }}
            >
              🔒
            </div>
            <div>
              <p className="text-[#14C0C6] text-xs font-bold tracking-widest uppercase mb-0.5">
                Included in every tier
              </p>
              <p className="text-white/75 text-sm leading-relaxed">
                <span className="text-white font-semibold">Compliance & audit reporting is the foundation of all three packages</span> —
                CQC evidence packs, Home Office tracking, and LA QAF reports are always included,
                no matter which tier you're on.
              </p>
            </div>
          </div>

          {/* Timeline connector */}
          <div className="relative mb-8 hidden md:block">
            <div className="absolute top-7 left-[16%] right-[16%] h-px bg-white/10" />
            <div
              className="absolute top-7 left-[16%] w-[26%] h-px"
              style={{ background: "linear-gradient(to right, #14C0C6, rgba(13,192,198,0.2))" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Tier 1 — The Guardian — LIVE */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-black text-base border-2 border-[#14C0C6] flex-shrink-0"
                  style={{ background: "rgba(13,192,198,0.15)" }}
                >
                  <span className="text-[#14C0C6]">01</span>
                </div>
                <span
                  className="text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase"
                  style={{ background: "rgba(13,192,198,0.2)", color: "#14C0C6" }}
                >
                  Available now
                </span>
              </div>
              <p className="text-[#14C0C6] text-[10px] font-bold tracking-[0.18em] uppercase mb-1">
                The Guardian (Survive) — £7.50/client/mo
              </p>
              <h4 className="text-white font-black text-xl mb-1">Safety & Presence.</h4>
              <p className="text-white/45 text-xs italic mb-3">For startups and spot providers</p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Solve the immediate regulatory crisis. Live GPS, geofencing, digital care
                planning, and full 3-regulator compliance — everything an analog agency
                needs to survive the 2026 deadline.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Live GPS map, geofencing & check-in/out",
                  "Voice-to-text CQC-standard care plans",
                  "Fall detection & no-movement alerts",
                  "CQC, Home Office & LA compliance ✦",
                  "Family transparency portal",
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#14C0C6] text-xs mt-0.5 flex-shrink-0">
                      {f.includes("✦") ? "🔒" : "✓"}
                    </span>
                    <p className="text-white/65 text-xs leading-snug">
                      {f.replace(" ✦", "")}
                      {f.includes("✦") && <span className="text-[#14C0C6]"> — all tiers</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 2 — The Scaler — Coming soon */}
            <div className="flex flex-col opacity-60">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-black text-base border-2 border-white/25 flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <span className="text-white/60">02</span>
                </div>
                <span className="text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase border border-white/15 text-white/50">
                  Coming Q2 2027
                </span>
              </div>
              <p className="text-white/50 text-[10px] font-bold tracking-[0.18em] uppercase mb-1">
                The Scaler (Stabilization) — £15/client/mo
              </p>
              <h4 className="text-white/80 font-black text-xl mb-1">Growth & Efficiency.</h4>
              <p className="text-white/35 text-xs italic mb-3">For growing framework providers</p>
              <p className="text-white/55 text-sm leading-relaxed mb-4">
                Once you're compliant, streamline operations. Automated rostering,
                payroll, invoicing, and onboarding — built on the same compliance
                foundation you already rely on.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Everything in The Guardian",
                  "Automated rostering, invoicing & payroll",
                  "Team leader view & late alert management",
                  "Vitals tracking — heart rate & sleep",
                  "Automated DBS checks & training matrix",
                  "QAF reporting to move from Tier 1 → Tier 2",
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-white/30 text-xs mt-0.5 flex-shrink-0">◦</span>
                    <p className="text-white/45 text-xs leading-snug">{f}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 3 — The Strategist — Future */}
            <div className="flex flex-col opacity-40">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-black text-base border-2 border-white/15 flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <span className="text-white/45">03</span>
                </div>
                <span className="text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase border border-white/10 text-white/40">
                  Coming Q3 2028
                </span>
              </div>
              <p className="text-white/40 text-[10px] font-bold tracking-[0.18em] uppercase mb-1">
                The Strategist (Growth) — £35/client/mo
              </p>
              <h4 className="text-white/60 font-black text-xl mb-1">Retention & Optimization.</h4>
              <p className="text-white/30 text-xs italic mb-3">For primary & enterprise providers</p>
              <p className="text-white/45 text-sm leading-relaxed mb-4">
                The full vision. AI-powered predictive care, NHS integration, and
                market intelligence — turning your compliance data into a
                competitive advantage.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Everything in The Scaler",
                  "AI flags health decline before admission",
                  "Multi-branch command center & heatmaps",
                  "AI burnout prediction & staff sentiment",
                  "Live Tender Readiness Score",
                  "Profit matrix — margin per client & contract",
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-white/20 text-xs mt-0.5 flex-shrink-0">◦</span>
                    <p className="text-white/35 text-xs leading-snug">{f}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ══════ HANDOFF LINK ══════ */}
        <a
          href="#platform"
          className="flex items-center justify-center gap-3 py-5 px-10 rounded-2xl border border-white/15 max-w-[600px] mx-auto transition-all duration-200 hover:border-[#14C0C6]/40 no-underline group"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <p className="text-sm text-white/60 text-center leading-relaxed">
            Want to understand exactly how it all works together?{" "}
            <span className="text-[#14C0C6] font-bold">See the full platform workflow →</span>
          </p>
        </a>

      </div>
    </section>
  );
}