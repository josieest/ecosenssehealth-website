"use client";
import * as React from "react";

export function PricingSection() {
  const plans = [
    {
      audience: "Startups / Spot",
      name: "The Guardian (Survive)",
      tagline: "Safety & Presence",
      description: "For new and growing agencies that need to establish a safe, compliant presence — GPS-verified visits, wearable safety nets, and CQC evidence packs from day one.",
      price: "7.5",
      period: "/client/month",
      note: "per agency  ·  No setup fee  ·  Cancel anytime",
      color: "#1B7A4A",
      features: [
        { cat: "Real-Time Situation Dashboard", detail: 'Core: Live GPS map, Geofencing, and Smartphone check-in/out.' },
        { cat: "Digital Care Planning", detail: 'Wizard-Led: Voice-to-text assessment; CQC-standard templates.' },
        { cat: "Wearable & IoT Integration", detail: 'Passive Safety: Fall detection and "No-Movement" alerts.' },
        { cat: "Admin & Finance Suite", detail: 'Basic staff/client digital files.' },
        { cat: "Workforce & Compliance", detail: 'Essential: eMAR (Meds) & Home Office Sponsor License tracking.' },
        { cat: "Strategy & Tendering", detail: 'Proof of "Good" CQC rating evidence packs.' },
      ],
      cta: "Start Free Trial",
    },
    {
      audience: "Framework / Overflow",
      name: "The Scaler (Scale)",
      tagline: "Growth & Efficiency",
      description: "Everything in The Guardian, plus the full operational toolkit to grow your agency — automated rostering, integrated care plans, and QAF reporting to reach Tier 1 contracts.",
      price: "15",
      period: "/client/month",
      note: "per agency  ·  No setup fee  ·  Cancel anytime",
      color: "#0D7377",
      features: [
        { cat: "Real-Time Situation Dashboard", detail: 'Advanced: Team leader view with "Late Alert" management.' },
        { cat: "Digital Care Planning", detail: 'Integrated: Links Care Plan goals directly to Carer mobile task lists.' },
        { cat: "Wearable & IoT Integration", detail: 'Vitals Tracking: Heart rate and sleep pattern logging.' },
        { cat: "Admin & Finance Suite", detail: 'Full Suite: Automated Rostering, Invoicing, and Payroll integration.' },
        { cat: "Workforce & Compliance", detail: 'Onboarding: Automated DBS checks and Training Matrix tracking.' },
        { cat: "Strategy & Tendering", detail: 'Promotion Tool: QAF reporting to move from Tier 2 to Tier 1.' },
      ],
      cta: "Start Free Trial",
    },
    {
      audience: "Primary / Enterprise",
      name: "The Strategist (Growth)",
      tagline: "Retention & Optimization",
      description: "Everything in The Scaler, plus AI-native care planning, predictive health intelligence, multi-branch command, and a live Tender Readiness Score for winning primary contracts.",
      price: "35",
      period: "/client/month",
      note: "per agency  ·  No setup fee  ·  Cancel anytime",
      color: "#0D7377",
      features: [
        { cat: "Real-Time Situation Dashboard", detail: 'Command Center: Multi-branch oversight and emergency heatmaps.' },
        { cat: "Digital Care Planning", detail: 'AI-Native: "Living" plans that suggest updates based on health data.' },
        { cat: "Wearable & IoT Integration", detail: 'Predictive: AI flags health decline before a hospital admission occurs.' },
        { cat: "Admin & Finance Suite", detail: 'Profit Matrix: Margin analysis per-client and per-contract.' },
        { cat: "Workforce & Compliance", detail: 'Retention: AI "Burnout" prediction and staff sentiment analytics.' },
        { cat: "Strategy & Tendering", detail: 'Market Leader: Live "Tender Readiness Score" for upcoming contracts.' },
      ],
      cta: "Start Free Trial",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden" style={{ background: "#0D1F38" }}>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(13,192,198,0.4) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,192,198,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,192,198,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-10 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-base font-bold tracking-[0.22em] uppercase text-[#14C0C6] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white leading-tight">
            Simple, transparent pricing.<br />
            <span className="text-[#14C0C6]">For every part of the care circle.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60 leading-relaxed">
            Three tiers built around where your agency is today — and where it is going.
            Every plan includes full compliance coverage from day one.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-2 relative flex flex-col shadow-[0_2px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
              style={{ background: "#F1F5F9" }}
            >
              {/* Card Header */}
              <div className="px-7 pt-7 pb-5 border-b border-[#E2E8F0]">
                <p className="text-[11px] font-black tracking-[0.18em] uppercase mb-2" style={{ color: plan.color }}>
                  {plan.audience}
                </p>
                <h3 className="text-[22px] font-black text-[#0A2342] mb-1">{plan.name}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: plan.color }}>
                  {plan.tagline}
                </p>
                <p className="text-[13px] text-[#64748B] leading-[1.65]">{plan.description}</p>
              </div>

              {/* Price Block */}
              <div className="px-7 py-5 border-b border-[#E2E8F0]">
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-lg font-bold leading-none pb-1.5 text-[#64748B]">£</span>
                  <span className="text-[52px] font-black leading-none text-[#0A2342]">{plan.price}</span>
                  <span className="text-[13px] text-[#94A3B8] pb-2">{plan.period}</span>
                </div>
                <p className="text-[12px] text-[#94A3B8] leading-[1.5] mt-1">
                  {plan.note.split("·").map((part, i) => (
                    <span key={i}>
                      {i > 0 && <span className="mx-1">·</span>}
                      {part.includes("No") ? (
                        <strong className="text-[#475569] font-semibold">{part.trim()}</strong>
                      ) : (
                        part.trim()
                      )}
                    </span>
                  ))}
                </p>
              </div>

              {/* Features */}
              <div className="px-7 py-6 flex flex-col gap-4 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex gap-3 items-start">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] mt-0.5 flex-shrink-0 font-black"
                      style={{ background: plan.color }}
                    >
                      ✓
                    </div>
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[#94A3B8] mb-0.5">{feature.cat}</p>
                      <p className="text-[13px] text-[#1E293B] leading-[1.5]">{feature.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-7 pb-7">
                <a
                  href="#partner"
                  className="block w-full py-3.5 rounded-xl font-bold text-sm tracking-wide text-center no-underline transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "#0A2342", color: "#fff" }}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature category legend */}
        <div className="mt-6 mb-10 flex flex-wrap justify-center gap-3">
          {[
            "Real-Time Situation Dashboard",
            "Digital Care Planning",
            "Wearable & IoT Integration",
            "Admin & Finance Suite",
            "Workforce & Compliance",
            "Strategy & Tendering",
          ].map((cat, i) => (
            <span
              key={i}
              className="text-[11px] font-semibold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-[13px] text-white/40 leading-[1.8] mt-6">
          All plans include a <strong className="text-white/70">30-day free trial</strong>. No credit card required to get started.<br />
          Pilot partners joining our <strong className="text-white/70">2026 validation programme</strong> receive preferred pricing —{" "}
          <a href="#partner" className="text-[#14C0C6] no-underline font-semibold hover:underline">see below ↓</a>
        </p>

      </div>
    </section>
  );
}