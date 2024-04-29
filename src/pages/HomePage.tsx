import { CssBaseline } from "@mui/material";
import { TopRatedCarousel } from "../components/carousels/TopRatedCarousel";
import { PopularCarousel } from "../components/carousels/PopularCarousel";
import { Search } from "../components/Search";

export const HomePage = () => {
  return (
    <>
      <CssBaseline />
      <Search />
      <PopularCarousel />
      <TopRatedCarousel />
    </>
  );
};
