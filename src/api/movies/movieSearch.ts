import { CancelToken } from "axios";
import { http } from "..";
import { IMovie } from "../../types";

interface MovieResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const movieSearch = async (
  query: string,

  config: {
    cancelToken: CancelToken;
  },
  page: number = 1,
  language: string = "ru"
): Promise<MovieResponse | null> => {
  try {
    const res = await http.get<MovieResponse>(
      `search/movie?query=${query}&language=${language}&page=${page}`,
      config
    );
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
