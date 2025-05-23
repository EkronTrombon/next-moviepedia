declare namespace Movies {
    type Movie = {
        adult: boolean
        backdrop_path: string
        belongs_to_collection: string
        budget: number
        genres: Genre[]
        homepage: string
        id: number
        imdb_id: string
        original_language: string
        original_title: string
        overview: string
        popularity: number
        poster_path: string
        production_companies: ProdCompany[]
        production_countries: ProdCountry[]
        release_date: string
        revenue: number
        runtime: number
        spoken_languages: Languages[]
        status: string
        tagline: string
        title: string
        video: boolean
        vote_average: number
        vote_count: number
    }

    type MovieSearch = {
        adult: boolean
        backdrop_path: string
        genre_ids: number[]
        id: number
        original_language: string
        original_title: string
        overview: string
        popularity: number
        poster_path: string
        release_date: string
        title: string
        video: boolean
        vote_average: number
        vote_count: number
    }

    type Genre = {
        id: number
        name: string
    }

    type ProdCompany = {
        id: number
        logo_path: string
        name: string
        origin_country: string
    }

    type ProdCountry = {
        iso_3166_1: string
        name: string
    }

    type Languages = {
        english_name: string
        iso_639_1: string
        name: string
    }

    type ListResponse<T> = {
        dates: {
            maximum: string
            minimum: string
        }
        page: number
        results: T[]
        total_pages: number
        total_results: number
    }

    type Credits = {
        id: number
        cast: Cast[]
        crew: Crew[]
    }

    type Cast = {
        adult: boolean
        gender: number
        id: number
        known_for_department: string
        name: string
        original_name: string
        popularity: number
        profile_path: string
        cast_id: number
        character: string
        credit_id: string
        order: number
    }

    type Crew = {
        adult: boolean
        gender: number
        id: number
        known_for_department: string
        name: string
        original_name: string
        popularity: number
        profile_path: string
        credit_id: string
        department: string
        job: string
    }
}