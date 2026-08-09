import { bodyClass, h2Class, h3Class } from '../ui/styles'

const ProjectPreview = ({ project }) => {
  if (project.image) {
    return (
      <div className="relative overflow-hidden border-b border-(--border) bg-(--surface-0)">
        <img
          className="block aspect-16/10 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          src={project.image}
          alt={`${project.title} preview`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden border-b border-(--border) bg-(--surface-0) p-6">
      <div className="grid min-h-48 place-items-center rounded-xl border border-(--border-strong) bg-(--surface-2) p-6 transition-transform duration-500 ease-out group-hover:scale-[1.02] shadow-xs">
        <div className="w-full space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/60" />
            <span className="h-3 w-3 rounded-full bg-amber-400/60" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/60" />
          </div>
          <span className="block h-3.5 w-[70%] rounded-full bg-(--text-primary)/20 transition-all duration-300 group-hover:w-[85%]" />
          <span className="block h-3.5 w-[45%] rounded-full bg-(--text-accent)/30 transition-all duration-300 group-hover:w-[60%]" />
        </div>
      </div>
    </div>
  )
}

const ProjectActions = ({ project }) => (
  <div className="mt-6 flex items-center gap-4">
    {project.link && (
      <a
        className="group/btn inline-flex items-center gap-1.5 rounded-full bg-(--bg-accent) px-4 py-2 text-xs font-bold text-(--text-accent) transition-all duration-200 hover:bg-[#0C447C] hover:text-white hover:shadow-xs active:scale-95"
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        <span>Live site</span>
        <svg
          className="h-3.5 w-3.5 stroke-current transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    )}
    {project.github && (
      <a
        className="group/btn inline-flex items-center gap-1.5 text-xs font-bold text-(--text-secondary) transition-colors duration-200 hover:text-(--text-primary) hover:underline hover:underline-offset-4"
        href={project.github}
        target="_blank"
        rel="noreferrer"
      >
        <span>GitHub</span>
        <svg
          className="h-3.5 w-3.5 stroke-current transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    )}
  </div>
)

const ProjectCard = ({ project, variant = 'featured' }) => {
  const isArchive = variant === 'archive'
  const titleClass = isArchive ? h2Class : h3Class
  const TitleTag = isArchive ? 'h2' : 'h3'

  return (
    <article
      className={`group relative ${isArchive ? 'grid grid-rows-[auto_1fr]' : ''
        } overflow-hidden rounded-2xl border border-(--border) bg-(--surface-2) transition-all duration-300 hover:-translate-y-1.5 hover:border-(--border-strong) hover:shadow-xl hover:shadow-black/5`}
    >
      <ProjectPreview project={project} />
      <div className="flex flex-col justify-between p-6">
        <div>
          <TitleTag className={`${titleClass} transition-colors duration-200 group-hover:text-black`}>
            {project.title}
          </TitleTag>
          <p className={`${bodyClass} ${isArchive ? '' : 'mb-0'}`}>{project.description}</p>
          {project.techStack && project.techStack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-full border border-(--border) bg-(--surface-0) px-2.5 py-0.5 text-xs font-semibold text-(--text-secondary) transition-all duration-200 hover:border-(--text-primary)/30 hover:bg-white hover:text-(--text-primary) hover:shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <ProjectActions project={project} />
      </div>
    </article>
  )
}

export default ProjectCard
