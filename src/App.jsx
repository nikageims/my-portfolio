import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);
    const [portfolioData, setPortfolioData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/nikageims/portfolio-info/main/data.json');
                const data = await response.json();
                setPortfolioData(data);
                setTimeout(() => setLoading(false), 1500);
            } catch (error) {
                console.error("Error:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading || !portfolioData) {
        return (
            <div className="loader-container">
                <h1 className="loader-text family-syncopate text-white">NIKA <span className="text-red-600">GEIMS</span></h1>
                <div className="loader-bar-bg"><div className="loader-bar-fill"></div></div>
            </div>
        );
    }

    return (
        <div className="bg-black text-white min-h-screen selection:bg-red-600">
            {/* Hero Section */}
            <main className="flex flex-col lg:flex-row items-center justify-around px-10 py-20">
                <div className="max-w-3xl space-y-8 text-center lg:text-left">
                    <h2 className="text-red-600 family-orbitron tracking-[10px] uppercase text-sm">{portfolioData.role}</h2>
                    <h1 className="text-7xl md:text-[100px] font-black family-syncopate uppercase italic">
                        {portfolioData.name}<br /><span className="text-red-600">{portfolioData.lastName}</span>
                    </h1>
                    <p className="text-gray-400 text-xl family-orbitron max-w-xl">{portfolioData.description}</p>
                    <div className="pt-8">
                        <a href="#projects" className="bg-red-600 text-white px-10 py-4 font-black family-orbitron hover:bg-white hover:text-red-600 transition shadow-[0_0_20px_rgba(255,0,0,0.4)]">VIEW WORKS</a>
                    </div>
                </div>
                <div className="relative mt-16 lg:mt-0">
                    <div className="neon-circle rounded-full w-72 h-72 md:w-[450px] md:h-[450px] overflow-hidden border-4 border-red-600">
                        <img src="/pr_nikageims.png" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </main>

            {/* Skills */}
            <section id="skills" className="py-20 px-10 max-w-7xl mx-auto">
                <h3 className="text-4xl md:text-6xl font-black family-syncopate mb-16 text-center italic">MY <span className="text-red-600">SKILLS</span></h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {portfolioData.skills.map(skill => (
                        <div key={skill} className="p-6 border border-red-600/20 text-center hover:border-red-600 transition bg-zinc-950/50">
                            <span className="family-orbitron text-zinc-400 font-bold">{skill}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-20 px-10 max-w-7xl mx-auto">
                <h3 className="text-4xl md:text-6xl font-black family-syncopate mb-16 text-center italic uppercase">Projects</h3>
                <div className="grid md:grid-cols-2 gap-10">
                    {portfolioData.projects.map((p, i) => (
                        <div key={i} className="border border-red-600/20 bg-zinc-950 rounded-2xl overflow-hidden group hover:border-red-600 transition">
                            <img src={p.image} className="w-full h-64 object-cover opacity-60 group-hover:opacity-100 transition" alt={p.title} />
                            <div className="p-8">
                                <h4 className="text-2xl font-black family-syncopate italic uppercase">{p.title}</h4>
                                <p className="text-zinc-500 family-orbitron my-4">{p.description}</p>
                                <a href={p.link} target="_blank" className="text-red-600 font-bold border-b border-red-600">OPEN PROJECT</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 text-center border-t border-red-600/10">
                <div className="flex justify-center gap-8 mb-6">
                    <a href={portfolioData.socials.github} target="_blank" className="text-2xl hover:text-red-600 transition"><i className="fab fa-github"></i></a>
                    <a href={portfolioData.socials.instagram} target="_blank" className="text-2xl hover:text-red-600 transition"><i className="fab fa-instagram"></i></a>
                </div>
                <p className="family-orbitron opacity-40 text-xs tracking-[10px]">NIKA GEIMS // 2026</p>
            </footer>
        </div>
    );
}
export default App;