import Image from 'next/image'

const projects = [
  { title: 'Monocle Editions', category: 'Digital editorial', year: '2026', description: 'A quieter, more considered reading experience for an independent culture journal.', image: '/images/monocle-editorial.png', className: 'md:col-span-10', ratio: 'aspect-[16/10]', sizes: '(max-width: 768px) 100vw, 78vw' },
  { title: 'Fieldwork', category: 'Product design', year: '2025', description: 'A city guide built around curiosity, not algorithms.', image: '/images/fieldwork-mobile.png', className: 'md:col-span-4 md:col-start-9 md:mt-36', ratio: 'aspect-[4/5]', sizes: '(max-width: 768px) 100vw, 32vw' },
  { title: 'Forma', category: 'Identity & web', year: '2025', description: 'A precise visual system for an architecture practice in transition.', image: '/images/forma-identity.png', className: 'md:col-span-6 md:col-start-1 md:-mt-28', ratio: 'aspect-[3/2]', sizes: '(max-width: 768px) 100vw, 48vw' },
  { title: 'Index', category: 'Product strategy', year: '2024', description: 'Complex operational data, made legible and useful.', image: '/images/index-dashboard.png', className: 'md:col-span-9 md:col-start-4 md:mt-20', ratio: 'aspect-[16/9]', sizes: '(max-width: 768px) 100vw, 72vw' },
  { title: 'Serein', category: 'Commerce experience', year: '2024', description: 'An understated digital flagship rooted in material and ritual.', image: '/images/serein-packaging.png', className: 'md:col-span-5 md:col-start-2 md:mt-28', ratio: 'aspect-[4/5]', sizes: '(max-width: 768px) 100vw, 40vw' },
]

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 gap-y-24 md:grid-cols-12 md:gap-x-8 md:gap-y-0">
      {projects.map((project, index) => (
        <figure key={project.title} className={project.className}>
          <a href="#contact" className="group block" aria-label={`View ${project.title} project`}>
            <div className={`relative overflow-hidden bg-muted ${project.ratio}`}>
              <Image src={project.image} alt={`${project.title} project presentation`} fill priority={index < 2} sizes={project.sizes} className="object-cover transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.018] group-hover:brightness-[0.96]" />
            </div>
            <figcaption className="grid grid-cols-[2rem_1fr] gap-3 border-t border-foreground pt-3 md:grid-cols-[2.5rem_1fr]">
              <span className="section-index pt-1">0{index + 1}</span>
              <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6">
                <div>
                  <h3 className="font-sans text-base font-medium tracking-[-0.02em] transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-lg">{project.title}</h3>
                  <p className="mt-1 max-w-md text-sm leading-6 text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex gap-3 text-[10px] uppercase leading-5 tracking-[0.14em] text-muted-foreground sm:flex-col sm:items-end sm:gap-0">
                  <span>{project.category}</span><span>{project.year}</span>
                </div>
              </div>
            </figcaption>
          </a>
        </figure>
      ))}
    </div>
  )
}
