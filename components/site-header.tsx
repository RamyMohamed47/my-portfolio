export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background">
      <nav className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-5 md:h-16 md:px-10 lg:px-14" aria-label="Main navigation">
        <a href="#top" className="flex items-baseline gap-3 font-sans text-xs font-medium tracking-[0.03em]">
          <span>Alex Mercer</span>
          <span className="hidden text-[10px] font-normal text-muted-foreground sm:inline">Design practice, London</span>
        </a>
        <div className="flex items-center gap-5 md:gap-10">
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}
