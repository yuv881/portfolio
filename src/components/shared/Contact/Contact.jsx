import { Mail, User, MessageSquare, Send } from "lucide-react"

const Contact = () => {
    return (
        <section id="contact" className="relative w-full py-12 min-h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute top-1/4 -right-10 w-96 h-96 bg-slate-200 dark:bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 -left-10 w-96 h-96 bg-slate-300 dark:bg-slate-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-20 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    <div className="flex flex-col gap-6 w-full lg:w-1/2">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-normal text-transparent"
                                style={{
                                    WebkitTextStroke: '1px #64748b', // slate-500
                                }}>
                                <span
                                    className="text-transparent transition-colors duration-1000 hover:text-slate-900 dark:hover:text-white cursor-default"
                                    style={{
                                        WebkitTextStroke: '1px #94a3b8', // slate-400
                                    }}
                                >
                                    Let's build
                                </span><br />
                                <span
                                    className="text-transparent transition-colors duration-1000 hover:text-slate-900 dark:hover:text-white cursor-default"
                                    style={{
                                        WebkitTextStroke: '1px #94a3b8', // slate-400
                                    }}
                                >
                                    something great
                                </span>
                            </h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-md">
                                Have an idea, a project in mind, or just want to say hi? I'm always open to discussing new opportunities and collaborations.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                                <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                                    <Mail size={24} className="text-slate-500 dark:text-slate-400" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-500">Email</span>
                                    <a href="mailto:yuvrajsinghshaktawat28@gmail.com" className="text-lg text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors duration-300">yuvrajsinghshaktawat28@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <form className="flex flex-col gap-6 w-full bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800/50 p-8 md:p-10 rounded-3xl shadow-xl dark:shadow-2xl relative">
                            <div className="absolute -inset-px bg-linear-to-b from-slate-200 dark:from-slate-700/50 to-transparent rounded-3xl -z-10 pointer-events-none"></div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <User size={18} className="text-slate-400 dark:text-slate-500" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail size={18} className="text-slate-400 dark:text-slate-500" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">Message</label>
                                <div className="relative">
                                    <div className="absolute top-4 left-4 pointer-events-none">
                                        <MessageSquare size={18} className="text-slate-400 dark:text-slate-500" />
                                    </div>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="group relative w-full flex items-center justify-center gap-3 bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold rounded-xl py-4 overflow-hidden transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl dark:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.3)] active:scale-95 mt-2"
                            >
                                <span>Send Message</span>
                                <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact