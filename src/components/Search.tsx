import {
  Container,
  CssBaseline,
  Grid,
  Skeleton,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";
import { MovieGrid } from "./MovieGrid";
import { IMovie } from "../types";
import { movieSearch } from "../api/movies/movieSearch";
import axios from "axios";

export const Search = () => {
  const search = useInput("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const source = axios.CancelToken.source();
    if (search.value) {
      movieSearch(search.value, { cancelToken: source.token }).then((data) => {
        if (data) {
          setMovies(data.results);
          setLoading(false);
        }
      });
    }
    setLoading(false);
    return () => {
      source.cancel();
    };
  }, [search.value]);
  return (
    <Container>
      <CssBaseline />
      <TextField
        id="standard-basic"
        label="Поиск"
        variant="standard"
        {...search}
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!loading ? (
          <MovieGrid movies={movies} />
        ) : (
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
            {
              Array.from({ length: 10 }).map((_, index) => (
                <Grid item key={index}>
                  <Skeleton variant="rectangular" width={300} height={450} />
                </Grid>
              ))
              //TODO
            }
          </Grid>
        )}
      </Container>
    </Container>
  );
};
