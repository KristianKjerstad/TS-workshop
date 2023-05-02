import type { Pizza, PizzaOnOrder } from "./types";

import { FC, useState } from "react";

import { useIntl } from "react-intl";
import { getExtraIngredient } from "./menu";
import { LabeledCheckbox } from "../components/labeled-checkbox";

type Props = {
  pizza: Pizza;
  onAddToOrder: (pizza: PizzaOnOrder) => void;
};

export const PizzaOnMenu: FC<Props> = ({ pizza, onAddToOrder }) => {
  const [extras, setExtras] = useState<string[]>([]);
  const { formatList } = useIntl();

  const logAddToOrder = (pizza: Pizza, userName: string) => {
    console.log(pizza)
  }

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
                    }
                    else {
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
        <button
          onClick={() =>
            onAddToOrder({
              ...pizza,
              extraIngredients: extras.map(getExtraIngredient),
            })
          }
        >
          Add to order
        </button>
      </div>
    </div>
  );
};
