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
  tagline: string,
  genres: Genre[];
}

interface Genre {
  id: number;
  name: string;
}
