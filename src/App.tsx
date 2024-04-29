import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { darkTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { MoviePage } from "./pages/MoviePage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
};
