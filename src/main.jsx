import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";

const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS;

// Load Google Analytics script
const script = document.createElement("script");
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
document.head.appendChild(script);

// Initialize Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", GA_ID);

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/portfolio">
    <App />
  </BrowserRouter>,
);
