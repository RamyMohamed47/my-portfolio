import { AboutSection } from '@/components/about-section'
import { ProjectGrid } from '@/components/project-grid'
import { SiteHeader } from '@/components/site-header'

const experience = [
  ['2023—Now', 'Independent', 'Designer & developer'],
  ['2020—23', 'Northstar Studio', 'Design director'],
  ['2017—20', 'Various & Co.', 'Senior product designer'],
  ['2014—17', 'Made Together', 'Designer'],
]

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-14">
        <section className="flex min-h-[calc(100svh-3.5rem)] flex-col justify-between py-10 md:min-h-[calc(100svh-4rem)] md:py-14">
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            <p className="eyebrow col-span-8 leading-4 sm:col-span-4 md:col-span-2">Independent creative<br />London, UK</p>
            <p className="section-index col-span-4 text-right md:col-span-2 md:col-start-11">Portfolio / 2026</p>
            <h1 className="col-span-12 mt-16 text-pretty font-serif text-[clamp(3.55rem,9.5vw,10.5rem)] leading-[0.82] tracking-[-0.048em] md:col-span-11 md:col-start-2 md:mt-24">
              I&apos;m Alex, a designer <span className="text-muted-foreground">&amp;</span> developer building thoughtful digital experiences.
            </h1>
          </div>
          <div className="mt-24 grid grid-cols-12 items-end gap-4 border-t border-border pt-4 md:gap-8">
            <span className="section-index col-span-2">Introduction</span>
            <p className="col-span-10 max-w-md text-sm leading-6 text-muted-foreground md:col-span-4 md:text-base md:leading-7">I help culture-forward teams turn complex ideas into clear, useful, and memorable products.</p>
            <a href="#work" className="group col-span-10 col-start-3 mt-8 flex items-center justify-between border-b border-foreground pb-2 text-xs tracking-[0.04em] md:col-span-3 md:col-start-10 md:mt-0">View selected work <span className="transition-transform duration-500 group-hover:translate-y-1">↓</span></a>
          </div>
        </section>

        <section id="work" className="scroll-mt-16 border-t border-foreground py-24 md:py-40 lg:py-48">
          <div className="mb-20 grid grid-cols-12 gap-4 md:mb-32 md:gap-8">
            <p className="section-index col-span-2">01</p>
            <div className="col-span-10 md:col-span-8">
              <p className="eyebrow mb-8 md:mb-12">Selected work / 2024—26</p>
              <h2 className="font-serif text-[clamp(3rem,7vw,7.5rem)] leading-[0.88] tracking-[-0.04em]">A few things,<br /><span className="text-muted-foreground">made carefully.</span></h2>
            </div>
            <p className="col-span-10 col-start-3 mt-8 max-w-xs text-sm leading-6 text-muted-foreground md:col-span-2 md:col-start-11 md:mt-auto">Strategy, design, and code for products and brands that value clarity over noise.</p>
          </div>
          <ProjectGrid />
        </section>

        <AboutSection />

        <section className="border-t border-foreground py-24 md:py-40">
          <div className="mb-20 grid grid-cols-12 gap-4 md:mb-28 md:gap-8"><p className="section-index col-span-2">03</p><p className="eyebrow col-span-10">Experience / Selected clients</p></div>
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-10 md:col-start-3">
              {experience.map(([years, company, role], index) => (
                <div key={company} className="grid grid-cols-[5rem_1fr] gap-4 border-t border-border py-4 text-sm first:border-foreground md:grid-cols-12 md:gap-8 md:py-5">
                  <span className="section-index md:col-span-2">{years}</span><span className="font-medium md:col-span-5">{company}</span><span className="col-start-2 text-muted-foreground md:col-span-4 md:col-start-auto">{role}</span><span className="section-index hidden text-right md:block">0{index + 1}</span>
                </div>
              ))}
              <div className="mt-24 grid grid-cols-1 gap-8 border-t border-foreground pt-5 md:mt-36 md:grid-cols-10">
                <p className="eyebrow md:col-span-2">Selected clients</p>
                <p className="text-pretty font-serif text-[clamp(2.25rem,4vw,5rem)] leading-[1.02] tracking-[-0.025em] text-muted-foreground md:col-span-8">Aesop, Vitra, Pentagram, Frieze, The New York Times, Nike, Arc&apos;teryx, and Notion.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-16 border-t border-foreground py-20 md:py-32">
          <div className="grid grid-cols-12 gap-4 md:gap-8"><p className="section-index col-span-2">04</p><p className="eyebrow col-span-10">Start a conversation</p></div>
          <h2 className="mt-24 text-pretty font-serif text-[clamp(4rem,11.5vw,12rem)] leading-[0.78] tracking-[-0.05em] md:ml-[8.333%] md:mt-32">Have a project<br />in mind?</h2>
          <div className="mt-20 grid grid-cols-12 gap-4 border-t border-border pt-4 md:mt-28 md:gap-8">
            <span className="section-index col-span-2">Enquiries</span>
            <a href="mailto:hello@alexmercer.design" className="text-link col-span-10 w-fit pb-1 text-lg tracking-[-0.02em] md:col-span-6 md:text-3xl">hello@alexmercer.design ↗</a>
          </div>
        </section>
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-6 px-5 py-6 text-[10px] uppercase tracking-[0.1em] text-muted-foreground md:grid-cols-12 md:px-10 lg:px-14">
          <p className="md:col-span-5">© 2026 Alex Mercer. Made with care.</p>
          <div className="flex justify-end gap-5 md:col-span-4 md:col-start-9 md:gap-8"><a className="nav-link" href="#">LinkedIn</a><a className="nav-link" href="#">Are.na</a><a className="nav-link" href="#">Instagram</a></div>
        </div>
      </footer>
    </>
  )
}
