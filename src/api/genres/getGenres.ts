import { IGenre } from "../../types";
import { http } from "..";

interface GenresResponse {
  genres: IGenre[];
}

export const getGenres = async (
  language: string = "ru"
): Promise<IGenre[] | null> => {
  try {
    const res = await http.get<GenresResponse>(
      `genre/movie/list?language=${language}`
    );
    return res.data.genres;
  } catch (e) {
    console.log(e);
    return null;
  }
};
