import React, { FC, useState } from "react";
import { IMovie } from "../../types";
import { Box } from "@mui/material";
import { MovieCard } from "../MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface MovieCarouselProps {
  movies: IMovie[];
}

export const MovieCarousel: FC<MovieCarouselProps> = ({ movies }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    focusOnSelect: true,
  };

  return (
    <Slider {...settings} className="slider">
      {movies
        ? movies.slice(0, 10).map((movie, index) => (
            <Box
              key={movie.id}
              sx={{ margin: "1rem", marginX: "10rem" }}
              onClick={() => handleToggle(index)}
            >
              <MovieCard
                movie={movie}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </Box>
          ))
        : null}
    </Slider>
  );
};
