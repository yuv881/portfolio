import SectionHeading from '../ui/SectionHeading'
import { sectionClass } from '../ui/styles'

const strengths = [
  'React interfaces with clean component boundaries',
  'Responsive layouts that keep content readable',
  'Full-stack features shaped around real user flows',
]

const FocusSection = () => (
  <section className={sectionClass}>
    <SectionHeading kicker="Focus" title="Careful structure, clear screens, practical delivery." />
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t border-(--border-strong)">
      {strengths.map((strength) => (
        <article className="flex gap-4 border-b border-(--border) py-6 pr-6 max-md:pr-0" key={strength}>
          <span className="mt-2.5 h-3 w-3 shrink-0 rounded-full bg-(--text-accent)" aria-hidden="true"></span>
          <p className="mb-0 font-semibold leading-7 text-(--text-primary)">{strength}</p>
        </article>
      ))}
    </div>
  </section>
)

export default FocusSection
