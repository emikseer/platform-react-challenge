import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CatModal } from "./components/CatModal";
import { CatsContextProvider } from "./providers/CatsContextProvider";
import Images from "./components/Images";
import Breeds from "./components/Breeds";
import { BreedModal } from "./components/BreedModal";
import Favourites from "./components/Favourites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Images />,
        children: [
          {
            path: "/image/:id",
            element: <CatModal />,
          },
        ],
      },
      {
        path: "/breeds",
        element: <Breeds />,
        children: [
          {
            path: "/breeds/image/:id",
            element: <BreedModal />,
          },
        ],
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CatsContextProvider>
      <RouterProvider router={router} />
    </CatsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
