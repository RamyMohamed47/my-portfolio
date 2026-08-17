import Image from 'next/image'

const capabilities = ['Creative direction', 'Product design', 'Design systems', 'Front-end development', 'Prototyping', 'Brand experience']

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-foreground py-24 md:py-40 lg:py-48">
      <div className="mb-20 grid grid-cols-12 gap-4 md:mb-28 md:gap-8">
        <p className="section-index col-span-2">02</p>
        <p className="eyebrow col-span-10">Profile / Approach</p>
      </div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-8 md:col-start-3">
          <h2 className="text-pretty font-serif text-[clamp(2.8rem,5.8vw,6.5rem)] leading-[0.96] tracking-[-0.035em]">I work between design and technology, where ideas become tangible.</h2>
        </div>
        <div className="md:col-span-3 md:col-start-2 md:row-start-2 md:mt-24">
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden bg-muted"><Image src="/images/alex-portrait.png" alt="Alex Mercer in their London studio" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover grayscale-[28%]" /></div>
            <figcaption className="mt-3 flex justify-between text-[10px] uppercase leading-4 tracking-[0.12em] text-muted-foreground"><span>London studio</span><span>Spring 2026</span></figcaption>
          </figure>
        </div>
        <div className="md:col-span-7 md:col-start-6 md:row-start-2 md:mt-24">
          <div className="grid grid-cols-1 gap-8 text-base leading-7 text-muted-foreground sm:grid-cols-2">
            <p>I&apos;m an independent designer and developer based in London. For the past twelve years, I&apos;ve partnered with ambitious teams to shape products, identities, and digital experiences.</p>
            <p>My approach is collaborative and detail-minded: understand the real problem, find the clearest expression, then make it beautifully and responsibly.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 border-t border-foreground pt-4 sm:grid-cols-[1fr_2fr] sm:gap-8 md:mt-24">
            <p className="eyebrow py-3">Capabilities</p>
            <ul>
              {capabilities.map((item, index) => <li key={item} className="flex items-baseline justify-between border-b border-border py-3 text-sm"><span>{item}</span><span className="section-index">0{index + 1}</span></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
