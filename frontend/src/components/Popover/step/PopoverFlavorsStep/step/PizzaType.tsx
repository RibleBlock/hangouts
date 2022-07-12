/* eslint-disable camelcase */
import { Flavor } from '../../../../../store/module';
import { Div } from '../PopoverFlavorsStep.styles';

interface PizzaTypeProps {
  type: string,
  objSabores?: Flavor[],
  checkFlavors: (flavor: string, price: number) => void,
}
export function PizzaType({ type, objSabores, checkFlavors }: PizzaTypeProps) {
  return (
    <>
      { objSabores && objSabores.map(({ name, flavor_category, flavor_type }) => (
        <>
          {/** */}
          { flavor_type.name === type && (
          <Div>
            <hr />
            <input
              key={name}
              type="checkbox"
              id={name}
              onChange={() => checkFlavors(name, flavor_category.price)}
              className="input"
            />
            <label
              htmlFor={name}
            >
              <div>
                <p>{ name }</p>
                <span>nao definido</span>
                {/* NAO DEFINIDO */}
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
