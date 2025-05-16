export const getTvSeries = async (id: string) => {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmRjMmZlNTFhNjcxOTI2MTlkNjdmYjgxMzgzZDY3ZSIsIm5iZiI6MTU1NjY4MzgxMi40MDEsInN1YiI6IjVjYzkxYzI0YzNhMzY4NGIzNDg3ZGFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lnbvIfOiZK1g0iaclF_Avaw1CnnW9mKxq8UGO71dWBQ'
        }
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const json : TV.Series = await response.json();
    return json;
}

export const getSeriesGenres = async () => {
    const response = await fetch('https://api.themoviedb.org/3/genre/tv/list', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmRjMmZlNTFhNjcxOTI2MTlkNjdmYjgxMzgzZDY3ZSIsIm5iZiI6MTU1NjY4MzgxMi40MDEsInN1YiI6IjVjYzkxYzI0YzNhMzY4NGIzNDg3ZGFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lnbvIfOiZK1g0iaclF_Avaw1CnnW9mKxq8UGO71dWBQ'
        }
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const json : TV.GenreList = await response.json();
    return json.genres;
}

export const getTrendingTv = async () => {
    const response = await fetch('https://api.themoviedb.org/3/trending/tv/week', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmRjMmZlNTFhNjcxOTI2MTlkNjdmYjgxMzgzZDY3ZSIsIm5iZiI6MTU1NjY4MzgxMi40MDEsInN1YiI6IjVjYzkxYzI0YzNhMzY4NGIzNDg3ZGFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lnbvIfOiZK1g0iaclF_Avaw1CnnW9mKxq8UGO71dWBQ'
        }
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const json : TV.ListResponse<TV.Series> = await response.json();
    return json.results;
}

export const getOnTheAirTv = async () => {
    const response = await fetch('https://api.themoviedb.org/3/tv/on_the_air', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmRjMmZlNTFhNjcxOTI2MTlkNjdmYjgxMzgzZDY3ZSIsIm5iZiI6MTU1NjY4MzgxMi40MDEsInN1YiI6IjVjYzkxYzI0YzNhMzY4NGIzNDg3ZGFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lnbvIfOiZK1g0iaclF_Avaw1CnnW9mKxq8UGO71dWBQ'
        }
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const json : TV.ListResponse<TV.Series> = await response.json();
    return json.results;
}

export const getPopularTv = async () => {
    const response = await fetch('https://api.themoviedb.org/3/tv/popular', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmRjMmZlNTFhNjcxOTI2MTlkNjdmYjgxMzgzZDY3ZSIsIm5iZiI6MTU1NjY4MzgxMi40MDEsInN1YiI6IjVjYzkxYzI0YzNhMzY4NGIzNDg3ZGFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lnbvIfOiZK1g0iaclF_Avaw1CnnW9mKxq8UGO71dWBQ'
        }
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const json : TV.ListResponse<TV.Series> = await response.json();
    return json.results;
}

export const getTopRatedTv = async () => {
    const response = await fetch('https://api.themoviedb.org/3/tv/top_rated', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmRjMmZlNTFhNjcxOTI2MTlkNjdmYjgxMzgzZDY3ZSIsIm5iZiI6MTU1NjY4MzgxMi40MDEsInN1YiI6IjVjYzkxYzI0YzNhMzY4NGIzNDg3ZGFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lnbvIfOiZK1g0iaclF_Avaw1CnnW9mKxq8UGO71dWBQ'
        }
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const json : TV.ListResponse<TV.Series> = await response.json();
    return json.results;
}