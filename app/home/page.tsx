"use client"

import { useEffect } from "react";

import AboutSection from "./sections/About";
import HeaderComponent from "./Header";
import TagComponent from "./Tag";

export default function App () {
    useEffect(()=>{
        window.addEventListener("scroll", () => {})
    });

    return (
        <div className="w-screen min-h-screen" id="top">
            <div id="About"></div>
            <HeaderComponent />
            <div className="place-self-center"><AboutSection /></div>
            <div className="place-self-center mt-20">
                <TagComponent />
            <div className="h-screen"></div>
            <div id="bot"></div>
            </div>
        </div>
    );
}