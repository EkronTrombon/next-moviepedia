import Image from "next/image";

import { getMovie, getCast } from '@/lib/movies';
import ImageSlider from "../../../components/image-slider/image-slider";

export default async function MovieDetailPage({params}) {

    const { movieId } = await params;
    const movie = await getMovie(movieId);
    const cast = await getCast(movieId);

    return (
        <>
            <div className="mt-10 container">
                <div className='flex justify-between items-start gap-10'>
                    <Image className="rounded-lg border border-white w-full md:w-1/3" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={500} height={500}/>
                    <div className="w-full md:w-2/3 flex flex-col justify-start items-start gap-5">
                        <h1>{movie.title}</h1>
                        <h2>Original Title: {movie.original_title}</h2>
                        <h3>Release Date: {movie.release_date}</h3>
                        <p>{movie.overview}</p>
                        <ImageSlider cast={cast}/>
                    </div>
                </div>
            </div>
        </>
    );
}