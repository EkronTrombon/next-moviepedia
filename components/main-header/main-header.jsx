import Image from "next/image";
import Link from "next/link";

import logo from '@/assets/MoviePedia_Logo.png';

export default function MainHeader() {
    return (
        <>
            <header className="py-5 md:py-10 bg-linear-to-b from-primary via-secondary via-25% to-black to-100%">
                <div className="container flex flex-col md:flex-row gap-5 justify-between items-center py-2 border-b-2 border-white">
                    <Link className="hidden md:block" href="/">
                        <Image src={logo} alt="Next Moviepedia App Logo" width={120} />
                    </Link>
                    <h1 className="text-black text-shadow-white">MOVIEPEDIA</h1>
                    <nav>
                        <ul className="flex space-x-8">
                            <li className="text-black text-shadow-white font-bold text-lg md:text-2xl transition-colors duration-300 hover:text-primary">
                                <Link href="/movies/">Movies</Link>
                            </li>
                            <li className="text-black text-shadow-white font-bold text-lg md:text-2xl transition-colors duration-300 hover:text-primary">
                                <Link href="/series/">TV Series</Link>
                            </li>
                            <li className="text-black text-shadow-white font-bold text-lg md:text-2xl transition-colors duration-300 hover:text-primary">
                                <Link href="/people/">People</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}