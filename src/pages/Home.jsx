import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Grid, Container, ButtonBase, styled, Typography } from "@mui/material";
import "../styles/home.scss";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function Home({ cart, addProductToCart }) {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/db")
      .then((r) => r.json())
      .then((actualData) => {
        setFruits(actualData);
      });
  }, []);
  return (
    <Container className="Home">
      <Grid container spacing={3}>
        {fruits.fruits?.map((fruit) => (
          <Grid item key={fruit.id} xs={12} md={6} lg={3}>
            <Layout
              fruit={fruit}
              name={fruit.name}
              price={fruit.price}
              nutritions={fruit.nutritions}
              addProductToCart={addProductToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
