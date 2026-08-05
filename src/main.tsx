import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { SkinProvider } from "./provider/skinProvider.tsx";
import { ToastContainer } from "react-toastify";
import { SaveProvider } from "./provider/saveProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SkinProvider>
        <SaveProvider>
          <ToastContainer></ToastContainer>
          <App />
        </SaveProvider>
      </SkinProvider>
    </BrowserRouter>
  </StrictMode>,
);
