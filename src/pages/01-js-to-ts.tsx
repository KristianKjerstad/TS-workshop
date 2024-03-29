import { useState } from "react";
import { PizzaMenuItem } from "../01-js-to-ts/PizzaMenuItem";
import { PizzaOnMenuSolution } from "../01-js-to-ts/PizzaMenuItemSolution";
import { Pizza } from "../04-pizza-shop/types";

export const JsToTs = () => {
  const [orderTotal, setOrderTotal] = useState<number>(0);

  const pizzaMargherita: Pizza = {
    name: "Pizza Margherita",
    ingredients: ["tomato sauce", "mozzarella", "basil"],
    image: "/img/margherita.png",
    price: 7.95,
    extras: ["olives", "tomatoes"],
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Converting JavaScript to TypeScript</h2>

      <PizzaMenuItem
        pizza={pizzaMargherita}
        handleAddToOrder={(cost: number) => {
          setOrderTotal(orderTotal + cost);
        }}
      />
      {/*<PizzaOnMenuSolution pizza={pizzaMargherita} handleAddToOrder={(cost: number) => {*/}
      {/*    setOrderTotal(orderTotal + cost);*/}
      {/*  }}/>*/}
      <div style={{ paddingTop: "64px" }}>Order total: {orderTotal}</div>
    </div>
  );
};
