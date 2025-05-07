import Image from "next/image";
import Link from "next/link";

import logo from '@/assets/MoviePedia_Logo.png';

export default function MainHeader() {
    return (
        <>
            <header className="bg-[linear-gradient(175deg,_#b600ff_0%,_#b600ff_10%,_#ff8f35_20%,_#ff8f35_35%,_#000000_40%,_#000000_100%)]">
                <div className="container flex justify-between items-center py-2 border-b-2 border-white">
                    <Link href="/">
                        <Image src={logo} alt="Next Moviepedia App Logo" width={120} />
                    </Link>
                    <h1 className="font-nba text-5xl font-bold">MOVIEPEDIA</h1>
                    <nav>
                        <ul className="flex space-x-8">
                            <li className="text-2xl transition-colors duration-300 hover:text-secondary">
                                <Link href="/">Movies</Link>
                            </li>
                            <li className="text-2xl transition-colors duration-300 hover:text-secondary">
                                <Link href="/">Actors</Link>
                            </li>
                            <li className="text-2xl transition-colors duration-300 hover:text-secondary">
                                <Link href="/">Game</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}