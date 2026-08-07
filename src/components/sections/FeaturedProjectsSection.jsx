import { Link } from 'react-router-dom'
import ProjectCard from '../projects/ProjectCard'
import SectionHeading from '../ui/SectionHeading'
import { sectionClass, textLinkClass } from '../ui/styles'

const FeaturedProjectsSection = ({ projects }) => (
  <section className={sectionClass}>
    <SectionHeading
      kicker="Selected work"
      title="Recent projects"
      className="mb-7 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start"
      action={<Link className={textLinkClass} to="/projects">See all projects</Link>}
    />
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4.5">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  </section>
)

export default FeaturedProjectsSection
