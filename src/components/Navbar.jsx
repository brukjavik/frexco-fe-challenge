import React from "react";
import "../styles/navbar.scss";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography, AppBar, Toolbar } from "@mui/material";

export default function Navbar({ addedItems }) {
  return (
    <div>
      <AppBar
        style={{
          background: "#344e41",
          position: "static",
        }}
      >
        <Toolbar>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: "Hi Melody, cursive",
                fontSize: "30px",
              }}
            >
              FREXCO FRUITS
            </Typography>
          </Link>
          <div className="cartNavbar">
            <Link
              to="/cart"
              style={{
                marginLeft: "auto",
                textDecoration: "none",
                color: "white",
              }}
            >
              <span className="cartQtd">{addedItems}</span>
              <ShoppingCartIcon />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
