import projects from '../config/All_Proects.json'
import ProjectCard from '../components/projects/ProjectCard'
import { bodyClass, h1Class, kickerClass, pageClass } from '../components/ui/styles'

const AllProjects = () => {
  return (
    <div className={pageClass}>
      <section className="max-w-3xl pb-[clamp(28px,5vw,56px)]">
        <p className={kickerClass}>Archive</p>
        <h1 className={`${h1Class} max-w-[10ch]`}>All projects</h1>
        <p className={`${bodyClass} mb-8 max-w-[66ch] text-[clamp(1.05rem,1.7vw,1.28rem)]`}>
          A focused collection of interfaces, experiments, and application work.
          Each piece is shaped around clarity, responsive behavior, and useful detail.
        </p>
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4.5">
        {projects.map((project) => (
          <ProjectCard project={project} variant="archive" key={project.id} />
        ))}
      </section>
    </div>
  )
}

export default AllProjects
