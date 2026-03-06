import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import experiences from "../../../config/experience.json";

const Experience = () => {
    return (
        <section id="experience" className="py-12 px-4 relative flex flex-col items-center">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-slate-700/30 rounded-full mix-blend-multiply blur-[120px] -z-10 pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2
                        className="text-5xl tracking-wide md:text-6xl lg:text-7xl font-black text-transparent"
                        style={{ WebkitTextStroke: "2px #64748b" }}
                    >
                        My Journey
                    </h2>
                    <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg font-light max-w-2xl">
                        A timeline of my academics and professional career.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
                    {/* Education Timeline */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-xl">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h3>
                        </div>

                        <div className="flex flex-col gap-6 border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-6 relative">
                            {experiences.Education.map((edu, index) => (
                                <div key={index} className="relative group">
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[35px] top-1.5 h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-950 group-hover:bg-purple-500 transition-colors duration-300"></div>

                                    <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
                                        <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                                            <Calendar size={16} />
                                            <span>{edu.start_date} - {edu.end_date}</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            {edu.school}
                                        </p>

                                        {/* Optional details */}
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {edu.field_of_study && (
                                                <span className="text-xs font-semibold px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full border border-slate-200 dark:border-slate-700">
                                                    {edu.field_of_study}
                                                </span>
                                            )}
                                            {edu.CGPA && (
                                                <span className="text-xs font-semibold px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800">
                                                    CGPA: {edu.CGPA}
                                                </span>
                                            )}
                                            {edu.percentage && (
                                                <span className="text-xs font-semibold px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800">
                                                    Score: {edu.percentage}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Timeline */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                                <Briefcase size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Experience</h3>
                        </div>

                        <div className="flex flex-col gap-6 border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-6 relative">
                            {experiences.Experience.map((exp, index) => (
                                <div key={index} className="relative group">
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[35px] top-1.5 h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-950 group-hover:bg-blue-500 transition-colors duration-300"></div>

                                    <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
                                        <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                            <Calendar size={16} />
                                            <span>{exp.start_date} - {exp.end_date}</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {exp.Role}
                                        </h4>
                                        <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-3">
                                            {exp.Company}
                                        </p>

                                        {exp.description && (
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                                                {exp.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;