import { useState } from "react";
import { Separator } from "./ui/separator";
import logoImage from "figma:asset/08c6febabef0a4cdbffb121033a6556c9b7694cb.png";

export function Footer() {
  const [careersPopup, setCareersPopup] = useState(false);

  return (
    <footer className="border-t bg-[#F7F7F8]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoImage} alt="ecosenssehealth logo" className="h-16 w-16 object-contain" />
              <span className="font-semibold text-xl">
                eco<span style={{ color: '#d4183d' }}>SENSSE</span>health
              </span>
            </div>
            <p className="text-[#0A2342] mb-6 max-w-md text-justify" style={{ fontSize: '15px' }}>
              Empowering UK care agencies and families with real-time data to move from reactive crisis management to proactive elderly care.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="font-semibold mb-4 text-[#0A2342]" style={{ fontSize: '17px' }}>Product</h4>
            <ul className="space-y-2 text-[#0A2342]" style={{ fontSize: '15px' }}>
              <li>
                <a href="#platform" className="hover:text-[#0D7377] transition-colors cursor-pointer">Features</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#0D7377] transition-colors cursor-pointer">Pricing</a>
              </li>
              <li>
                <a href="#solution" className="hover:text-[#0D7377] transition-colors cursor-pointer">Roadmap</a>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-4 text-[#0A2342]" style={{ fontSize: '17px' }}>Company</h4>
            <ul className="space-y-2 text-[#0A2342]" style={{ fontSize: '15px' }}>
              <li>
                <span className="cursor-default">About</span>
              </li>
              <li>
                <button
                  onClick={() => setCareersPopup(true)}
                  className="hover:text-[#0D7377] transition-colors text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <a href="mailto:info@ecosenssehealth.co.uk" className="hover:text-[#0D7377] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="mailto:support@ecosenssehealth.co.uk" className="hover:text-[#0D7377] transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[#0A2342]/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#0A2342] mb-4 md:mb-0" style={{ fontSize: '15px' }}>
            © 2026 ecosenssehealth. All rights reserved.
          </p>
          <div className="flex space-x-6 text-[#0A2342]" style={{ fontSize: '15px' }}>
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms of Service</span>
            <span className="cursor-default">Cookie Policy</span>
          </div>
        </div>
      </div>

      {/* CAREERS POPUP */}
      {careersPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(10,35,66,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setCareersPopup(false)}
        >
          <div
            className="bg-white rounded-2xl p-10 max-w-md w-full mx-4 shadow-2xl relative text-center"
            onClick={e => e.stopPropagation()}
          >
            <div className="text-4xl mb-4">🚧</div>
            <h3 className="text-xl font-black text-[#0A2342] mb-3">Careers</h3>
            <p className="text-[#64748B] text-sm leading-relaxed mb-6">
              This section is currently unavailable. Our careers page is coming soon — check back shortly or reach out to us directly at{" "}
              <a href="mailto:info@ecosenssehealth.co.uk" className="text-[#0D7377] font-semibold">
                info@ecosenssehealth.co.uk
              </a>
            </p>
            <button
              onClick={() => setCareersPopup(false)}
              className="py-2.5 px-8 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #0D7377 0%, #14C0C6 100%)" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}