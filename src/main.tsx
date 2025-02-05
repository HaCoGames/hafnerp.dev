import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "flowbyte";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/Errors/NotFound.tsx";
import Me from "./pages/Me.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Me />
      },
      {
        path: '/404',
        element: <NotFound />
      }
    ]
  }, 
  {
    path: '*',
    element: <App />,
    children: [
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
