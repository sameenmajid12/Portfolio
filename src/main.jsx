import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
);
