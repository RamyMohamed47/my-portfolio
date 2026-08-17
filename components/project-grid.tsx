type Project = {
  id: string
  index: string
  title: string
  category: string
  status: string
  description: string
  overview: string
  contribution: string
  challenge: string
  solution: string
  stack: string[]
  links: { label: string; href: string }[]
  className: string
  ratio: string
  visual: 'intouch' | 'munir' | 'natours'
}

const projects: Project[] = [
  {
    id: 'intouch',
    index: '01',
    title: 'InTouch',
    category: 'Real-time SaaS',
    status: 'Ongoing',
    description:
      'A full-stack, multi-tenant communication platform built for secure, real-time collaboration.',
    overview:
      'InTouch brings organization spaces, channels, direct messages, invitations, presence, typing indicators, unread counts, and read receipts into one communication product.',
    contribution:
      'I designed and built the TypeScript monorepo across the Express API, Next.js web application, MongoDB persistence layer, shared contracts, authentication flows, and Socket.IO transport.',
    challenge:
      'Keeping REST, real-time events, authentication, and the web client aligned without duplicating contracts or leaking persistence concerns into transport code.',
    solution:
      'Shared Zod contracts, thin controllers and socket handlers, service and repository boundaries, scoped Socket.IO rooms, and rotating HttpOnly refresh sessions behind a same-origin API proxy.',
    stack: ['TypeScript', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Zod', 'Playwright'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/RamyMohamed47/intouch-chatapp',
      },
    ],
    className: 'md:col-span-10',
    ratio: 'aspect-[16/10]',
    visual: 'intouch',
  },
  {
    id: 'munir',
    index: '02',
    title: 'Munir',
    category: 'Mobile API',
    status: 'Flutter + Node.js',
    description:
      'The secure backend powering a Flutter app that delivers curated motivational messages.',
    overview:
      'Munir serves scheduled messages to a Flutter mobile client while supporting content moderation, user-scoped history, administrative statistics, and automated cleanup workflows.',
    contribution:
      'I built the Express and MongoDB backend, integrated Firebase identity verification, synchronized application users, enforced role-based access, and tested the critical authentication and message workflows.',
    challenge:
      'Letting Firebase remain the source of authentication while preserving application-owned users, permissions, and message data in MongoDB.',
    solution:
      'The API verifies Firebase Bearer tokens, upserts users by Firebase UID, attaches the synchronized user to each protected request, and applies user or administrator authorization at the route boundary.',
    stack: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'Firebase Admin', 'Jest', 'Node Cron', 'Pino'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/RamyMohamed47/munir',
      },
    ],
    className: 'md:col-span-5 md:col-start-8 md:mt-24',
    ratio: 'aspect-[4/5]',
    visual: 'munir',
  },
  {
    id: 'natours',
    index: '03',
    title: 'Natours',
    category: 'Full-stack platform',
    status: 'Customized guided build',
    description:
      'A heavily modified tour-booking platform developed from a course-guided foundation.',
    overview:
      'Natours combines tour discovery, geospatial search, reviews, user accounts, image processing, bookings, and online payments in a complete server-rendered product.',
    contribution:
      'I used the guided project as a foundation, then made substantial modifications across the backend and product behavior while working through production-style application concerns.',
    challenge:
      'Coordinating protected resources, nested reviews, booking state, media processing, geospatial data, and payments across one Express application.',
    solution:
      'JWT authentication and role rules, reusable controller patterns, MongoDB aggregation and geospatial indexes, server-side image processing, and Stripe Checkout sessions.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Pug', 'Stripe', 'JWT', 'Mapbox'],
    links: [],
    className: 'md:col-span-6 md:col-start-1 md:mt-24',
    ratio: 'aspect-[3/2]',
    visual: 'natours',
  },
]

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === 'intouch') {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#151a19] p-5 text-[#e9f1eb] sm:p-8 md:p-12" aria-hidden="true">
        <div className="flex h-full gap-3 rounded-sm border border-white/15 bg-[#1d2422] p-3 shadow-2xl sm:gap-5 sm:p-5">
          <div className="hidden w-[24%] shrink-0 flex-col justify-between border-r border-white/10 pr-4 sm:flex">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-300">InTouch</p>
              <div className="mt-8 space-y-3 text-[10px] text-white/50">
                <div className="h-2 w-2/3 rounded-full bg-white/25" />
                <div className="h-2 w-4/5 rounded-full bg-emerald-300/45" />
                <div className="h-2 w-1/2 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-[9px] text-white/45">
              <span className="h-2 w-2 rounded-full bg-emerald-300" /> Live workspace
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <p className="text-[10px] text-white/45">Engineering</p>
                <p className="mt-1 text-xs font-medium sm:text-sm"># product-build</p>
              </div>
              <div className="flex -space-x-1.5">
                {[0, 1, 2].map((item) => (
                  <span key={item} className="h-5 w-5 rounded-full border border-[#1d2422] bg-emerald-200/60" />
                ))}
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-end gap-4 py-4 sm:gap-6">
              <div className="flex gap-3">
                <span className="h-7 w-7 shrink-0 rounded-full bg-[#d8bc95]" />
                <div className="w-full">
                  <div className="h-2 w-24 rounded-full bg-white/35" />
                  <div className="mt-3 h-2 w-[82%] rounded-full bg-white/15" />
                  <div className="mt-2 h-2 w-[62%] rounded-full bg-white/15" />
                </div>
              </div>
              <div className="ml-8 rounded-sm border border-emerald-200/15 bg-emerald-200/5 p-3 text-[9px] text-emerald-100/60 sm:ml-10 sm:p-4">
                Real-time messages, presence, typing and read receipts
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[9px] text-white/35">
              <span>Message #product-build</span><span>Socket connected</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (project.visual === 'munir') {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#e7d9ba] p-7 text-[#202a32] sm:p-10" aria-hidden="true">
        <div className="relative mx-auto flex h-full max-w-sm items-center justify-center">
          <div className="absolute left-0 top-[18%] rounded-full border border-[#202a32]/30 bg-[#f5eedf] px-3 py-2 text-[8px] uppercase tracking-[0.14em] shadow-sm">Firebase auth</div>
          <div className="absolute bottom-[18%] right-0 rounded-full border border-[#202a32]/30 bg-[#f5eedf] px-3 py-2 text-[8px] uppercase tracking-[0.14em] shadow-sm">MongoDB API</div>
          <div className="relative h-[82%] w-[48%] min-w-28 rounded-[1.8rem] border-[5px] border-[#202a32] bg-[#f8f3e8] p-3 shadow-2xl">
            <div className="mx-auto h-1 w-10 rounded-full bg-[#202a32]/30" />
            <p className="mt-6 text-center font-serif text-2xl leading-none sm:text-3xl">Munir</p>
            <p className="mt-2 text-center text-[7px] uppercase tracking-[0.18em] text-[#202a32]/55">A brighter daily rhythm</p>
            <div className="mt-7 border-y border-[#202a32]/20 py-5 text-center font-serif text-sm leading-5 sm:text-base">“Small steps still move you forward.”</div>
            <div className="mt-5 flex justify-center"><span className="rounded-full bg-[#d9a441] px-3 py-1.5 text-[7px] uppercase tracking-[0.15em] text-white">Save message</span></div>
          </div>
          <div className="absolute left-[13%] top-[31%] h-px w-[20%] bg-[#202a32]/25" />
          <div className="absolute bottom-[30%] right-[12%] h-px w-[22%] bg-[#202a32]/25" />
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#173f35] text-[#f2ead6]" aria-hidden="true">
      <div className="absolute inset-x-0 bottom-0 h-[62%] bg-[linear-gradient(145deg,transparent_42%,#295f4d_43%,#295f4d_62%,transparent_63%),linear-gradient(35deg,transparent_38%,#39745e_39%,#39745e_58%,transparent_59%)] opacity-90" />
      <div className="absolute left-[10%] top-[12%]">
        <p className="text-[8px] uppercase tracking-[0.28em] text-[#d6c28f]">Explore differently</p>
        <p className="mt-2 font-serif text-4xl leading-none sm:text-6xl">Natours</p>
      </div>
      <div className="absolute bottom-[12%] right-[8%] w-[48%] border border-white/25 bg-[#f2ead6] p-3 text-[#173f35] shadow-2xl sm:p-5">
        <div className="h-12 bg-[#b5c7a0] sm:h-20" />
        <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.12em]">The Forest Hiker</p>
        <div className="mt-2 flex justify-between text-[8px] text-[#173f35]/60"><span>7 days</span><span>From $497</span></div>
      </div>
      <span className="absolute right-[16%] top-[15%] h-12 w-12 rounded-full bg-[#d6c28f] opacity-80 sm:h-20 sm:w-20" />
    </div>
  )
}

