import { Github, ExternalLink } from "lucide-react"
import projectList from "../../../config/projectList.json"

const Projects = () => {
    return (
        <section id="projects" className="relative w-full py-12 min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-purple-500/10 dark:bg-slate-800/50 rounded-[100%] mix-blend-multiply blur-[120px] -z-10 pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 space-y-4 text-center">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-wide text-transparent"
                        style={{
                            WebkitTextStroke: '2px #64748b', // slate-500
                        }}>
                        Featured Projects
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl font-light text-lg">
                        A selection of my recent work. Explore my full stack applications, from e-commerce to AI tools.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projectList.map((project) => (
                        <div key={project.id} className='group flex flex-col bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700'>

                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden w-full">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Links on Image Hover */}
                                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-full backdrop-blur-sm shadow-lg transition-transform hover:scale-110"
                                        aria-label="View Source Code"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-full backdrop-blur-sm shadow-lg transition-transform hover:scale-110"
                                        aria-label="View Live Project"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="flex flex-col flex-1 p-6 md:p-8">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1 text-sm md:text-base">
                                    {project.description}
                                </p>

                                {/* Technologies Tags */}
                                <div className='flex flex-wrap gap-2 mt-auto'>
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className='text-xs font-semibold px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects