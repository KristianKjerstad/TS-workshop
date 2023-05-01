import { useState } from "react";

import { useIntl } from "react-intl";
import { LabeledCheckbox } from "../components/labeled-checkbox";

/*
TODO:
- Create a prop type for the PizzaOnMenu component: PizzaOnMenuProps
- Add type for the "extras" state
- Solve other errors found in your IDE
*/

export const PizzaMenuItem = ({ pizza, handleAddToOrder }) => {
  const [extras, setExtras] = useState([]);
  const { formatList } = useIntl();

  return (
    <div style={{ paddingTop: "92px" }}>
      <div>
        <h4>{pizza.Name}</h4>
        <img src={pizza.image} alt={pizza.altText} width={300} height={300} />
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
        <button onClick={() => handleAddToOrder()}>Add to order</button>
      </div>
    </div>
  );
};
