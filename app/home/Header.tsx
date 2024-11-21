

export default function HeaderComponent () {
    // Place self center = horizontally middle
    return (
        <div className="sticky top-0">
            <div className="relative relative h-20 w-screen p-3 min-w-6xl">
                <h1 className="absolute top-8 left-10 text-5xl font-bold hover:underline hover:decoration-4 hover:underline-offset-3 ease-in-out duration-300 hover:decoration-blue-500" ><a href="#About">Samik Nayak</a></h1>
                <span className="absolute top-6 right-24 flex flex-row gap-24">
                    <a className="text-lg font-bold underline decoration-white/0 ease-in duration-300 decoration-4 underline-offset-3  hover:decoration-yellow-500" href="#About">About</a>
                    <a className="text-lg font-bold underline decoration-white/0 ease-in duration-300 decoration-4 underline-offset-3 hover:decoration-green-500">Experience</a>
                    <a className="text-lg font-bold underline decoration-white/0 ease-in duration-300 decoration-4 underline-offset-3 hover:decoration-red-500">Projects</a>
                </span>
            </div>
        </div>
    );
}