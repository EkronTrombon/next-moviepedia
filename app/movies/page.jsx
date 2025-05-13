import Form from 'next/form';
import { getMoviesBySearch } from "@/lib/movies";
import MovieCard from '@/components/movie-card/movie-card';


export default async function MovieListingPage({ searchParams }) {

    const { search } = await searchParams;
    const movies = search ? await getMoviesBySearch(search) : [];

    return (
        <>
            <div className="mt-10 container flex justify-start items-start gap-10">
                <div className="max-w-md">
                    <Form className="flex justify-start items-center gap-2.5" action="/movies">
                        <label htmlFor="search">Search:</label>
                        <input className="bg-white border border-primary rounded p-2.5 text-base text-black" type="text" id="search" name="search" />
                        <button className="bg-primary border border-white rounded p-2.5 text-base text-white font-bold" type="submit">Submit</button>
                    </Form>
                </div>
                <div className="w-full">
                    {movies.length > 0 && (
                        <ul className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}