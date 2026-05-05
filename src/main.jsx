import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

window.__PORTFOLIO_APP_BOOTED__ = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
