import { http } from "..";
import { IMovie } from "../../types";

interface MovieResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const getTopRatedMovies = async (
  page: number = 1,
  language: string = "ru"
): Promise<MovieResponse | null> => {
  try {
    const res = await http.get<MovieResponse>(
      `movie/top_rated?language=${language}&page=${page}`
    );
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
