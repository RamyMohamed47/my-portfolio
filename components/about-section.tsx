const capabilities = [
  'Backend architecture',
  'REST API design',
  'Authentication & authorization',
  'Real-time systems',
  'Database modeling',
  'Automated testing',
]

const principles = [
  ['01', 'Clear boundaries', 'Keep transport, business logic, and persistence responsibilities separate.'],
  ['02', 'Secure by design', 'Treat authentication, authorization, validation, and secrets as core architecture.'],
  ['03', 'Built to verify', 'Use types, contracts, tests, and observable errors to make systems easier to trust.'],
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-foreground py-24 md:py-32 lg:py-36">
      <div className="mb-20 grid grid-cols-12 gap-4 md:mb-24 md:gap-8">
        <p className="section-index col-span-2">02</p>
        <p className="eyebrow col-span-10">Profile / Engineering approach</p>
      </div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-9 md:col-start-3">
          <h2 className="text-pretty font-serif text-[clamp(2.7rem,5vw,5.5rem)] leading-[1] tracking-[-0.03em]">I turn backend complexity into dependable product experiences.</h2>
        </div>
        <div className="md:col-span-4 md:col-start-2 md:row-start-2 md:mt-20">
          <div className="border border-foreground bg-[#171a19] p-6 text-[#f4f0e7] sm:p-8">
            <p className="text-[9px] uppercase tracking-[0.2em] text-emerald-300">Current toolkit</p>
            <p className="mt-12 font-serif text-4xl leading-[0.95]">Node.js<br />TypeScript<br />Express</p>
            <div className="mt-16 flex items-center justify-between border-t border-white/15 pt-4 text-[9px] uppercase tracking-[0.14em] text-white/45">
              <span>API to interface</span><span>2026</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:row-start-2 md:mt-20">
          <div className="grid grid-cols-1 gap-8 text-base leading-7 text-muted-foreground sm:grid-cols-2">
            <p>I&apos;m Ramy Mohamed, a backend-focused developer building secure APIs, real-time systems, and the web experiences that consume them.</p>
            <p>I care about clean architecture, explicit contracts, maintainable code, and the details that help software stay reliable after the first demo.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 border-t border-foreground pt-4 sm:grid-cols-[1fr_2fr] sm:gap-8 md:mt-20">
            <p className="eyebrow py-3">Engineering strengths</p>
            <ul>
              {capabilities.map((item, index) => <li key={item} className="flex items-baseline justify-between border-b border-border py-3 text-sm"><span>{item}</span><span className="section-index">0{index + 1}</span></li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-24 grid grid-cols-1 border-t border-foreground md:mt-28 md:grid-cols-3">
        {principles.map(([index, title, description]) => (
          <div key={title} className="border-b border-border py-6 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
            <span className="section-index">{index}</span>
            <h3 className="mt-10 text-sm font-medium">{title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
