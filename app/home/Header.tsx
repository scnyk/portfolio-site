export default function HeaderComponent({activeSection}: {
    activeSection: string,
}) {
    return (
        <div className="sticky top-0">
            <div className="relative h-20 w-screen p-3 min-w-6xl">
                <h1 className="absolute top-8 left-10 text-5xl font-bold hover:underline hover:decoration-4 hover:underline-offset-3 ease-in-out duration-300 hover:decoration-blue-500">
                    <a className="font-noto-serif" href="#About">Samik Nayak</a>
                </h1>
                <div className="absolute top-10 right-[380px]">
                    <span className="relative w-full h-full">
                        <a 
                            className={`absolute origin-center left-0 text-lg font-bold tracking-normal hover:tracking-wider underline decoration-4 underline-offset-3 ease-in duration-300 
                                ${activeSection === 'About' 
                                    ? 'decoration-yellow-500' 
                                    : 'decoration-white/0 hover:decoration-yellow-500'}`} 
                            href="#About"
                        >
                            About
                        </a>
                        <a 
                            className={`absolute origin-center left-[100px] text-lg font-bold tracking-normal hover:tracking-wider underline decoration-4 underline-offset-3 ease-in duration-300 
                                ${activeSection === 'Experience' 
                                    ? 'decoration-green-500' 
                                    : 'decoration-white/0 hover:decoration-green-500'}`}
                            href="#Experience"
                        >
                            Experience
                        </a>
                        <a 
                            className={`absolute origin-center left-60 text-lg font-bold tracking-normal hover:tracking-wider underline decoration-4 underline-offset-3 ease-in duration-300 
                                ${activeSection === 'Projects' 
                                    ? 'decoration-red-500' 
                                    : 'decoration-white/0 hover:decoration-red-500'}`}
                            href="#Projects"
                        >
                            Projects
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}