import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";

function Layout({ fruit, addProductToCart }) {
  const [nutritionalState, setNutritionalState] = useState(false);
  const [open, setOpen] = useState(false);
  const { name, nutritions, price } = fruit;

  const toggleNutritionalState = () => {
    setNutritionalState(!nutritionalState);
  };

  function functionHandler(fruit) {
    addProductToCart(fruit);
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") return;
    setOpen(false);
  }

  return (
    <div>
      <Card
        elevation={3}
        style={{ borderRadius: "10px", backgroundColor: "white" }}
      >
        <CardHeader
          action={
            <IconButton
              onClick={toggleNutritionalState}
              title="Show nutritional info"
            >
              <ExpandMoreIcon />
            </IconButton>
          }
          title={name}
        />
        <CardMedia
          component="img"
          height="200"
          image="not_available.png"
          alt="not_available"
        />
        <CardContent style={{ display: "flex" }}>
          <Typography
            variant="body1"
            color="#588157"
            style={{ display: "inline-block", fontWeight: "bold" }}
          >
            Price: ${price}
          </Typography>
          <Button
            style={{
              fontSize: "12px",
              backgroundColor: "#588157",
              marginLeft: "auto",
              maxWidth: "100px",
              maxHeight: "30px",
              minWidth: "100px",
              minHeight: "30px",
            }}
            variant="contained"
            size="small"
            color="secondary"
            title="Add to cart"
            onClick={() => functionHandler(fruit)}
          >
            Add to cart
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Item added to cart
            </Alert>
          </Snackbar>
        </CardContent>
        {nutritionalState && (
          <div>
            <Typography
              variant="body1"
              color="#344e41"
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              Fruit Info
            </Typography>
            <br />
            <Typography
              variant="body2"
              color="#344e41"
              style={{ textAlign: "center" }}
            >
              Carbohydrates: {nutritions.carbohydrates}
              <br />
              Protein: {nutritions.protein}
              <br />
              Fat: {nutritions.fat}
              <br />
              Calories: {nutritions.calories}
              <br />
              Sugar: {nutritions.sugar}
              <br />
              <br />
            </Typography>
          </div>
        )}
      </Card>
    </div>
  );
}

export default Layout;
