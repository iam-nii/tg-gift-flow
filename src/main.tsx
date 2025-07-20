import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
// import { I18nextProvider } from "react-i18next";
import "./i18n";
// import i18n from "./i18n.ts";
import router from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <I18nextProvider i18n={i18n}>
    </I18nextProvider> */}
    <RouterProvider router={router} />
  </StrictMode>
);
