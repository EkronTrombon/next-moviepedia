import Form from 'next/form';
import { getMoviesBySearch } from "@/lib/movies";
import MovieCard from '@/components/movie-card/movie-card';


export default async function MovieListingPage({ searchParams }) {

    const { search } = await searchParams;
    const movies = search ? await getMoviesBySearch(search) : [];

    return (
        <div className="mt-5 md:mt-10 container flex flex-col md:flex-row justify-start items-start gap-10">
            <div className="w-full md:max-w-xs">
                <Form className="flex justify-start items-center gap-2.5" action="/movies">
                    <label className="hidden" htmlFor="search">Search:</label>
                    <div className="w-full flex justify-start items-center">
                        <input className="w-full bg-white border border-primary border-r-0 rounded-l-lg p-2.5 text-base text-black" type="text" id="search" name="search" placeholder="Search" />
                        <button className="bg-primary border border-primary border-l-0 rounded-r-lg p-2.5 text-base text-white font-bold" type="submit">Submit</button>
                    </div>
                </Form>
            </div>
            <div className="w-full">
                {movies.length === 0 && (
                    <div className="flex justify-center items-center">
                        <h2 className="text-center md:text-left">No movies found, please type something to search</h2>
                    </div>
                )}
                {movies.length > 0 && (
                    <ul className='grid grid-cols-3 md:grid-cols-5 gap-5'>
                        {movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}