declare namespace People {
    type Person = {
        adult: boolean
        also_known_as: string[]
        biography: string
        birthday: string
        deathday: string
        gender: number
        homepage: string
        id: integer
        imdb_id: string
        known_for_department: string
        name: string
        place_of_birth: string
        popularity: number
        profile_path: string
    }

    type ListResponse<T> = {
        page: number
        results: T[]
        total_pages: number
        total_results: number
    }

    type PersonImages = {
        id: number
        profiles: PersonImage[]
    }

    type PersonImage = {
        aspect_ratio: number
        height: number
        iso_639_1: string
        file_path: string
        vote_average: number
        vote_count: number
        width: number
    }
}