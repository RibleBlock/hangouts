/* eslint-disable camelcase */
import { DrinkDB } from '../../../../../interfaces/module';
import { Div } from '../PopoverFlavorsStep.styles';

interface DrinkProps {
  objSabores?: DrinkDB[],
  setSizeDrink: (idSize: number) => void,
  checkFlavors: (drink: number, price: number) => void,
}
export function Drink({ objSabores, checkFlavors, setSizeDrink }: DrinkProps) {
  function setarValores({ drink, size, price }: {drink: number, size: number, price: number}) {
    checkFlavors(drink, price);
    setSizeDrink(size);
  }

  return (
    <>
      {/**/}
      { objSabores && objSabores.map(({
        name_drink_size, price, id_drink_size, drink_size_drink,
      }) => (
        <>
          <h3 key={id_drink_size}>{name_drink_size}</h3>
          { drink_size_drink.map(({ drink: { id_drink, name_drink } }) => (
            <Div key={id_drink}>
              <hr />
              <input
                type="checkbox"
                id={name_drink + name_drink_size}
                onChange={() => setarValores({ drink: id_drink, size: id_drink_size, price })}
                className="input"
              />
              <label
                htmlFor={name_drink + name_drink_size}
              >
                <div>
                  <p>{ name_drink }</p>
                </div>
                <span>
                  {`R$ ${price.toFixed(2)}`}
                </span>
              </label>
            </Div>
          )) }
          <hr />
        </>
      )) }
    </>
  );
}
