export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 sm:px-5 md:h-16 md:px-10 lg:px-14" aria-label="Main navigation">
        <a href="#top" className="flex items-baseline gap-3 font-sans text-[13px] font-semibold tracking-[0.025em] md:text-sm">
          <span>Ramy Mohamed</span>
          <span className="hidden text-[11px] font-medium text-muted-foreground sm:inline md:text-xs">Backend &amp; full-stack developer</span>
        </a>
        <div className="flex items-center gap-4 sm:gap-5 md:gap-10">
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}
