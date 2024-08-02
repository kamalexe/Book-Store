// QuantitySelector.jsx
import React from "react";

function QuantitySelector({ quantity, incrementQuantity, decrementQuantity }) {
  return (
    <div className="flex items-center space-x-2 border rounded-full bg-gray-50 dark:bg-slate-900">
      <button
        className="px-2 py-0 rounded-l-full border"
        onClick={decrementQuantity}
      >
        -
      </button>
      <span className="px-2 py-0 ">{quantity}</span>
      <button
        className="px-2 py-0 rounded-r-full border "
        onClick={incrementQuantity}
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
