export function PlatformSection() {
  return (
    <section id="platform" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-s font-bold tracking-[0.22em] uppercase text-[#0D7377] mb-4">Our Platform</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0A2342] mb-5 leading-tight">
            Most tools give you a dashboard.<br />
            <span className="text-[#0D7377]">We give you an infrastructure.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-[#64748B] leading-relaxed">
            Four layers working in sequence — from raw data capture all the way to
            one-click regulatory compliance and full stakeholder visibility.
          </p>
        </div>

        {/* ══════ INTELLIGENCE STACK ══════ */}
        <div className="flex flex-col gap-2 mb-24">

          {/* ── LAYER 1 ── */}
          <div className="rounded-3xl overflow-hidden border border-[#E2E8F0] bg-white shadow-sm hover:shadow-2xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">

              {/* Left accent panel */}
              <div
                className="flex flex-col justify-between p-12 relative overflow-hidden min-h-[320px]"
                style={{ background: "linear-gradient(135deg, #0D7377 0%, #0A5C8A 100%)" }}
              >
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #14C0C6 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
                <div>
                  <p className="text-white/50 text-xs font-black tracking-[0.2em] uppercase mb-3">Layer 01</p>
                  <p className="text-white font-black text-4xl leading-snug">Multi-Modal<br />Ingestion<br />Engine</p>
                </div>
                <div>
                  <span className="inline-block text-sm font-bold px-5 py-2.5 rounded-full bg-white/15 text-white w-fit backdrop-blur-sm border border-white/20">
                    Capture the Truth
                  </span>
                </div>
                <div className="absolute -bottom-6 -right-4 text-[160px] font-black text-white/6 leading-none select-none pointer-events-none">01</div>
              </div>

              {/* Right: 4 features — 2x2 grid */}
              <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "⌚",
                    bg: "linear-gradient(135deg, #EFF8F8 0%, #D6F0F1 100%)",
                    accent: "#0D7377",
                    title: "Wearable Telemetry",
                    body: "Heart rate, SpO2, and gait analysis for fall prevention — consumer wearables and medical-grade sensors treated with equal clinical priority.",
                  },
                  {
                    icon: "📍",
                    bg: "linear-gradient(135deg, #EFF8F8 0%, #D6F0F1 100%)",
                    accent: "#0D7377",
                    title: "Mobile Geofencing",
                    body: "GPS-verified 'Proof of Presence' — timestamped visit logs that eliminate ghost visits and create an unbreakable chain of visit records for every carer.",
                  },
                  {
                    icon: "🎤",
                    bg: "linear-gradient(135deg, #EFF8F8 0%, #D6F0F1 100%)",
                    accent: "#0D7377",
                    title: "Voice-to-Text Input",
                    body: "Carers speak naturally — NLP converts spoken notes into structured, MODS-compliant care logs instantly. Faster, more accurate, no typing required.",
                  },
                  {
                    icon: "🔊",
                    bg: "linear-gradient(135deg, #EFF8F8 0%, #D6F0F1 100%)",
                    accent: "#0D7377",
                    title: "Text-to-Voice Notifications",
                    body: "The system speaks back. Real-time voice alerts notify elderly clients of carer ETAs, remind carers of tasks, and alert managers to escalations — closing the care loop in both directions.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start p-5 rounded-2xl border border-[#E2E8F0] hover:border-[#0D7377] hover:shadow-md transition-all duration-200">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: item.bg }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-base mb-1.5" style={{ color: item.accent }}>{item.title}</p>
                      <p className="text-[#64748B] text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center py-2">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-8 bg-[#CBD5E1]" />
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                <path d="M1 1l6 7 6-7" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* ── LAYER 2 — CORE IP ── */}
          <div
            className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_32px_80px_rgba(10,35,66,0.45)] transition-shadow duration-300"
            style={{ background: "linear-gradient(135deg, #0A2342 0%, #0D3B6E 100%)" }}
          >
            {/* Decorative mesh */}
            <div className="absolute inset-0 pointer-events-none opacity-30" style={{
              backgroundImage: `radial-gradient(circle, rgba(20,192,198,0.2) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }} />

            {/* Top bar */}
            <div className="flex items-center justify-between px-12 pt-10 pb-4">
              <div className="flex items-center gap-3">
                <p className="text-white/40 text-xs font-black tracking-[0.2em] uppercase">Layer 02</p>
                <span className="text-xs font-black px-5 py-2 rounded-full bg-[#14C0C6] text-white tracking-widest uppercase shadow-lg">
                  Core IP — Proprietary
                </span>
              </div>
              <div className="text-[110px] font-black text-white/5 leading-none select-none">02</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] relative z-10">
              {/* Left: headline */}
              <div className="px-12 pb-12 pt-2">
                <h3 className="text-white font-black text-5xl leading-tight mb-6">
                  The MODS<br />Normalisation<br />
                  <span className="text-[#14C0C6]">Engine.</span>
                </h3>
                <p className="text-white/65 text-base leading-relaxed max-w-sm">
                  This is our core IP — the "data laundry." It takes unstructured data
                  from any hardware source and normalises it into the Minimum Operational
                  Data Standard (MODS). Every record, regardless of where it came from,
                  carries the same legal and clinical weight when it leaves this layer.
                </p>
              </div>

              {/* Right: two feature blocks */}
              <div className="grid grid-cols-1 gap-px bg-white/5 border-t lg:border-t-0 lg:border-l border-white/10">
                {[
                  {
                    icon: "⚖️",
                    title: "Standardisation",
                    body: "A fall detected by any sensor — consumer wearable, medical device, or carer log — is normalised to the same clinical priority level. Hardware-agnostic. Outcome-consistent.",
                  },
                  {
                    icon: "🔒",
                    title: "Audit-Ready Output",
                    body: "Every record is structured to meet the high-bar specifications of CQC, Home Office, and Local Authorities — inspection-ready from the moment it's created, never retroactively compiled.",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-10 hover:bg-white/[0.06] transition-colors duration-200">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5" style={{ background: "rgba(20,192,198,0.18)", border: "1px solid rgba(20,192,198,0.3)" }}>
                      {item.icon}
                    </div>
                    <p className="font-bold text-xl mb-3 text-[#14C0C6]">{item.title}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center py-2">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-8 bg-[#CBD5E1]" />
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                <path d="M1 1l6 7 6-7" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* ── LAYER 3 ── */}
          <div className="rounded-3xl overflow-hidden border border-[#E2E8F0] bg-white shadow-sm hover:shadow-2xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">

              <div
                className="flex flex-col justify-between p-12 relative overflow-hidden min-h-[320px]"
                style={{ background: "linear-gradient(135deg, #C1121F 0%, #E63946 100%)" }}
              >
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                <div>
                  <p className="text-white/50 text-xs font-black tracking-[0.2em] uppercase mb-3">Layer 03</p>
                  <p className="text-white font-black text-4xl leading-snug">The Regulatory<br />Logic Layer</p>
                </div>
                <div>
                  <span className="inline-block text-sm font-bold px-5 py-2.5 rounded-full bg-white/15 text-white w-fit backdrop-blur-sm border border-white/20">
                    3 Regulators. 1 Engine.
                  </span>
                </div>
                <div className="absolute -bottom-6 -right-4 text-[160px] font-black text-white/6 leading-none select-none pointer-events-none">03</div>
              </div>

              <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    accent: "#E63946",
                    bg: "linear-gradient(135deg, #FFF5F5 0%, #FFE4E6 100%)",
                    border: "#FCA5A5",
                    icon: "🔴",
                    title: "CQC",
                    body: "Links care tasks directly to Regulation 9 person-centred outcomes — generating evidence packs that map to the 5 Key Questions inspectors assess on every visit.",
                  },
                  {
                    accent: "#D4820A",
                    bg: "linear-gradient(135deg, #FFFBF0 0%, #FEF3C7 100%)",
                    border: "#FCD34D",
                    icon: "🏛",
                    title: "Home Office",
                    body: "Real-time monitoring of visa hours and sponsorship compliance — automatic alerts before obligations are breached, eliminating £45,000+ fine exposure for agencies.",
                  },
                  {
                    accent: "#0A7A6E",
                    bg: "linear-gradient(135deg, #F0FAF9 0%, #CCFBF1 100%)",
                    border: "#6EE7B7",
                    icon: "📋",
                    title: "Local Authorities",
                    body: "Auto-generates QAF evidence packs and KPI dashboards that satisfy LA contract requirements — without a single duplicate data entry from your team.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-5 p-6 rounded-2xl border transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5" style={{ background: item.bg, borderColor: item.border }}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-white/70">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-black text-xl mb-2" style={{ color: item.accent }}>{item.title}</p>
                      <p className="text-[#475569] text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center py-2">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-8 bg-[#CBD5E1]" />
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                <path d="M1 1l6 7 6-7" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* ── LAYER 4 ── */}
          <div className="rounded-3xl overflow-hidden border border-[#E2E8F0] bg-white shadow-sm hover:shadow-2xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">

              <div
                className="flex flex-col justify-between p-12 relative overflow-hidden min-h-[320px]"
                style={{ background: "linear-gradient(135deg, #0A2342 0%, #1a3a5c 100%)" }}
              >
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #14C0C6 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                <div>
                  <p className="text-white/50 text-xs font-black tracking-[0.2em] uppercase mb-3">Layer 04</p>
                  <p className="text-white font-black text-4xl leading-snug">Unified<br />Stakeholder<br />Portals</p>
                </div>
                <div>
                  <span className="inline-block text-sm font-bold px-5 py-2.5 rounded-full bg-white/15 text-white w-fit backdrop-blur-sm border border-white/20">
                    Right data. Right person.
                  </span>
                </div>
                <div className="absolute -bottom-6 -right-4 text-[160px] font-black text-white/6 leading-none select-none pointer-events-none">04</div>
              </div>

              <div className="p-10 grid grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  {
                    icon: "📊",
                    color: "#0A2342",
                    bg: "linear-gradient(135deg, #F0F4F8 0%, #DBEAFE 100%)",
                    border: "#BFDBFE",
                    title: "Agency Director",
                    body: "Situation Dashboard with real-time risk management, multi-branch oversight, and emergency heatmaps.",
                  },
                  {
                    icon: "📱",
                    color: "#0D7377",
                    bg: "linear-gradient(135deg, #EFF8F8 0%, #CCFBF1 100%)",
                    border: "#99F6E4",
                    title: "Carers",
                    body: "Mobile-first task lists, GPS check-in/out, voice-to-text logs, text-to-voice alerts, and medication prompts.",
                  },
                  {
                    icon: "👨‍👩‍👧",
                    color: "#1B7A4A",
                    bg: "linear-gradient(135deg, #F0FAF9 0%, #D1FAE5 100%)",
                    border: "#6EE7B7",
                    title: "Families",
                    body: "Read-only transparency portal — care logs, ETAs, and compliance status visible in real time. Peace of mind, always on.",
                  },
                  {
                    icon: "📄",
                    color: "#E63946",
                    bg: "linear-gradient(135deg, #FFF5F5 0%, #FFE4E6 100%)",
                    border: "#FCA5A5",
                    title: "Regulators",
                    body: "One-click compliance reports — structured, exportable, and inspection-ready at any moment. No preparation required.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 p-5 rounded-2xl border hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" style={{ background: item.bg, borderColor: item.border }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-white/70">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-base mb-1.5" style={{ color: item.color }}>{item.title}</p>
                      <p className="text-[#64748B] text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 4. INTEGRATION */}
        <div className="mt-20 grid grid-cols-2 gap-12 items-start max-md:grid-cols-1">
          <div>
            <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#0D7377] mb-4">Compatibility</p>
            <h3 className="font-black text-3xl text-[#0A2342] leading-tight mb-5">
              Works with<br />what you already use.
            </h3>
            <p className="text-base text-[#64748B] leading-relaxed">
              ecosensse is built to integrate seamlessly with existing care infrastructure — no rip-and-replace, no disruption. Import your existing data via CSV or API and start generating compliance evidence from day one.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            {[
              { icon: "⌚", title: "Major Wearable Brands", body: "Compatible with consumer wearables and specialist medical-grade devices — all normalised through the MODS engine." },
              { icon: "🗂️", title: "Care Management Systems", body: "API-first architecture integrates with leading UK care management platforms via CSV or API." },
              { icon: "🏛️", title: "NHS ICBS & Digital Infrastructure", body: "Designed for future NHS integration — aligned with NHS data standards from day one." },
              { icon: "📱", title: "iOS & Android", body: "Native mobile apps for carers and families on all major devices." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#0D7377] transition-colors duration-200">
                <div className="w-10 h-10 bg-[#F0F4F8] rounded-lg flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="text-base font-semibold text-[#0A2342] mb-1">{item.title}</p>
                  <p className="text-sm text-[#64748B] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}