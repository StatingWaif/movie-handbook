import { Box, Button, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { IGenre, IMovie } from "../../types";
import StarIcon from "@mui/icons-material/Star";
import { getGenresByIds } from "../../api/genres";
import { useNavigate } from "react-router-dom";

interface MovieInfoProps {
  movie: IMovie;
}

export const MovieInfo: FC<MovieInfoProps> = ({ movie }) => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getGenresByIds(movie.genre_ids).then(setGenres);
  }, [movie.genre_ids]);
  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography sx={{ color: "white", textAlign: "center" }} variant="h4">
        {movie.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "1rem",
        }}
      >
        <Typography>{formatDate(movie.release_date)}</Typography>
        <Typography>
          <StarIcon fontSize="small" />
          {movie.vote_average}
        </Typography>
        <Typography>{genres.map((genre) => genre.name).join(", ")}</Typography>
      </Box>

      <Typography
        sx={{
          color: "white",
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 5,
        }}
      >
        {movie.overview}
      </Typography>
      <Button
        variant="outlined"
        disableRipple
        size="large"
        sx={{ width: "10rem", marginX: "auto" }}
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        Смотреть
      </Button>
    </Box>
  );
};
