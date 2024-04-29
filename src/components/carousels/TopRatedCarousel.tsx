import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MovieCarousel } from "./MovieCarousel";
import { IMovie } from "../../types";
import { getTopRatedMovies } from "../../api/movies/getTopRatedMovies";

export const TopRatedCarousel = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    getTopRatedMovies().then((results) => {
      if (results) {
        setTopRatedMovies(results.results);
      }
    });
  }, []);

  return (
    <Container sx={{ minHeight: "" }}>
      <Typography variant="h3">Лучшее</Typography>
      <MovieCarousel movies={topRatedMovies} />
    </Container>
  );
};
