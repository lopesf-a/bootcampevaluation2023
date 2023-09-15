import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Homepage from "./route/homepage/";
import Contact from './route/contact';
import News from './route/news';
import Register from './route/register';
import SingleArticle from './route/singlearticle';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/news',
    element: <News/>
  },
  {
    path : '/register',
    element : <Register/>
  },
  {
    path : '/singlearticle',
    element : <SingleArticle/>
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);