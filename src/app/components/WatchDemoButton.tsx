export function WatchDemoButton() {
  return (
    <>
      <a
        href="/ecosenssehealth_mockup.html"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 relative opacity-0 animate-fadeUp"
        style={{ animationDelay: '0.68s' }}
      >
        {/* Button */}
        <span
          className="relative inline-flex items-center gap-3 px-7 py-3.5 rounded-sm font-semibold text-[15px] tracking-wide text-[#0D1F38] transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            boxShadow: '0 0 24px rgba(34,197,94,0.25), 0 2px 8px rgba(0,0,0,0.3)',
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 700,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(34,197,94,0.45), 0 4px 16px rgba(0,0,0,0.4)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(34,197,94,0.25), 0 2px 8px rgba(0,0,0,0.3)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          {/* Shimmer on hover */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-sm"
            style={{
              background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.18) 50%, transparent 80%)',
            }}
          />

          {/* Play icon */}
          <span className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-[#0D1F38]/20 flex-shrink-0">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
              <path d="M1 1L9 6L1 11V1Z" fill="#0D1F38" stroke="#0D1F38" strokeWidth="1" strokeLinejoin="round"/>
            </svg>
          </span>

          <span className="relative z-10">Watch Demo</span>
        </span>

        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-sm pointer-events-none"
          style={{ animation: 'watchDemoPulse 2.4s ease-out infinite' }}
        />
      </a>

      <style>{`
        @keyframes watchDemoPulse {
          0%   { box-shadow: 0 0 0 0 rgba(34,197,94,0.35); }
          70%  { box-shadow: 0 0 0 10px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
      `}</style>
    </>
  );
}