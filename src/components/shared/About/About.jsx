import { Code2, MonitorSmartphone, Server, Zap, Globe, Cpu } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="relative w-full py-12 min-h-screen flex items-center justify-center overflow-hidden">

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-20 text-center">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent"
                        style={{
                            WebkitTextStroke: '2px #64748b', // slate-500
                        }}>
                        About Me
                    </h2>
                    <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light leading-relaxed">
                        I am a passionate Full Stack Developer who loves building digital solutions that merge <strong className="font-semibold text-slate-800 dark:text-slate-200">beautiful design</strong> with <strong className="font-semibold text-slate-800 dark:text-slate-200">powerful engineering</strong>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Text Content & Stats */}
                    <div className="lg:col-span-6 flex flex-col gap-8">
                        <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                <TerminalIcon />
                                My Journey
                            </h3>
                            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed font-light text-base md:text-lg">
                                <p>
                                    I build scalable web applications using React and Node.js, turning complex requirements into simple, intuitive experiences while continuously learning and exploring modern technologies.
                                </p>
                            </div>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <StatCard number="1" text="Year Experience" />
                            <StatCard number="15+" text="Projects Delivered" />
                            <StatCard number="10+" text="Tech Stack Tools" />
                            <StatCard number="100%" text="Client Satisfaction" />
                        </div>
                    </div>

                    {/* Right: What I Do (Cards) */}
                    <div className="lg:col-span-6 h-full">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center lg:text-left">
                            What I Do
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <FeatureCard
                                icon={<MonitorSmartphone />}
                                title="Frontend Dev"
                                desc="Creating responsive, pixel-perfect UI with modern frameworks."
                            />
                            <FeatureCard
                                icon={<Server />}
                                title="Backend Systems"
                                desc="Building robust, scalable RESTful APIs and microservices."
                            />
                            <FeatureCard
                                icon={<Globe />}
                                title="Web Optimization"
                                desc="Ensuring blazing fast load times and top SEO performance."
                            />
                            <FeatureCard
                                icon={<Code2 />}
                                title="Clean Architecture"
                                desc="Writing maintainable code using industry best practices."
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Sub-components for cleaner structure
const TerminalIcon = () => (
    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
        <Cpu size={20} />
    </div>
);

const FeatureCard = ({ icon, title, desc }) => (
    <div className="group relative bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-900/50">
        <div className="mb-4 inline-flex p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
            {icon}
        </div>
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">{desc}</p>
    </div>
);

const StatCard = ({ number, text }) => (
    <div className="bg-white/40 dark:bg-slate-800/20 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-300">
        <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {number}
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            {text}
        </p>
    </div>
);

export default About;
