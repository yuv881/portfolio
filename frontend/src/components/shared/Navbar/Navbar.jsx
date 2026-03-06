import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return 'light';
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-1000 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className={`mx-auto w-full px-6 transition-all duration-1000`}>
                <div className={`flex justify-between items-center transition-all duration-1000 rounded-full px-6 py-3 ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-900/5 dark:shadow-slate-950/20' : 'bg-transparent'}`}>

                    <div>
                        <a href="#home" className="flex items-center gap-2 group">
                            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
                                Yuvraj<span className="text-slate-400 dark:text-slate-500">.</span>
                            </span>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <ul className='flex gap-8 items-center'>
                            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 hover:tracking-wide w-full"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <a href="#contact" className="px-5 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 hover:border-slate-900 dark:hover:border-white transition-all duration-300">
                            Let's Talk
                        </a>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar