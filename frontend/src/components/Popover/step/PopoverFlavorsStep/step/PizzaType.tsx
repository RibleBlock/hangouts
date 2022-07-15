/* eslint-disable camelcase */
import { FlavorDB } from '../../../../../constants/module';
import { Div } from '../PopoverFlavorsStep.styles';

interface PizzaTypeProps {
  type: string,
  objSabores?: FlavorDB[],
  checkFlavors: (flavor: number, price: number) => void,
}
export function PizzaType({ type, objSabores, checkFlavors }: PizzaTypeProps) {
  return (
    <>
      { objSabores && objSabores.map(({
        name, flavor_category, flavor_type, flavor_ingredient, id_flavor,
      }) => (
        <>
          {/**/}
          { flavor_type.name === type && (
          <Div key={id_flavor}>
            <hr />
            <input
              type="checkbox"
              id={name}
              onChange={() => checkFlavors(id_flavor, flavor_category.price)}
              className="input"
            />
            <label
              htmlFor={name}
            >
              <div>
                <p>{ name }</p>
                { flavor_ingredient.map(({ ingredient: { name, id_ingredient } }, index, array) => (
                  <span key={id_ingredient}>
                    {`${name}${array.length > index + 1 ? ', ' : ''}`}
                  </span>
                )) }
              </div>
              <span>
                + R$
                {' '}
                {flavor_category.price.toFixed(2)}
              </span>

            </label>

          </Div>
          ) }
        </>
      )) }
      <hr />
    </>
  );
}
