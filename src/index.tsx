import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigation } from "./Navigation";
import { PizzaShop } from "./04-pizza-shop/pizza-shop";
import { IntlProvider } from "react-intl";
import { messages } from "./messages";
import { JsToTs } from "./pages/01-js-to-ts";
import { MutuallyExclusive } from "./pages/02-mutually-exclusive";
import { Generics } from "./pages/03-generic-prop-types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
  },
  {
    path: "/pizza-shop",
    element: <PizzaShop />,
  },
  {
    path: "/js-to-ts",
    element: <JsToTs />,
  },
  {
    path: "/mutually-exclusive",
    element: <MutuallyExclusive />,
  },
  {
    path: "/generics",
    element: <Generics />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IntlProvider messages={messages} locale="en">
      <RouterProvider router={router} />
    </IntlProvider>
  </React.StrictMode>
);

