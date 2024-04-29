import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MovieCarousel } from "./MovieCarousel";
import { IMovie } from "../../types";
import { getPopularMovies } from "../../api/movies/getPopularMovies";

export const PopularCarousel = () => {
  const [popular, setPopular] = useState<IMovie[]>([]);
  useEffect(() => {
    getPopularMovies().then((results) => {
      if (results) {
        setPopular(results.results);
      }
    });
  }, []);
  return (
    <Container sx={{ minHeight: "" }}>
      <Typography variant="h3">Популярное</Typography>
      <MovieCarousel movies={popular} />
    </Container>
  );
};
