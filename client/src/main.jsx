import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./index.css"
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AboutPage from "./components/AboutPage/AboutPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import Packages from "./components/Packages/Packages";
import Contact from "./components/Contact/Contact";

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
      <AboutPage />
    ),
  },
  {
    path: "services",
    element: (
      <ServicesPage />
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