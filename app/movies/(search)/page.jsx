import Form from 'next/form';
import { getMoviesBySearch } from "@/lib/movies";
import MovieCard from '@/components/movie-card/movie-card';


export default async function MovieListingPage({ searchParams }) {

    const { search } = await searchParams;
    const movies = search ? await getMoviesBySearch(search) : [];

    return (
        <>
            {movies.length === 0 ? (
                <div className="flex justify-center items-center">
                    <h2 className="text-center md:text-left">No movies found, please type something to search</h2>
                </div>
            ) : (
                <ul className='grid grid-cols-3 md:grid-cols-5 gap-5'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </ul>
            )}
        </>            
    );
}