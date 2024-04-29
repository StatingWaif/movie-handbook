import { IGenre } from "../../types";
import { getGenres } from "./getGenres";

export const getGenresByIds = async (ids: number[]): Promise<IGenre[]> => {
  const genres = await getGenres();
  if (!genres) {
    return [];
  }

  const result: IGenre[] = [];
  for (const id of ids) {
    for (const genre of genres) {
      if (genre.id === id) {
        result.push(genre);
        break;
      }
    }
  }

  return result;
};
