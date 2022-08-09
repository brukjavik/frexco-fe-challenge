import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function addProductToCart(fruitToAdd) {
    const existentFruit = cart.find((fruit) => fruit.id === fruitToAdd.id);
    setAddedItems(addedItems + 1);

    setTotalPrice(totalPrice + fruitToAdd.price);
    if (existentFruit) {
      setCart(
        cart.map((fruit) =>
          fruit.id === fruitToAdd.id
            ? { ...existentFruit, quantity: existentFruit.quantity + 1 }
            : fruit
        )
      );
    } else {
      setCart([...cart, { ...fruitToAdd, quantity: 1 }]);
    }
  }

  function removeOneFromCart(fruitToRemove) {
    setAddedItems(addedItems - 1);
    setTotalPrice(totalPrice - fruitToRemove.price);
    const existentFruit = cart.find((fruit) => fruit.id === fruitToRemove.id);
    if (existentFruit.quantity === 1) {
      setCart(cart.filter((fruit) => fruit !== fruitToRemove));
    } else {
      setCart(
        cart.map((fruit) =>
          fruit.id === fruitToRemove.id
            ? { ...existentFruit, quantity: existentFruit.quantity - 1 }
            : fruit
        )
      );
    }
  }

  function removeFromCart(fruitToRemove) {
    setAddedItems(addedItems - fruitToRemove.quantity);
    setTotalPrice(totalPrice - fruitToRemove.quantity * fruitToRemove.price);
    setCart(cart.filter((fruit) => fruit !== fruitToRemove));
  }

  function removeAllFromCart() {
    setAddedItems(0);
    setTotalPrice(0);
    setCart([]);
  }

  return (
    <div>
      <Router>
        <Navbar addedItems={addedItems} />
        <Routes>
          <Route
            path="/"
            element={<Home cart={cart} addProductToCart={addProductToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                addProductToCart={addProductToCart}
                removeFromCart={removeFromCart}
                removeOneFromCart={removeOneFromCart}
                removeAllFromCart={removeAllFromCart}
                totalPrice={totalPrice}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
