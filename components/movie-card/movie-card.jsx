import Image from "next/image";

export default function MovieCard({movie}) {
    return (
        <>
            <li className="" key={movie.title} id={movie.id}>
                <a className="flex flex-col justify-center items-center gap-2" href={`/movies/${movie.id}`}>
                    <Image className="rounded-lg border border-white" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={500} height={500}/>
                </a>
            </li>
        </>
    );
}