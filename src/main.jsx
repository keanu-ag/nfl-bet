import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MatchContextProvider } from "./context/MatchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MatchContextProvider>
      <App />
    </MatchContextProvider>
  </React.StrictMode>
);
