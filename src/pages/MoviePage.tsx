import { Box, Button, CssBaseline, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IMovieExntended } from "../types";
import { getMovie } from "../api/movies/getMovie";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
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

      <Parallax pages={2}>
        <ParallaxLayer
          speed={-0.3}
          style={
            movie
              ? {
                  overflow: "hidden",
                  backgroundSize: "cover",
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                  maskImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0), #000)",
                }
              : {
                  overflow: "hidden",
                  backgroundSize: "cover",
                  maskImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0), #000)",
                }
          }
        ></ParallaxLayer>
        <ParallaxLayer speed={0}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
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
                {Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton key={index} />
                ))}
              </Box>
            )}
          </Box>
        </ParallaxLayer>
        {/* </Box> */}
        <ParallaxLayer offset={1} speed={0}>
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
              sx={{ width: "10rem", marginX: "auto" }}
              onClick={() => navigate(`/`)}
            >
              На главную
            </Button>
          </Box>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};
