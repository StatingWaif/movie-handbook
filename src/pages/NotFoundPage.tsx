import { Button, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Typography variant="h1" textAlign={"center"}>
          Такой страницы не существует
        </Typography>
        <Button
          variant="outlined"
          disableRipple
          size="large"
          sx={{ width: "10rem", marginX: "auto" }}
          onClick={() => navigate(`/`)}
        >
          На главную
        </Button>
      </Container>
    </>
  );
};
