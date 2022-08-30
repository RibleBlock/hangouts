/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import { FlavorDB } from '../../../../../interfaces/module';
import { Div } from '../PopoverFlavorsStep.styles';

interface PizzaTypeProps {
  type: string,
  objSabores?: FlavorDB[],
  checkFlavors: (flavor: number, price: number) => void,
}
export function PizzaType({ type, objSabores, checkFlavors }: PizzaTypeProps) {
  return (
    <>
      {/**/}
      { objSabores && objSabores.map(({
        name, id_flavor_category, price, flavor,
      }) => (
        <>
          <h3 key={id_flavor_category}>{name}</h3>
          { flavor.map(({
            id_flavor, name, ingredients, flavor_type,
          }) => (
            <>
              {/**/}
              { flavor_type.name === type && (
                <Div key={id_flavor}>
                  <hr />
                  <input
                    type="checkbox"
                    id={name}
                    onChange={() => checkFlavors(id_flavor, price)}
                    className="input"
                  />
                  <label
                    htmlFor={name}
                  >
                    <div>
                      <p>{ name }</p>
                      { ingredients && ingredients.map((value, index, array) => (
                        <span key={index}>
                          {`${value}${array.length > index + 1 ? ', ' : ''}`}
                        </span>
                      )) }
                    </div>
                    { price !== 0 && (
                      <span>
                        {`+ R$ ${price.toFixed(2)}`}
                      </span>
                    ) }
                  </label>
                </Div>
              ) }
            </>
          )) }
          <hr />
        </>
      )) }
    </>
  );
}
