import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 15);
        return () => clearInterval(interval);
    }, []);

    const skills = ["HTML", "CSS", "JavaScript", "React.js", "Python", "JSON"];

    const stars = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 5 + 3}s`,
        size: `${Math.random() * 3}px`
    }));

    if (loading) {
        return (
            <div className="loader-container">
                <h1 className="loader-text family-syncopate">NIKA <span className="text-red-600">GEIMS</span></h1>
                <div className="loader-bar-bg">
                    <div className="loader-bar-fill"></div>
                </div>
                <p className="mt-4 family-orbitron text-red-600 font-bold tracking-[5px]">{progress}%</p>
            </div>
        );
    }

    return (
        <div className={isDark ? 'dark transition-all duration-700' : 'light transition-all duration-700'}>
            {isDark && (
                <div className="fixed inset-0 pointer-events-none z-0">
                    {stars.map(s => (
                        <div key={s.id} className="star" style={{
                            left: s.left, top: '-10px', width: s.size, height: s.size, '--duration': s.duration
                        }} />
                    ))}
                </div>
            )}

            <div className="relative z-10 min-h-screen">
                {/* Nav */}
                <nav className="flex justify-between items-center px-6 md:px-16 py-8 backdrop-blur-md sticky top-0 z-50 border-b border-red-600/10">
                    <div className="text-2xl font-black text-red-600 family-syncopate tracking-tighter hover:scale-105 transition cursor-pointer">NIKA GEIMS</div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex gap-8 family-orbitron text-[10px] font-bold uppercase tracking-[3px]">
                            <a href="#skills" className="hover:text-red-600 transition">Skills</a>
                            <a href="#projects" className="hover:text-red-600 transition">Projects</a>
                        </div>
                        <div className="flex gap-4 text-xl border-l border-red-600/30 pl-6">
                            <a href="https://github.com/nikageims" target="_blank"><i className="fab fa-github hover:text-red-600 transition"></i></a>
                            <a href="https://www.instagram.com/nikoloz_qareli/" target="_blank"><i className="fab fa-instagram hover:text-red-600 transition"></i></a>
                            <button onClick={() => setIsDark(!isDark)} className="text-red-600">
                                {isDark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                            </button>
                        </div>
                    </div>
                </nav>
                <section className="flex flex-col lg:flex-row items-center justify-around px-8 py-20 min-h-[90vh]">
                    <div className="max-w-3xl space-y-8 text-center lg:text-left">
                        <h2 className="text-red-600 family-orbitron font-black tracking-[12px] uppercase text-xs">Full-Stack Dev</h2>
                        <h1 className="text-7xl md:text-[120px] font-black leading-none family-syncopate uppercase italic">
                            NIKA<br /><span className="text-red-600 drop-shadow-[0_0_25px_#ff0000]">GEIMS</span>
                        </h1>
                        <p className="text-xl md:text-2xl opacity-50 family-orbitron font-light max-w-xl">
                            დეველოპერი საუკეთესო სკილებით :)
                        </p>
                        <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                            <a href="#projects" className="bg-red-600 text-white px-14 py-5 family-orbitron font-black uppercase hover:bg-white hover:text-red-600 transition-all shadow-[0_10px_30px_rgba(255,0,0,0.3)]">View Works</a>
                        </div>
                    </div>
                    <div className="relative group mt-16 lg:mt-0">
                        <div className="neon-circle rounded-full w-72 h-72 md:w-[500px] md:h-[500px] overflow-hidden relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                            <img src="/pr_nikageims.png" alt="Nika" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>
                <section id="skills" className="py-32 px-10 max-w-7xl mx-auto">
                    <h3 className="text-5xl md:text-8xl font-black family-syncopate mb-20 text-center italic uppercase">My <span className="text-red-600">Skills</span></h3>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map(skill => (
                            <div key={skill} className={`p-16 border border-red-600/10 text-center hover:border-red-600 transition-all duration-500 group ${isDark ? 'bg-zinc-950/40' : 'bg-white shadow-xl'}`}>
                                <span className="text-2xl font-black family-orbitron uppercase tracking-widest text-zinc-600 group-hover:text-red-600 transition">{skill}</span>
                            </div>
                        ))}
                    </div>
                </section>
                <section id="projects" className="py-32 px-10">
                    <div className={`max-w-6xl mx-auto rounded-[50px] overflow-hidden border border-red-600/20 group ${isDark ? 'bg-zinc-950/80' : 'bg-white shadow-2xl'}`}>
                        <div className="grid lg:grid-cols-2 items-center">
                            <div className="p-16 space-y-8">
                                <h3 className="text-6xl font-black family-syncopate uppercase tracking-tighter italic">CyberX</h3>
                                <p className="text-xl opacity-60 family-orbitron leading-relaxed">
                                    ეს არის ჩემი ყველაზე მასშტაბური პროექტი CyberX .
                                </p>
                                <a href="https://cyberrx.netlify.app/" target="_blank" className="inline-block text-red-600 font-black family-orbitron border-b-2 border-red-600 pb-2 text-xl hover:text-white transition">OPEN PROJECT →</a>
                            </div>
                            <div className="h-[500px] overflow-hidden border-l border-red-600/10">
                                <img src="https://api.microlink.io/?url=https://cyberrx.netlify.app/&screenshot=true&embed=screenshot.url" alt="CyberX" className="w-full h-full object-cover group-hover:scale-110 transition duration-1000 opacity-80 group-hover:opacity-100" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-24 text-center border-t border-red-600/10">
                    <div className="text-3xl font-black family-syncopate text-red-600 mb-4 italic">NIKA GEIMS</div>
                    <p className="text-[10px] tracking-[15px] opacity-40 family-orbitron uppercase">Digital Architecture // 2026</p>
                </footer>
            </div>
        </div>
    );
}

export default App;