"use client"

import { useEffect } from "react";
import AboutSection from "./sections/About";
import ExperienceSection from "./sections/Experience";
import ProjectsSection from "./sections/Projects";
import HeaderComponent from "./Header";
import TagComponent from "./Tag";

export default function App() {
    return (
        <main className="h-screen w-screen overflow-y-scroll snap-y">
            <HeaderComponent />
            
            <div id="About"/>
            <section className="h-screen w-full snap-start flex items-center justify-center">
                <AboutSection className="" />
            </section>

            <section className="h-screen w-full snap-start flex items-center justify-center" id="Experience">
                <ExperienceSection />
            </section>

            <section className="h-screen w-full snap-start flex items-center justify-center" id="Projects">
                <ProjectsSection />
            </section>
        </main>
    );
}