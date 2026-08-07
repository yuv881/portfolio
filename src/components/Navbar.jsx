import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'All Projects' },
]

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-20 border-b border-(--border) bg-[color-mix(in_srgb,var(--surface-2)_90%,transparent)] backdrop-blur-[18px]"
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex min-h-18 w-[min(1350px,calc(100%-32px))] items-center justify-between gap-6 max-md:min-h-0 max-md:flex-col max-md:items-start max-md:py-3.5">
        <NavLink
          to="/"
          className="text-[clamp(1.35rem,2vw,1.75rem)] font-bold leading-none text-(--text-primary)"
        >
          Yuvraj
        </NavLink>
        <ul className="m-0 flex list-none items-center gap-1.5 p-0 max-md:w-full">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'inline-flex min-h-10 items-center rounded-(--radius) px-3.5 text-sm font-semibold transition-colors duration-200 max-md:px-3',
                    isActive
                      ? 'bg-(--bg-accent) text-(--text-accent)'
                      : 'text-(--text-secondary) hover:bg-(--bg-accent) hover:text-(--text-accent)',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
