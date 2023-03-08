import type { PizzaOnOrder } from "./types";

import { FC, useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { pizzas } from "./menu";
import { OrderedPizza } from "./ordered-pizza";
import { PizzaOnMenu } from "./pizza-on-menu";

export const PizzaShop: FC = () => {
  const { formatNumber } = useIntl();
  const [order, setOrder] = useState<PizzaOnOrder[]>([]);
  const totalPrice = useMemo(() => calculateTotalPrice(order), [order]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ paddingTop: "16px" }}>Pizza Shop</h1>
      <div>
        <div>
          <h2>Menu</h2>
          {pizzas.map((pizza) => (
            <PizzaOnMenu
              key={pizza.name}
              pizza={pizza}
              onAddToOrder={(p) => setOrder((order) => [...order, p])}
            />
          ))}
        </div>
        <div>
          <div style={{ paddingTop: "64px", paddingBottom: "64px" }}>
            <h2>Your Order</h2>
            {order.map((pizza, index) => (
              <OrderedPizza key={index} pizza={pizza} />
            ))}
            <div>
              <div>Total amount: </div>
              <div>
                {formatNumber(totalPrice, {
                  style: "currency",
                  currency: "EUR",
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function calculateTotalPrice(order: PizzaOnOrder[]) {
  return order.reduce((sum, pizza) => {
    const extraPrice = pizza.extraIngredients.reduce(
      (sum, extra) => sum + extra.price,
      0
    );
    return sum + pizza.price + extraPrice;
  }, 0);
}
