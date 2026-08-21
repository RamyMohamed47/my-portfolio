import Image from 'next/image'

type ProjectImage = {
  src: string
  width: number
  height: number
  alt: string
}

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
  logo: Omit<ProjectImage, 'alt'>
  screenshots: ProjectImage[]
  mediaLayout: 'landscape' | 'feature-stack' | 'portrait'
  mediaBackground: string
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
    ratio: 'aspect-[4/5] sm:aspect-[16/10]',
    logo: {
      src: '/projects/intouch/logo.jpeg',
      width: 1254,
      height: 1254,
    },
    screenshots: [
      {
        src: '/projects/intouch/sign-in.jpeg',
        width: 1599,
        height: 854,
        alt: 'InTouch sign-in screen with the collaboration workspace branding.',
      },
      {
        src: '/projects/intouch/channel.jpeg',
        width: 1599,
        height: 849,
        alt: 'InTouch DevOps channel showing the workspace sidebar and real-time chat interface.',
      },
    ],
    mediaLayout: 'landscape',
    mediaBackground: '#07101f',
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
    logo: {
      src: '/projects/munir/logo.jpeg',
      width: 1080,
      height: 1062,
    },
    screenshots: [
      {
        src: '/projects/munir/compose.jpeg',
        width: 720,
        height: 1511,
        alt: 'Munir Flutter app screen for composing and submitting a positive message in Arabic.',
      },
      {
        src: '/projects/munir/message.jpeg',
        width: 720,
        height: 1508,
        alt: 'Munir Flutter app screen displaying a received motivational message in Arabic.',
      },
    ],
    mediaLayout: 'portrait',
    mediaBackground: '#158c77',
  },
  {
    id: 'wadiways',
    index: '03',
    title: 'WadiWays',
    category: 'Travel platform',
    status: 'Reengineered product',
    description:
      'An Egypt-focused booking platform with hardened authentication, operational logging, and admin tooling.',
    overview:
      'WadiWays turns Egyptian destinations into a complete booking experience spanning itinerary discovery, experience details, accounts, reviews, Stripe test checkout, and administrative workflows.',
    contribution:
      'I rebranded and substantially extended the platform across the backend and server-rendered frontend, adding login rate limiting, structured application logging, refresh-token authentication, and admin-facing product controls.',
    challenge:
      'Evolving a feature-rich Express application while keeping authentication resilient, operational behavior observable, and privileged administration flows properly separated.',
    solution:
      'An access-and-refresh-token flow, throttled login attempts, structured logs, role-gated admin interfaces, reusable controller patterns, and Stripe Checkout sessions.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Pug', 'Stripe', 'JWT', 'Rate limiting'],
    links: [],
    className: 'md:col-span-6 md:col-start-1 md:mt-24',
    ratio: 'aspect-[4/5]',
    logo: {
      src: '/projects/wadiways/logo.png',
      width: 1024,
      height: 1024,
    },
    screenshots: [
      {
        src: '/projects/wadiways/explore.webp',
        width: 1600,
        height: 766,
        alt: 'WadiWays Explore Egypt page showing destination experience cards.',
      },
      {
        src: '/projects/wadiways/experience.webp',
        width: 1600,
        height: 766,
        alt: 'WadiWays experience detail page for a Luxor West Bank cycling trip.',
      },
      {
        src: '/projects/wadiways/sign-in.webp',
        width: 1600,
        height: 764,
        alt: 'WadiWays login page with email, Google, and GitHub authentication options.',
      },
    ],
    mediaLayout: 'feature-stack',
    mediaBackground: '#eaf2fb',
  },
]

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: project.mediaBackground }}
      data-project-media={project.id}
    >
      {project.mediaLayout === 'portrait' ? (
        <div className="flex h-full items-center justify-center gap-3 p-5 sm:gap-5 sm:p-8">
          {project.screenshots.map((screenshot, index) => (
            <div
              key={screenshot.src}
              className={`h-[86%] overflow-hidden border border-white/35 bg-white shadow-2xl ${index === 0 ? '-translate-y-[3%]' : 'translate-y-[3%]'}`}
            >
              <Image
                src={screenshot.src}
                width={screenshot.width}
                height={screenshot.height}
                alt={screenshot.alt}
                sizes="(max-width: 767px) 38vw, 17vw"
                className="h-full w-auto max-w-none object-contain"
              />
            </div>
          ))}
        </div>
      ) : project.mediaLayout === 'feature-stack' ? (
        <div className="flex h-full flex-col items-center justify-center gap-3 p-4 sm:gap-4 sm:p-7 md:gap-5 md:p-10">
          {project.screenshots.map((screenshot, index) => (
            <div
              key={screenshot.src}
              className={`w-[82%] overflow-hidden rounded-[0.5rem] border border-black/15 bg-white shadow-2xl ${index === 0 ? '-translate-x-[3%]' : index === 1 ? 'translate-x-[3%]' : '-translate-x-[1%]'}`}
            >
              <Image
                src={screenshot.src}
                width={screenshot.width}
                height={screenshot.height}
                alt={screenshot.alt}
                sizes="(max-width: 767px) 70vw, 32vw"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={`grid h-full grid-cols-1 items-center gap-3 p-4 sm:gap-5 sm:p-7 md:gap-7 md:p-10 ${project.mediaLayout === 'landscape' ? 'sm:grid-cols-2' : ''}`}>
          {project.screenshots.map((screenshot, index) => (
            <div
              key={screenshot.src}
              className={`overflow-hidden border border-black/15 bg-white shadow-2xl ${index === 0 ? '-translate-x-[3%] sm:translate-x-0 sm:-translate-y-[10%]' : 'translate-x-[3%] sm:translate-x-0 sm:translate-y-[10%]'}`}
            >
              <Image
                src={screenshot.src}
                width={screenshot.width}
                height={screenshot.height}
                alt={screenshot.alt}
                sizes="(max-width: 767px) 43vw, 38vw"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectTitle({ project, detailed = false }: { project: Project; detailed?: boolean }) {
  const isWadiWays = project.id === 'wadiways'

  return (
    <div className="flex items-center gap-3 md:gap-4">
      <span
        className={`relative shrink-0 overflow-hidden rounded-[0.75rem] ${isWadiWays ? 'bg-[#eaf2fb]' : 'bg-white'} ${detailed ? 'h-14 w-14 md:h-16 md:w-16' : 'h-9 w-9'}`}
        aria-hidden="true"
      >
        <Image
          src={project.logo.src}
          width={project.logo.width}
          height={project.logo.height}
          alt=""
          sizes={detailed ? '(max-width: 767px) 56px, 64px' : '36px'}
          className={`h-full w-full ${isWadiWays ? 'object-contain p-1' : 'object-cover'}`}
        />
      </span>
      <h3
        className={
          detailed
            ? 'font-serif text-[clamp(2.7rem,4.25vw,4.75rem)] leading-[0.94] tracking-[-0.03em]'
            : 'font-sans text-base font-medium tracking-[-0.02em] transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-lg'
        }
      >
        {project.title}
      </h3>
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
                    <ProjectTitle project={project} />
                    <p className="mt-2 max-w-md text-[15px] leading-6 text-muted-foreground">{project.description}</p>
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
                <ProjectTitle project={project} detailed />
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
