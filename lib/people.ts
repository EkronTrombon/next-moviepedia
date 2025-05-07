export const getPerson = async (id: string) => {
    const response = await fetch(`https://api.themoviedb.org/3/person/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmRjMmZlNTFhNjcxOTI2MTlkNjdmYjgxMzgzZDY3ZSIsIm5iZiI6MTU1NjY4MzgxMi40MDEsInN1YiI6IjVjYzkxYzI0YzNhMzY4NGIzNDg3ZGFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lnbvIfOiZK1g0iaclF_Avaw1CnnW9mKxq8UGO71dWBQ'
        }
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const json : People.Person = await response.json();
    return json;
}