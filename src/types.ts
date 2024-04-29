export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieExntended extends IMovie {
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string | null;
  };
  budget: number;
  homepage: string;
  imdb_id: string;
  origin_country: string[];
  genres: {
    id: number;
    name: string;
  }[];
  // production_companies:,
  revenue: number;
  runtime: number;
  // spoken_languages,
  status: string; // released | ... .. .
  tagline: string;
}

export interface IGenre {
  id: number;
  name: string;
}
