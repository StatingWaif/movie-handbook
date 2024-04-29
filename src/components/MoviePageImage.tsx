import { Box } from "@mui/material";
import React, { FC } from "react";
import { IMovieExntended } from "../types";

interface MoviePageImageProps {
  movie: IMovieExntended;
}

export const MoviePageImage: FC<MoviePageImageProps> = ({ movie }) => {
  return (
    <Box>
      <img
        src={
          movie
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : undefined
        }
        alt={movie?.title}
        style={{
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          display: "block",
          objectFit: "cover",
          objectPosition: "center",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -50,
          maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #000)",
        }}
      />
    </Box>
  );
};
