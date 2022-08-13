/* eslint-disable camelcase */
import { CalzoneDB } from '../../../../../interfaces/module';
import { Div } from '../PopoverFlavorsStep.styles';

interface AdditionalsProps {
  objSabores?: CalzoneDB[],
  checkFlavors: (flavor: number, price: number) => void,
}
export function Additionals({ objSabores, checkFlavors }: AdditionalsProps) {
  return (
    <>
      { objSabores && objSabores.map(({ name, price, id_calzone_flavor }) => (
        <>
          {/** */}
          <Div key={id_calzone_flavor}>
            <hr />
            <input
              type="checkbox"
              id={name}
              onChange={() => checkFlavors(id_calzone_flavor, price)}
              className="input"
            />
            <label
              htmlFor={name}
            >
              <div>
                <p>{ name }</p>
              </div>
              <span>
                {`R$ ${price.toFixed(2)}`}
              </span>
            </label>
          </Div>
        </>
      )) }
      <hr />
    </>
  );
}
