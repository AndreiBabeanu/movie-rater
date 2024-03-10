export interface Movie {
  adult: boolean,
  id: number,
  original_title: string,
  overview: string,
  poster_path: string,
  title: string,
  video: boolean,
  vote_count: number,
  rating: number,
  genre_ids: number[],
  release_date: string,
  vote_average: number
}

