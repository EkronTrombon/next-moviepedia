import { getNowPlaying } from '@/lib/movies';
import MovieCard from '@/components/movie-card/movie-card';

export default async function Home() {
  const nowPlayingMovies = await getNowPlaying();
  
  return (
    <>
      <div className="container py-5 md:py-10">
        <h2 className='text-center'>Playing Now</h2>
        <ul className='mt-10 grid grid-cols-3 md:grid-cols-5 gap-5'>
          {nowPlayingMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </ul>
      </div>
    </>
  );
}
