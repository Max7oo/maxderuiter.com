import React from 'react';
import ReactDOM from 'react-dom/client';

import './functions/functions.js';

import App from './App.js';
import Maatje from './pages/maatje.js';
import Delivar from './pages/delivar.js';
import Inflite from './pages/inflite.js';
import Drwd from './pages/drwd.js';
import Blog from './pages/blog.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "maatje",
    element: <Maatje />,
  },
  {
    path: "delivar",
    element: <Delivar />,
  },
  {
    path: "inflite",
    element: <Inflite />,
  },
  {
    path: "drwd",
    element: <Drwd />,
  },
  {
    path: "blog",
    element: <Blog />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={router} />
);