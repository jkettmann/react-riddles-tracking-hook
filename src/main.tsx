import React from "react";
import ReactDOM from "react-dom/client";
import { User } from "./user";
import "./index.css";

declare global {
  interface Window {
    tracking: any[];
  }
}

window.tracking = [];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <User />
  </React.StrictMode>
);
