import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <div>
            <Hero />
            <Testimonial />
          </div>
        ),
      },
      {
        path: "/about",
        element: (
          <div className="section-spacing">
            <About />
          </div>
        ),
      },
      {
        path: "/projects",
        element: (
          <div className="section-spacing">
            <Projects />
          </div>
        ),
      },
      {
        path: "/experiences",
        element: (
          <div className="section-spacing">
            <Experiences />
          </div>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
