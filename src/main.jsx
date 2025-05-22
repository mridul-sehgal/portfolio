import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Project from "./Components/Project/Project.jsx";
import ContactMe from "./Components/Contact Me/ContactMe.jsx";
import About from "./Components/About/About.jsx";
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
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "contact",
        element: <ContactMe />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
