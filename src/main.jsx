import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./styles.scss";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
