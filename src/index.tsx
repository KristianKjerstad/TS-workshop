import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
