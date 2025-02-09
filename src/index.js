import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Star from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Star maximum="10" star_size={40} /> */}
  </React.StrictMode>
);
