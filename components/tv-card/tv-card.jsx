import Image from "next/image";

import noMovie from '@/assets/no_movie.png';
import Link from "next/link";

export default function TvCard({series}) {
    return (
        <li className="" key={series.title} id={series.id}>
            <Link className="flex flex-col justify-center items-center gap-2" href={`/series/${series.id}`}>
                <Image className="rounded-lg border border-white" src={series.poster_path != null ? `https://image.tmdb.org/t/p/w500${series.poster_path}` : noMovie} alt={series.name} width={500} height={750}/>
            </Link>
        </li>
    );
}