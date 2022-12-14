import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MatchContextProvider } from "./context/MatchContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MatchContextProvider>
        <App />
      </MatchContextProvider>
    </Router>
  </React.StrictMode>
);
