import { Link } from 'react-router-dom'
import { bodyClass, buttonBase, h1Class, kickerClass } from '../ui/styles'

const HeroSection = () => (
  <section className="grid min-h-[calc(100vh-160px)] grid-cols-[minmax(0,1.05fr)_minmax(320px,0.75fr)] items-center gap-[clamp(32px,6vw,80px)] max-md:min-h-0 max-md:grid-cols-1">
    <div className="max-w-3xl">
      <p className={kickerClass}>Portfolio</p>
      <h1 className={`${h1Class} max-w-[17ch]`}>Full-stack developer crafting clean web experiences.</h1>
      <p className={`${bodyClass} mb-8 max-w-[66ch] text-[clamp(1.05rem,1.7vw,1.28rem)]`}>
        I turn product ideas into polished React interfaces, practical backend flows,
        and pages that feel composed from the first tap.
      </p>
      <div className="flex flex-wrap gap-3" aria-label="Primary actions">
        <Link className={`${buttonBase} bg-(--text-primary) text-(--surface-2)`} to="/projects">
          View projects
        </Link>
        <a className={`${buttonBase} border border-(--border-strong) bg-(--surface-2) text-(--text-primary)`} href="mailto:hello@example.com">
          Contact
        </a>
      </div>
    </div>

    <aside className="overflow-hidden rounded-(--radius) border border-(--border-strong) bg-(--surface-2)" aria-label="Portfolio snapshot">
      <div className="flex gap-2 border-b border-(--border) p-3.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-(--border-strong)"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-(--border-strong)"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-(--border-strong)"></span>
      </div>
      <div className="grid min-h-90 grid-cols-[78px_1fr] max-md:min-h-75 max-md:grid-cols-[56px_1fr]">
        <div className="border-r border-(--border) bg-(--surface-0)"></div>
        <div className="p-[clamp(22px,4vw,34px)]">
          <div className="mb-3 h-4.5 w-[78%] rounded-full bg-(--text-primary)"></div>
          <div className="mb-3 h-3 w-[56%] rounded-full bg-(--border-strong)"></div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[0, 1, 2, 3].map((item) => (
              <span key={item} className="min-h-24 rounded-(--radius) border border-(--border) bg-(--bg-accent)"></span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  </section>
)

export default HeroSection
