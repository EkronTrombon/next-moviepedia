declare namespace TV {
    type Series = {
        adult: boolean
        backdrop_path: string
        created_by: CreatedBy[]
        episode_run_time: number[]
        first_air_date: string
        genres: Genre[]
        homepage: string
        id: number
        in_production: boolean
        languages: string[]
        last_air_date: string
        last_episode_to_air: Episode
        name: string
        next_episode_to_air: string
        networks: Network[]
        number_of_episodes: number
        number_of_seasons: number
        origin_country: string[]
        original_language: string
        original_name: string
        overview: string
        popularity: number
        poster_path: string
        production_companies: ProductionCompany[]
        production_countries: ProductionCountry[]
        seasons: Season[]
        spoken_languages: SpokenLanguage[]
        status: string
        tagline: string
        type: string
        vote_average: number
        vote_count: number
    }

    type SpokenLanguage = {
        english_name: string
        iso_639_1: string
        name: string
    }

    type Season = {
        air_date: string
        episode_count: number
        id: number
        name: string
        overview: string
        poster_path: string
        season_number: number
        vote_average: number
    }

    type ProdCountry = {
        iso_3166_1: string
        name: string
    }

    type ProductionCompany = {
        id: number
        logo_path: string
        name: string
        origin_country: string
    }

    type Network = {
        id: number
        logo_path: string
        name: string
        origin_country: string
    }

    type Episode = {
        id: number
        name: string
        overview: string
        vote_average: number
        vote_count: number
        air_date: string
        episode_number: number
        production_code: string
        runtime: number
        season_number: number
        show_id: number
        still_path: string
    }

    type CreatedBy = {
        id: number
        credit_id: string
        name: string
        gender: number
        profile_path: string
    }

    type GenreList = {
        genres: Genre[]
    }
    
    type Genre = {
        id: number
        name: string
    }

    type ListResponse<T> = {
        page: number
        results: T[]
        total_pages: number
        total_results: number
    }
}