// Card.jsx
import React, { useState, useEffect } from "react";
import QuantitySelector from "./QuantitySelector";

function Card({ item }) {
  const [hover, setHover] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setQuantity(existingItem.quantity);
    }
  }, [item.id]);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity = quantity;
    } else {
      cartItems.push({ ...item, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Item added to cart!");
  };

  // Increment quantity and update localStorage
  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(newQuantity);
  };

  // Decrement quantity and update localStorage
  const decrementQuantity = () => {
    const newQuantity = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newQuantity);
    updateCart(newQuantity);
  };

  const updateCart = (newQuantity) => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity = newQuantity;
    } else {
      cartItems.push({ ...item, quantity: newQuantity });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 shadow-xl hover:scale-105 duration-200">
        <figure className="flex items-center justify-center h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover h-full w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <QuantitySelector
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
