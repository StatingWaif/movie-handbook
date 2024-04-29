import { CardMedia } from "@mui/material";
import React, { FC } from "react";
import { IMovie } from "../../types";

interface MoviePosterProps {
  movie: IMovie;
}

export const MoviePoster: FC<MoviePosterProps> = ({ movie }) => {
  return (
    <CardMedia
      className="card-image"
      component="img"
      image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
      alt={movie.title}
      sx={{
        objectFit: "cover",
        height: "100%",
        width: "100%",
      }}
    />
  );
};
