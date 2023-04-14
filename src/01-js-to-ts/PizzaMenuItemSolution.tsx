import { useState } from "react";

import { useIntl } from "react-intl";
import { Pizza } from "../04-pizza-shop/types";
import { LabeledCheckbox } from "../components/labeled-checkbox";

type PizzaOnMenuProps = {
  pizza: Pizza;
  handleAddToOrder: (cost: number) => void;
};


/*
Advantages with TS:
- You know what the prop "Pizza" looks like and what attributes is has
- Errors in the IDE if using the prop handleAddToOrder() in the wrong way
- The IDE tells you the type of variables on hover.
- Better autocompletion when typing. For example, compare writing "pizza.price" in above the <button> in this file vs PizzaMenuItem.js
 */



export const PizzaOnMenuSolution = ({
  pizza,
  handleAddToOrder,
}: PizzaOnMenuProps) => {
  const [extras, setExtras] = useState<string[]>([]);
  const { formatList } = useIntl();

  return (
    <div style={{ paddingTop: "92px" }}>
      <div>
        <h4>{pizza.name}</h4>
        <img src={pizza.image} alt={pizza.name} width={300} height={300} />
        <div>
          <h5>Ingredients</h5>
          <div>
            {formatList(
              pizza.ingredients.map((ingredient) => (
                <span key={ingredient}>{ingredient}</span>
              ))
            )}
          </div>
        </div>
        <div>
          <h5>Extras</h5>
          <div
            style={{
              paddingBottom: "16px",
            }}
          >
            {pizza.extras.map((extra) => (
              <LabeledCheckbox
                key={extra}
                checked={extras.includes(extra)}
                onChange={() => {
                  setExtras((extras) => {
                    if (extras.includes(extra)) {
                      return extras.filter((x) => x !== extra);
                    } else {
                      return [...extras, extra];
                    }
                  });
                }}
              >
                <span>{extra}</span>
              </LabeledCheckbox>
            ))}
          </div>
        </div>
        <div style={{ paddingBottom: "16px" }}>Price: {pizza.price} </div>
        <button onClick={() => handleAddToOrder(pizza.price)}>Add to order</button>
      </div>
    </div>
  );
};
