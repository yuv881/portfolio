import skills from "../../../config/skills.json";

const Skills = () => {
    return (
        <section id="skills" className="py-12 px-4">
            {/* Heading */}
            <div className="text-center mb-16">
                <h2
                    className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-transparent"
                    style={{ WebkitTextStroke: "2px #64748b" }}
                >
                    Skills
                </h2>
                <p className="mt-4 text-slate-500 dark:text-slate-400">
                    Technologies I work with regularly
                </p>
            </div>

            {/* Categories */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skills).map(([categoryName, categorySkills]) => (
                    <div
                        key={categoryName}
                        className="
              group rounded-2xl p-6
              bg-white/70 dark:bg-slate-900/60
              backdrop-blur-lg
              border border-slate-200 dark:border-slate-700
              shadow-sm hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
            "
                    >
                        {/* Category Title */}
                        <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white group-hover:text-purple-600 transition">
                            {categoryName}
                        </h3>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-3">
                            {categorySkills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="
                    flex items-center gap-2
                    px-4 py-2 rounded-full
                    bg-slate-100 dark:bg-slate-800
                    hover:bg-purple-100
                    dark:hover:bg-purple-900/40
                    transition-all duration-200
                    cursor-default
                  "
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-5 h-5 dark:hidden"
                                        dangerouslySetInnerHTML={{
                                            __html: skill.icon_light,
                                        }}
                                    />

                                    <div
                                        className="w-5 h-5 hidden dark:block"
                                        dangerouslySetInnerHTML={{
                                            __html: skill.icon_dark,
                                        }}
                                    />

                                    {/* Name */}
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;