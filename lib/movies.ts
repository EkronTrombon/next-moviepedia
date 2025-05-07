export const getNowPlaying = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmRjMmZlNTFhNjcxOTI2MTlkNjdmYjgxMzgzZDY3ZSIsIm5iZiI6MTU1NjY4MzgxMi40MDEsInN1YiI6IjVjYzkxYzI0YzNhMzY4NGIzNDg3ZGFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lnbvIfOiZK1g0iaclF_Avaw1CnnW9mKxq8UGO71dWBQ'
        }
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const json : Movies.ListResponse<Movies.Movie> = await response.json();
    return json.results;
}

export const getMovie = async (id:string) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmRjMmZlNTFhNjcxOTI2MTlkNjdmYjgxMzgzZDY3ZSIsIm5iZiI6MTU1NjY4MzgxMi40MDEsInN1YiI6IjVjYzkxYzI0YzNhMzY4NGIzNDg3ZGFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lnbvIfOiZK1g0iaclF_Avaw1CnnW9mKxq8UGO71dWBQ'
        }
    });
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    const json : Movies.Movie = await response.json();
    return json;
}

export const getCast = async (id:string) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmRjMmZlNTFhNjcxOTI2MTlkNjdmYjgxMzgzZDY3ZSIsIm5iZiI6MTU1NjY4MzgxMi40MDEsInN1YiI6IjVjYzkxYzI0YzNhMzY4NGIzNDg3ZGFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lnbvIfOiZK1g0iaclF_Avaw1CnnW9mKxq8UGO71dWBQ'
        }
    });
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    const json : Movies.Credits = await response.json();
    const data : Movies.Cast[] = json.cast;
    
    return data;
}