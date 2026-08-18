import Image from 'next/image'

import { AboutSection } from '@/components/about-section'
import { CvViewer } from '@/components/cv-viewer'
import { ProjectGrid } from '@/components/project-grid'
import { SiteHeader } from '@/components/site-header'
import { SkillsSection } from '@/components/skills-section'

const contactDetails = [
  {
    label: 'Email',
    value: 'mohamedramy228@ymail.com',
    href: 'mailto:mohamedramy228@ymail.com',
  },
  {
    label: 'Phone',
    value: '+20 112 338 1249',
    href: 'tel:+201123381249',
  },
  {
    label: 'Location',
    value: 'New Cairo, Egypt',
  },
  {
    label: 'LinkedIn',
    value: 'ramy-mohamed-b84920217',
    href: 'https://www.linkedin.com/in/ramy-mohamed-b84920217/',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'RamyMohamed47',
    href: 'https://github.com/RamyMohamed47',
    external: true,
  },
]

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-14">
        <section className="flex min-h-[calc(100svh-3.5rem)] flex-col justify-between py-10 md:min-h-[calc(100svh-4rem)] md:py-14">
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            <p className="eyebrow col-span-8 leading-4 sm:col-span-4 md:col-span-2">Node.js / TypeScript<br />Backend &amp; full-stack</p>
            <p className="section-index col-span-4 text-right md:col-span-2 md:col-start-11">Portfolio / 2026</p>
            <h1 className="col-span-12 mt-16 text-pretty font-serif text-[clamp(3.25rem,7.5vw,8.5rem)] leading-[0.88] tracking-[-0.035em] md:col-span-10 md:col-start-2 md:mt-20">
              I build reliable backend systems <span className="text-muted-foreground">&amp;</span> real-time products.
            </h1>
          </div>
          <div className="mt-24 grid grid-cols-12 items-end gap-4 border-t border-border pt-4 md:gap-8">
            <div className="col-span-3 sm:col-span-2">
              <div className="relative aspect-[4/5] w-16 overflow-hidden rounded-[0.75rem] border border-border bg-muted sm:w-20 md:w-24 lg:w-28">
                <Image
                  src="/ramy-mohamed-headshot.jpeg"
                  alt="Portrait of Ramy Mohamed"
                  fill
                  priority
                  sizes="(max-width: 639px) 64px, (max-width: 767px) 80px, (max-width: 1023px) 96px, 112px"
                  className="origin-top scale-[1.55] object-cover object-top"
                />
              </div>
              <span className="section-index mt-3 block">Introduction</span>
            </div>
            <p className="col-span-9 max-w-lg text-sm leading-6 text-muted-foreground sm:col-span-10 md:col-span-5 md:text-base md:leading-7">I&apos;m Ramy Mohamed, a developer focused on secure APIs, clean architecture, authentication, and full-stack products that hold up beyond the demo.</p>
            <a href="#work" className="group col-span-9 col-start-4 mt-8 flex items-center justify-between border-b border-foreground pb-2 text-xs tracking-[0.04em] sm:col-span-10 sm:col-start-3 md:col-span-3 md:col-start-10 md:mt-0">View selected work <span className="transition-transform duration-500 group-hover:translate-y-1">↓</span></a>
          </div>
        </section>

        <section id="work" className="scroll-mt-16 border-t border-foreground py-24 md:py-32 lg:py-36">
          <div className="mb-20 grid grid-cols-12 gap-4 md:mb-24 md:gap-8">
            <p className="section-index col-span-2">01</p>
            <div className="col-span-10 md:col-span-8">
              <p className="eyebrow mb-8 md:mb-12">Selected work / Product &amp; engineering</p>
              <h2 className="font-serif text-[clamp(2.8rem,6vw,6.5rem)] leading-[0.92] tracking-[-0.035em]">Systems with depth,<br /><span className="text-muted-foreground">built with care.</span></h2>
            </div>
            <p className="col-span-10 col-start-3 mt-8 max-w-xs text-[15px] leading-6 text-muted-foreground md:col-span-2 md:col-start-11 md:mt-auto">Three products showing real-time architecture, mobile API integration, and full-stack application development.</p>
          </div>
          <ProjectGrid />
        </section>

        <AboutSection />

        <SkillsSection />

        <section id="contact" className="scroll-mt-16 border-t border-foreground py-20 md:py-28">
          <div className="grid grid-cols-12 gap-4 md:gap-8"><p className="section-index col-span-2">04</p><p className="eyebrow col-span-10">Start a conversation</p></div>
          <h2 className="mt-24 text-pretty font-serif text-[clamp(3.75rem,9vw,9rem)] leading-[0.84] tracking-[-0.04em] md:ml-[8.333%] md:mt-28">Let&apos;s build<br />something reliable.</h2>
          <div className="mt-20 grid grid-cols-12 gap-4 border-t border-border pt-4 md:mt-24 md:gap-8">
            <span className="section-index col-span-3 sm:col-span-2">Connect</span>
            <p className="col-span-9 max-w-md text-sm leading-6 text-muted-foreground sm:col-span-10 md:col-span-4">Open to backend and full-stack opportunities, product collaborations, and thoughtful engineering conversations.</p>
            <div className="col-span-9 col-start-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 sm:col-span-10 sm:col-start-3 md:col-span-4 md:col-start-9 md:mt-0 md:justify-end">
              <CvViewer />
              <a href="/Ramy-Mohamed-CV.pdf" download="Ramy-Mohamed-CV.pdf" className="border border-foreground bg-foreground px-4 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-background transition-colors duration-300 hover:bg-transparent hover:text-foreground">Download CV ↓</a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:mt-20 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-10 md:col-start-3">
              {contactDetails.map((item) => (
                <div key={item.label} className="grid grid-cols-[5rem_minmax(0,1fr)] gap-4 border-t border-border py-4 first:border-foreground md:grid-cols-12 md:gap-8 md:py-5">
                  <span className="section-index pt-1 md:col-span-2">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} className="text-link min-w-0 w-fit max-w-full break-words pb-1 text-base tracking-[-0.01em] md:col-span-8 md:text-lg">
                      {item.value}{item.external && ' ↗'}
                    </a>
                  ) : (
                    <span className="min-w-0 text-base tracking-[-0.01em] text-muted-foreground md:col-span-8 md:text-lg">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 px-5 py-6 text-xs font-semibold uppercase tracking-[0.09em] text-muted-foreground md:grid-cols-12 md:px-10 md:text-[13px] lg:px-14">
          <p className="md:col-span-4">© 2026 Ramy Mohamed. Built with care.</p>
          <div className="flex flex-wrap justify-start gap-x-5 gap-y-3 md:col-span-7 md:col-start-6 md:justify-end md:gap-x-8">
            <a className="nav-link" href="https://github.com/RamyMohamed47" target="_blank" rel="noreferrer">GitHub</a>
            <a className="nav-link" href="https://www.linkedin.com/in/ramy-mohamed-b84920217/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="nav-link" href="#contact">CV</a>
            <a className="nav-link" href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </>
  )
}
