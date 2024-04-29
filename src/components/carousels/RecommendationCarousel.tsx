import { Container, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { MovieCarousel } from "./MovieCarousel";
import { IMovie } from "../../types";
import { getRecommendedMovies } from "../../api/movies/getRecommendedMovies";

interface RecommendationCarouselProps {
  movieId: number;
}

export const RecommendationCarousel: FC<RecommendationCarouselProps> = ({
  movieId,
}) => {
  const [recommendations, setRecommendations] = useState<IMovie[]>([]);

  useEffect(() => {
    if (movieId) {
      getRecommendedMovies(movieId).then((results) => {
        if (results) {
          setRecommendations(results.results);
        }
      });
    }
  }, [movieId]);

  return (
    <Container>
      <Typography variant="h3">Похожие</Typography>
      <MovieCarousel movies={recommendations} />
    </Container>
  );
};
