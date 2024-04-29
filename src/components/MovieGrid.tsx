import { Grid } from "@mui/material";
import React, { FC } from "react";
import { IMovie } from "../types";
import { MovieCard } from "./MovieCard";

interface MovieGridProps {
  movies: IMovie[];
}

export const MovieGrid: FC<MovieGridProps> = ({ movies }) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          marginTop: "1rem",
        }}
      >
        {movies.slice(0, 100).map((movie) => (
          <Grid item key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
