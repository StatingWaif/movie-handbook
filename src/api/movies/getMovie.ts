import { http } from "..";
import { IMovieExntended } from "../../types";

export const getMovie = async (
  id: string | number,
  language: string = "ru"
): Promise<IMovieExntended | null> => {
  try {
    const res = await http.get<IMovieExntended>(
      `movie/${id}?language=${language}`
    );
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
