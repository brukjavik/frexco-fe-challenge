import React, { useState } from "react";
import "../styles/cart.scss";
import { Button, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

function Cart({
  cart,
  totalPrice,
  removeFromCart,
  removeOneFromCart,
  removeAllFromCart,
  addProductToCart,
}) {
  const [nutritionalState, setNutritionalState] = useState(false);

  const toggleNutritionalState = () => {
    setNutritionalState(!nutritionalState);
  };

  totalPrice = totalPrice.toFixed(2);

  return (
    <div className="Cart">
      <div className="bar-info">
        <Button onClick={toggleNutritionalState} style={{ color: "#588157" }}>
          <div className="spacement">
            <QueryStatsIcon style={{ color: "588157" }} /> Show/Hide nutritional
            info
          </div>
        </Button>

        <Button
          style={{ color: "#588157" }}
          className="removeall-button"
          onClick={removeAllFromCart}
        >
          <div className="spacement">
            Clear cart <DeleteForeverIcon />
          </div>
        </Button>
      </div>

      {cart?.map((item, idx) => (
        <div className="cart-element" key={idx}>
          <div className="cart-element-img">
            <img src="not_available.png" alt="" />
            <Typography
              style={{
                color: "#344e41",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              {item.name}
            </Typography>
          </div>
          <div className="nutritionalDiv">
            {nutritionalState && (
              <div>
                <p>Carbohydrates: {item.nutritions.carbohydrates}</p>
                <p>Protein: {item.nutritions.protein}</p>
                <p>Fat: {item.nutritions.fat}</p>
                <p>Calories: {item.nutritions.calories}</p>
                <p>Sugar: {item.nutritions.sugar}</p>
              </div>
            )}
          </div>
          <div className="buttons">
            <Button onClick={() => removeOneFromCart(item)}>
              <RemoveCircleIcon style={{ color: "#588157" }} />
            </Button>
            <div className="qtd-div">
              <Typography style={{ fontWeight: "500" }}>
                {item.quantity}
              </Typography>
            </div>
            <Button onClick={() => addProductToCart(item)}>
              <AddCircleIcon style={{ color: "#588157" }} />
            </Button>
          </div>
          <div className="price-div">
            <Typography style={{ fontWeight: "400" }}>
              ${(item.price * item.quantity).toFixed(2)}
            </Typography>
          </div>
          <Button
            style={{
              marginRight: "4%",
            }}
            onClick={() => removeFromCart(item)}
          >
            <DeleteIcon style={{ color: "#588157" }} />
          </Button>
        </div>
      ))}
      <div className="total-price">
        <Typography style={{ fontWeight: "500" }}>
          Total: ${totalPrice}
        </Typography>
      </div>
    </div>
  );
}

export default Cart;
