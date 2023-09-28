import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Packages from "./pages/Packages/Packages";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Services from "./pages/Service/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "login",
    element: (
      <Login />
    ),
  },
  {
    path: "register",
    element: (
      <Register />
    ),
  },
  {
    path: "about",
    element: (
      <About />
    ),
  },
  {
    path: "services",
    element: (
      <Services />
    ),
  },
  {
    path: "packages",
    element: (
      <Packages />
    ),
  },
  {
    path: "contact",
    element: (
      <Contact />
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);