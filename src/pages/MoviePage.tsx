import { Box, Button, CssBaseline, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IMovieExntended } from "../types";
import { getMovie } from "../api/movies/getMovie";
import { Parallax } from "react-parallax";
import { MoviePageInfo } from "../components/MoviePageInfo";
import { RecommendationCarousel } from "../components/carousels/RecommendationCarousel";

export const MoviePage = () => {
  const { id: strId } = useParams();
  const id = Number(strId);
  const [movie, setMovie] = useState<IMovieExntended | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getMovie(id).then((movieInfo) => {
        setMovie(movieInfo);
      });
    }
  }, [id]);

  return (
    <>
      <CssBaseline />

      <Parallax
        bgImage={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        strength={400}
        bgImageStyle={{
          maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #000)",
        }}
        bgClassName="custom-bg-class"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {movie ? (
            <MoviePageInfo movie={movie} />
          ) : (
            <Box
              sx={{
                width: "60%",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Skeleton height={80} width={600} />
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} width={800} />
              ))}
            </Box>
          )}
        </Box>
      </Parallax>

      <Box
        sx={{
          bgcolor: "#141414",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <RecommendationCarousel movieId={id} />
        <Button
          variant="outlined"
          disableRipple
          size="large"
          sx={{ width: "10rem", marginX: "auto", marginY: "2rem" }}
          onClick={() => navigate(`/`)}
        >
          На главную
        </Button>
      </Box>
    </>
  );
};
