import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { IMovieExntended } from "../types";
import { formatRunTime } from "../utils/formatRuntime";
import StarIcon from "@mui/icons-material/Star";
import { formatDate } from "../utils/formatDate";

interface MoviePageInfoProps {
  movie: IMovieExntended;
}

export const MoviePageInfo: FC<MoviePageInfoProps> = ({ movie }) => {
  const genres = movie.genres.map((obj) => obj.name);
  const releaseDate = movie.release_date;
  const formattedDate = formatDate(releaseDate);
  return (
    <Box
      sx={{
        width: "60%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography
        sx={{
          textShadow: "black 0px 8px 24px;",
          fontWeight: "bold",
          marginTop: "auto",
        }}
        variant="h2"
      >
        {movie?.title} {movie?.adult ? "18+" : null}
      </Typography>
      <Typography variant="h6">{movie?.overview}</Typography>
      <Typography>Дата выхода: {formattedDate}</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Typography variant="h5">{movie?.original_language}</Typography>
        <Typography variant="h5">
          <StarIcon />
          {movie?.vote_average}
        </Typography>
        <Typography variant="h5">
          {movie ? formatRunTime(movie.runtime) : null}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {genres.map((genre) => (
          <Typography>{genre}</Typography>
        ))}
      </Box>
    </Box>
  );
};
