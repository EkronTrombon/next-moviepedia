import Image from "next/image";

import noMovie from '@/assets/no_movie.png';

export default function MovieCard({movie}) {
    return (
        <>
            <li className="" key={movie.title} id={movie.id}>
                <a className="flex flex-col justify-center items-center gap-2" href={`/movies/${movie.id}`}>
                    <Image className="rounded-lg border border-white" src={movie.poster_path != null ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : noMovie} alt={movie.title} width={500} height={500}/>
                </a>
            </li>
        </>
    );
}