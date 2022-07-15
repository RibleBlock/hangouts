/* eslint-disable camelcase */
import { CalzoneDB } from '../../../../../constants/module';
import { Div } from '../PopoverFlavorsStep.styles';

interface AdditionalsProps {
  objSabores?: CalzoneDB[],
  checkFlavors: (flavor: number, price: number) => void,
}
export function Additionals({ objSabores, checkFlavors }: AdditionalsProps) {
  return (
    <>
      { objSabores && objSabores.map(({ name, price, id_calzone }) => (
        <>
          {/** */}
          <Div key={id_calzone}>
            <hr />
            <input
              type="checkbox"
              id={name}
              onChange={() => checkFlavors(id_calzone, price)}
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
