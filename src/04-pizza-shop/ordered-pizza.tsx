import type { FC } from 'react';
import type { PizzaOnOrder } from './types';

import { useIntl } from 'react-intl';

type Props = {
  pizza: PizzaOnOrder;
};

export const OrderedPizza: FC<Props> = ({ pizza }) => {
  const { formatNumber } = useIntl();

  return (
    <div>
      <div>
        <h4>
          <div >{pizza.name}</div>
          <div>
            {formatNumber(pizza.price, {
              style: 'currency',
              currency: 'EUR',
            })}
          </div>
        </h4>
        <ol>
          {pizza.extraIngredients.map((extra, index) => (
            <li key={index} >
              <div >{extra.name}</div>
              <div>
                {formatNumber(extra.price, {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
