"use client"

import { useEffect, useState } from "react";
import AboutSection from "./sections/About";
import ExperienceSection from "./sections/Experience";
import ProjectsSection from "./sections/projects/Projects";
import HeaderComponent from "./Header";


export default function App() {
    const [activeSection, setActiveSection] = useState('About');

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        // Observe all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <main className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory">
            <HeaderComponent activeSection={activeSection} />
            
            <section className="h-screen w-full flex items-center justify-center snap-start" id="About">
                <AboutSection className="" />
            </section>

            <section className="h-screen w-full flex items-center justify-center snap-start" id="Experience">
                <ExperienceSection />
            </section>

            <section className="h-screen w-full flex items-center justify-center snap-start" id="Projects">
                <ProjectsSection />
            </section>
        </main>
    );
}