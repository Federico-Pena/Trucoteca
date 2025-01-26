import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import HandContextProvider from "./context/handContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HandContextProvider>
      <App />
    </HandContextProvider>
  </StrictMode>
);
