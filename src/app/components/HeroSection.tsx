export function HeroSection() {
  return (
    <section 
      id="hero"
      className="min-h-[85vh] flex flex-col justify-center relative pt-20 md:pt-24 pb-20 px-5 md:px-8 overflow-hidden bg-[#0D1F38]"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(13,192,198,0.1) 1px, transparent 1px),
          radial-gradient(circle, rgba(13,192,198,0.4) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '40px 40px, 40px 40px, 40px 40px',
        backgroundPosition: '0 0, 0 0, 0 0'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Circuit traces */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 15%, rgba(13,192,198,0.18) 15%, rgba(13,192,198,0.18) 15.4%, transparent 15.4%),
              linear-gradient(90deg, transparent 55%, rgba(13,192,198,0.12) 55%, rgba(13,192,198,0.12) 55.3%, transparent 55.3%),
              linear-gradient(90deg, transparent 78%, rgba(13,192,198,0.15) 78%, rgba(13,192,198,0.15) 78.3%, transparent 78.3%),
              linear-gradient(180deg, transparent 20%, rgba(13,192,198,0.15) 20%, rgba(13,192,198,0.15) 20.4%, transparent 20.4%),
              linear-gradient(180deg, transparent 60%, rgba(13,192,198,0.12) 60%, rgba(13,192,198,0.12) 60.3%, transparent 60.3%),
              linear-gradient(180deg, transparent 82%, rgba(13,192,198,0.15) 82%, rgba(13,192,198,0.15) 82.3%, transparent 82.3%)
            `
          }}
        />

        {/* Vignette overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 25%, rgba(13,31,56,0.72) 100%)'
          }}
        />
        
        {/* Radial glow left */}
        <div 
          className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(13,115,119,0.28) 0%, transparent 65%)'
          }}
        />
        
        {/* Radial glow right */}
        <div 
          className="absolute bottom-0 -right-[5%] w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(13,46,87,0.6) 0%, transparent 65%)'
          }}
        />
        
        {/* Vertical scan line */}
        <div 
          className="absolute top-0 bottom-0 left-1/2 w-px"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(13,192,198,0.15) 30%, rgba(13,192,198,0.15) 70%, transparent 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1195px] mx-auto w-full">
        {/* Main Headline */}
        <h1 className="mb-10">
          <span 
            className="block font-['Playfair_Display'] text-[clamp(32px,4.5vw,60px)] font-black text-white leading-[1.0] tracking-tight opacity-0 animate-fadeUp"
            style={{ animationDelay: '0.25s' }}
          >
            We will fix the failing care system <span className="whitespace-nowrap">for <span className="text-[#E8A020]">£7.50</span></span>
          </span>
        </h1>

        {/* Glass Box Statement */}
        <div 
          className="mb-8 py-5 pl-6 border-l-[3px] border-[#0D7377] opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.4s' }}
        >
          <p className="text-base font-bold tracking-[0.2em] uppercase text-[#14C0C6] mb-2.5">
            The Glass Case of Home Care
          </p>
          <p className="text-[clamp(17px,2vw,21px)] text-[#E8EDF4]/75 leading-[1.7] font-light w-full max-w-full lg:max-w-[100%] xl:max-w-[98%]">
            The UK home care market is facing an operational crisis. Between the <strong className="text-[#E8EDF4] font-semibold">September 2026 CQC deadline,</strong>
            record <strong className="text-[#E8EDF4] font-semibold">Home Office license revocations, </strong> and new <strong className="text-[#E8EDF4] font-semibold">
              Local Authority digital requirements,</strong> analog agencies are being squeezed out.
          </p>
          <p className="text-[clamp(17px,2vw,21px)] text-[#E8EDF4]/75 leading-[1.7] font-light w-full max-w-full lg:max-w-[100%] xl:max-w-[98%]">
            <strong className="text-[#E8EDF4] font-semibold">ecoSENSSEhealth, </strong>
            is the transparency infrastructure that secures your license, protects your workforce, and automates your evidence—all for
            <strong className="text-[#E8EDF4] font-semibold"> £7.50 per client per month.</strong>
          </p>
        </div>

        {/* Solution Line */}
        <div 
          className="flex items-center gap-4 mb-10 opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.55s' }}
        >
          <div className="w-10 h-px bg-[#0D7377] flex-shrink-0" />
          <p className="text-[clamp(15px,1.2vw,15px)] text-[#14C0C6] font-medium italic tracking-wide max-w-[480px]">
            Collecting, analysing and automating MODs compliance reporting for the 3 primary UK care regulators affordably.
          </p>
        </div>
      </div>
    </section>
  );
}