export function ProjectGrid() {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-24 md:grid-cols-12 md:gap-x-8 md:gap-y-0">
        {projects.map((project) => (
          <figure key={project.id} className={project.className}>
            <a href={`#${project.id}`} className="group block" aria-label={`Read the ${project.title} case study`}>
              <div className={`relative overflow-hidden bg-muted ${project.ratio}`}>
                <ProjectVisual project={project} />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/[0.035]" />
              </div>
              <figcaption className="grid grid-cols-[2rem_1fr] gap-3 border-t border-foreground pt-3 md:grid-cols-[2.5rem_1fr]">
                <span className="section-index pt-1">{project.index}</span>
                <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6">
                  <div>
                    <h3 className="font-sans text-base font-medium tracking-[-0.02em] transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-lg">{project.title}</h3>
                    <p className="mt-1 max-w-md text-[15px] leading-6 text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="flex gap-3 text-[10px] uppercase leading-5 tracking-[0.14em] text-muted-foreground sm:flex-col sm:items-end sm:gap-0">
                    <span>{project.category}</span><span>{project.status}</span>
                  </div>
                </div>
              </figcaption>
            </a>
          </figure>
        ))}
      </div>

      <div className="mt-32 border-t border-foreground md:mt-40">
        {projects.map((project) => (
          <article id={project.id} key={project.id} className="scroll-mt-20 border-b border-border py-20 md:py-24">
            <div className="grid grid-cols-12 gap-4 md:gap-8">
              <p className="section-index col-span-2">{project.index}</p>
              <div className="col-span-10 md:col-span-4">
                <p className="eyebrow mb-5">{project.category} / Case study</p>
                <h3 className="font-serif text-[clamp(2.7rem,4.25vw,4.75rem)] leading-[0.94] tracking-[-0.03em]">{project.title}</h3>
                <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">{project.overview}</p>
                {project.links.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-5">
                    {project.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-link pb-1 text-sm">{link.label} ↗</a>
                    ))}
                  </div>
                )}
              </div>
              <div className="col-span-10 col-start-3 mt-14 md:col-span-5 md:col-start-8 md:mt-0">
                <dl>
                  {[
                    ['My contribution', project.contribution],
                    ['Technical challenge', project.challenge],
                    ['Approach', project.solution],
                  ].map(([label, value]) => (
                    <div key={label} className="border-t border-border py-5 first:border-foreground">
                      <dt className="eyebrow mb-3">{label}</dt>
                      <dd className="text-[15px] leading-6 text-muted-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8 flex flex-wrap gap-x-2 gap-y-2">
                  {project.stack.map((technology) => (
                    <span key={technology} className="border border-border px-2.5 py-1.5 text-[9px] uppercase tracking-[0.13em] text-muted-foreground">{technology}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
