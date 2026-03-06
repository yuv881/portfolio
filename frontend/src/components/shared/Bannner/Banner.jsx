import { Linkedin, Github, Mail, ArrowRight, Code2 } from "lucide-react"

const Banner = () => {
    return (
        <section id="home" className="relative w-full h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Animated Background Blobs - Monochrome */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-slate-200 dark:bg-slate-800 rounded-full mix-blend-multiply filter blur-2xl opacity-50 dark:opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-slate-300 dark:bg-slate-700 rounded-full mix-blend-multiply filter blur-2xl opacity-50 dark:opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-200 dark:bg-slate-900 rounded-full mix-blend-multiply filter blur-2xl opacity-50 dark:opacity-20 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16">

                {/* Left Side - Avatar Section */}
                <div className="shrink-0 relative group flex justify-center w-full lg:w-auto">
                    <div className="absolute -inset-1 bg-linear-to-r from-slate-300 to-slate-200 dark:from-slate-600 dark:to-slate-400 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full border-4 border-white dark:border-slate-900 overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
                        <img
                            src=""
                            alt="Yuvraj Avatar"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 max-w-2xl">

                    {/* Main Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-transparent"
                            style={{
                                WebkitTextStroke: '2px #64748b', // slate-500
                            }}>
                            <span className="transition-colors duration-1000 hover:text-slate-900 dark:hover:text-white cursor-default">Hey, I'm </span><br />
                            <span
                                className="text-transparent transition-colors duration-1000 hover:text-slate-900 dark:hover:text-white cursor-default"
                                style={{
                                    WebkitTextStrokeWidth: '2px', // let CSS handle color
                                }}
                            >
                                Yuvraj
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed mt-6">
                            I craft digital experiences that combine stunning design with robust engineering. Full Stack Developer specializing in cutting-edge web technologies.
                        </p>
                    </div>

                    {/* Call to Action Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 w-full justify-center lg:justify-start">
                        <a href="#projects" className="group relative px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] active:scale-95 flex items-center gap-2 w-full sm:w-auto justify-center hover:bg-slate-800 dark:hover:bg-slate-200">
                            <Code2 size={20} className="text-white dark:text-slate-800" />
                            View My Work
                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                        </a>

                        <div className="flex items-center gap-4">
                            <SocialLink href="https://github.com/yuv881" icon={<Github size={22} />} label="GitHub" />
                            <SocialLink href="https://www.linkedin.com/in/yuv881?utm_source=share_via&utm_content=profile&utm_medium=member_android" icon={<Linkedin size={22} />} label="LinkedIn" />
                            <SocialLink href="mailto:yuvrajsinghshaktawat28@gmail.com" icon={<Mail size={22} />} label="Mail" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Decorative bottom fade */}
            <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-slate-50 dark:from-[#020617] to-transparent pointer-events-none"></div>
        </section>
    )
}

const SocialLink = ({ href, icon, label, mailto }) => (
    <a
        href={mailto ? `mailto:${mailto}` : href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group relative p-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-purple-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 ease-out hover:-translate-y-1"
    >
        {icon}
    </a>
)

export default Banner