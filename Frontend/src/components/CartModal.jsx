import React, { useState, useEffect } from "react";

function CartModal({ isOpen, closeModal }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedItems);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <dialog
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle"
      open={isOpen}
    >
      <form
        method="dialog"
        className="modal-box bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
      >
        <h3 className="font-bold text-lg">Your Shopping Cart</h3>
        {cartItems.length === 0 ? (
          <p className="py-4">Your cart is empty!</p>
        ) : (
          <ul className="py-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-2"
              >
                <div>
                  <h4 className="text-md font-medium">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.price} USD
                  </p>
                </div>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="modal-action">
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default CartModal;
