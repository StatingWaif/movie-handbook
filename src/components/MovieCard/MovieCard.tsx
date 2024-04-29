import React, { FC } from "react";
import { IMovie } from "../../types";
import { Card, CardActionArea, CardContent } from "@mui/material";
import "./MovieCard.css";
import { styled } from "@mui/material/styles";
import { MovieInfo } from "./MovieInfo";
import { MoviePoster } from "./MoviePoster";
import { useNavigate } from "react-router";

interface MovieCardProps {
  movie: IMovie;
  isOpen?: boolean;
  onToggle?: () => void;
}

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

export const MovieCard: FC<MovieCardProps> = ({
  movie,
  isOpen = false,
  onToggle,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      className="card"
      sx={{
        padding: 0,
        overflow: "visible",
        zIndex: isOpen ? 100 : "initial",
      }}
    >
      <CardContentNoPadding>
        <CardActionArea
          onClick={() => {
            if (onToggle) {
              onToggle();
            } else {
              navigate(`/movie/${movie.id}`);
            }
          }}
          disableRipple
        >
          <MoviePoster movie={movie} />
        </CardActionArea>
      </CardContentNoPadding>
      <CardContentNoPadding
        className={`${
          isOpen ? "card-description" : "card-description-expanded"
        }`}
      >
        <MovieInfo movie={movie} />
      </CardContentNoPadding>
    </Card>
  );
};
