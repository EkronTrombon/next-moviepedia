import { getNowPlaying } from '@/lib/movies';
import MovieCard from '@/components/movie-card/movie-card';
import GridBig from "@/components/grid-big/grid-big";

export default async function Home() {
  const nowPlayingMovies = await getNowPlaying();
  
  return (
    <div className="container py-5 md:py-10">
      <h2 className='text-center'>Playing Now</h2>
      <GridBig>
        {nowPlayingMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </GridBig>
    </div>
  );
}
