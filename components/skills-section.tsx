const primaryStack = ['TypeScript', 'Node.js', 'Express', 'Next.js', 'MongoDB', 'Socket.IO']

const skillGroups = [
  {
    index: '01',
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'ASP.NET Core', 'Entity Framework Core', 'Zod'],
  },
  {
    index: '02',
    title: 'Frontend & mobile',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Flutter', 'Razor', 'Pug', 'HTML', 'CSS'],
  },
  {
    index: '03',
    title: 'Databases, cloud & delivery',
    skills: ['MongoDB', 'PostgreSQL', 'SQL Server', 'Firebase NoSQL', 'Microsoft Azure', 'Docker', 'GitHub Actions'],
  },
  {
    index: '04',
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'C#', 'C++', 'Python', 'Java'],
  },
  {
    index: '05',
    title: 'Testing & tools',
    skills: ['Git', 'Postman', 'Jest', 'Playwright', 'Stripe Payments', 'Android Studio', 'Figma', 'Jira', 'Confluence', 'Claude Code', 'GPT Codex', 'Obsidian', 'Notion'],
  },
  {
    index: '06',
    title: 'Architecture & fundamentals',
    skills: ['Algorithms', 'Data Structures', 'Object-Oriented Programming', 'SOLID Principles', 'Problem Solving', 'Design Patterns', 'ACID Databases', 'Agile Methodologies', 'Authentication & Authorization (JWT, OAuth 2.0, OpenID Connect)', 'Clean Architecture', 'N-tier Architecture', 'Layered Architecture', 'MVC Architecture'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-foreground py-24 md:py-32 lg:py-36">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <p className="section-index col-span-2">03</p>
        <div className="col-span-10 md:col-span-7">
          <p className="eyebrow mb-8 md:mb-12">Skills / Full engineering toolkit</p>
          <h2 className="font-serif text-[clamp(2.8rem,5.5vw,6rem)] leading-[0.94] tracking-[-0.035em]">
            Backend depth,<br /><span className="text-muted-foreground">broader engineering range.</span>
          </h2>
        </div>
        <p className="col-span-10 col-start-3 mt-8 max-w-sm text-[15px] leading-6 text-muted-foreground md:col-span-3 md:col-start-10 md:mt-auto">
          My strongest work lives in TypeScript and Node.js, supported by experience across web, mobile, .NET, cloud delivery, and software architecture.
        </p>
      </div>

      <div className="mt-20 border border-foreground bg-[#171a19] p-6 text-[#f4f0e7] sm:p-8 md:mt-24 md:p-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="text-[9px] uppercase tracking-[0.2em] text-emerald-300">Primary stack</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">The technologies at the center of my current production-focused work.</p>
          </div>
          <ul className="grid grid-cols-2 border-l-0 border-white/15 sm:grid-cols-3 md:col-span-9 md:border-l lg:grid-cols-6">
            {primaryStack.map((skill, index) => (
              <li key={skill} className="flex min-h-24 flex-col justify-between border-b border-r border-white/15 p-4 last:border-r-0 md:min-h-32 md:p-5">
                <span className="text-[9px] tabular-nums tracking-[0.12em] text-white/35">0{index + 1}</span>
                <span className="mt-8 text-sm font-medium tracking-[-0.01em] md:text-base">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 border-t border-foreground md:mt-24 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            data-skill-group={group.title}
            className="border-b border-border py-8 md:min-h-72 md:px-8 md:py-10 md:odd:border-r md:odd:pl-0"
          >
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="text-sm font-medium">{group.title}</h3>
              <span className="section-index">{group.index}</span>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="border border-border px-3 py-2 text-[10px] leading-4 tracking-[0.03em] text-muted-foreground">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
