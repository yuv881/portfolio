import SectionHeading from '../ui/SectionHeading'
import { bodyClass, h3Class, sectionClass } from '../ui/styles'

const experience = [
  {
    role: 'Full-Stack Developer',
    period: '2024 - Present',
    detail: 'Building React interfaces, backend routes, dashboards, and portfolio-ready product experiences.',
  },
  {
    role: 'Frontend Developer',
    period: '2023 - 2024',
    detail: 'Focused on responsive UI, reusable components, and clean visual systems for web applications.',
  },
]

const education = [
  {
    degree: 'Computer Science',
    place: 'Software development foundation',
    detail: 'Studied programming fundamentals, web development, databases, and application design.',
  },
]

const TimelineColumn = ({ title, items, type }) => (
  <div className="rounded-(--radius) border border-(--border) bg-(--surface-2) p-[clamp(22px,3vw,30px)]">
    <h3 className={`${h3Class} mb-5.5`}>{title}</h3>
    {items.map((item, index) => (
      <article className={`${index === 0 ? 'pt-0 border-t-0' : 'border-t border-(--border)'} py-5 last:pb-0`} key={type === 'experience' ? `${item.role}-${item.period}` : item.degree}>
        <p className="mb-2.5 text-sm font-bold text-(--text-muted)">
          {type === 'experience' ? item.period : item.place}
        </p>
        <h4 className="mb-2 text-lg font-bold leading-tight text-(--text-primary)">
          {type === 'experience' ? item.role : item.degree}
        </h4>
        <p className={`${bodyClass} mb-0`}>{item.detail}</p>
      </article>
    ))}
  </div>
)

const ExperienceEducationSection = () => (
  <section className={sectionClass}>
    <SectionHeading kicker="Background" title="Experience and education" />
    <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] gap-4.5 max-md:grid-cols-1">
      <TimelineColumn title="Experience" items={experience} type="experience" />
      <TimelineColumn title="Education" items={education} type="education" />
    </div>
  </section>
)

export default ExperienceEducationSection
