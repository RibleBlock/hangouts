/* eslint-disable camelcase */
import { CalzoneDB } from '../../../../../constants/module';
import { Div } from '../PopoverFlavorsStep.styles';

interface AdditionalsProps {
  objSabores?: CalzoneDB[],
  checkFlavors: (flavor: string, price: number) => void,
}
export function Additionals({ objSabores, checkFlavors }: AdditionalsProps) {
  return (
    <>
      { objSabores && objSabores.map(({ name, price }) => (
        <>
          {/** */}
          <Div key={name}>
            <hr />
            <input
              type="checkbox"
              id={name}
              onChange={() => checkFlavors(name, price)}
              className="input"
            />
            <label
              htmlFor={name}
            >
              <div>
                <p>{ name }</p>
              </div>
              <span>
                + R$
                {' '}
                {price.toFixed(2)}
              </span>

            </label>

          </Div>
        </>
      )) }
      <hr />
    </>
  );
}
