import { http } from "..";
import { IMovie } from "../../types";

interface MovieResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const getRecommendedMovies = async (
  id: number,
  language: string = "ru"
): Promise<MovieResponse | null> => {
  try {
    const res = await http.get<MovieResponse>(
      `movie/${id}/recommendations?language=${language}&page=1`
    );
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
