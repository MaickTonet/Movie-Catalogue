import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import MovieView from "./pages/movieView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App children={<Home />}></App>,
  },
  {
    path: "/movie/:id",
    element: <App children={<MovieView />}></App>,
  },
]);
