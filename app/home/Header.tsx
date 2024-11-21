

export default function HeaderComponent () {
    // Place self center = horizontally middle
    return (
        <div className="sticky top-0">
            <div className="relative relative h-20 w-screen p-3 min-w-6xl bg-blue-300/75">
                <h1 className="absolute top-8 left-10 text-5xl font-bold hover:underline hover:decoration-4 hover:underline-offset-3 ease-in-out duration-300 hover:decoration-blue-500" ><a className="font-noto-serif" href="#About">Samik Nayak</a></h1>
                <div className="absolute top-10 right-[380px]">
                    <span className="relative w-full h-full">
                    <a className="absolute origin-center left-0 text-lg font-bold tracking-normal hover:tracking-wider underline decoration-white/0 ease-in duration-300 decoration-4 underline-offset-3 hover:decoration-yellow-500" href="#About">About</a>
                    <a className="absolute origin-center left-[100px]  text-lg font-bold tracking-normal hover:tracking-wider underline decoration-white/0 ease-in duration-300 decoration-4 underline-offset-3 hover:decoration-green-500" href="#Experience">Experience</a>
                    <a className="absolute origin-center left-60 text-lg font-bold tracking-normal hover:tracking-wider underline decoration-white/0 ease-in duration-300 decoration-4 underline-offset-3 hover:decoration-red-500" href="#Projects">Projects</a>
                    </span>
                </div>
            </div>
        </div>
    );
}