import { bodyClass, h2Class, h3Class, textLinkClass } from '../ui/styles'

const ProjectPreview = ({ project }) => {
  if (project.image) {
    return (
      <img
        className="block aspect-16/10 w-full border-b border-(--border) bg-(--surface-0) object-cover"
        src={project.image}
        alt={`${project.title} preview`}
      />
    )
  }

  return (
    <div className="grid min-h-48 place-items-center border-b border-(--border) bg-(--surface-0)">
      <div className="grid w-[calc(100%-44px)] place-items-center rounded-(--radius) border border-(--border-strong) bg-(--surface-2) px-8 py-12">
        <span className="block h-4 w-[min(68%,260px)] rounded-full bg-(--text-primary)"></span>
        <span className="mt-11 block h-4 w-[min(46%,180px)] rounded-full bg-(--bg-accent)"></span>
      </div>
    </div>
  )
}

const ProjectActions = ({ project }) => (
  <div className="mt-4.5 flex flex-wrap gap-4">
    {project.link && (
      <a className={textLinkClass} href={project.link} target="_blank" rel="noreferrer">
        Live site
      </a>
    )}
    {project.github && (
      <a className={textLinkClass} href={project.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    )}
  </div>
)

const ProjectCard = ({ project, variant = 'featured' }) => {
  const isArchive = variant === 'archive'
  const titleClass = isArchive ? h2Class : h3Class
  const TitleTag = isArchive ? 'h2' : 'h3'

  return (
    <article className={`${isArchive ? 'grid grid-rows-[auto_1fr]' : ''} overflow-hidden rounded-(--radius) border border-(--border) bg-(--surface-2)`}>
      <ProjectPreview project={project} />
      <div className="p-6">
        <p className="mb-2.5 text-sm font-bold text-(--text-muted)">
          {isArchive ? `Project ${String(project.id).padStart(2, '0')}` : 'Case study'}
        </p>
        <TitleTag className={titleClass}>{project.title}</TitleTag>
        <p className={`${bodyClass} ${isArchive ? '' : 'mb-0'}`}>{project.description}</p>
        <ProjectActions project={project} />
      </div>
    </article>
  )
}

export default ProjectCard
