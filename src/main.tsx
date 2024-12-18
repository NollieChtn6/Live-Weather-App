import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./App.tsx";

// https://www.codingdeft.com/posts/react-18-typescript-error/
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
