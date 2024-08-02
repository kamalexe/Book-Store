import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    {/* This is the culprit for double rendering */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
