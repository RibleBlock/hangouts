import { useEffect } from 'react';
import { SizeTypes, TypeFood } from '../../../../pages/Home';
import { Formulario, ButtonSize } from './PopoverSizeStep.styles';

interface PopoverSizeStepProps {
  chosenType: TypeFood;
  objeto: Object;
  stepValue: SizeTypes | null;
  setStepOn: (sizeName: SizeTypes) => void;
}
export function PopoverSizeStep({
  objeto, stepValue, setStepOn, chosenType,
}: PopoverSizeStepProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(stepValue);
  }, [stepValue]);

  return (
    <Formulario method="POST">
      <h2>Escolha o tamanho:</h2>
      { Object.entries(objeto).map(([key, value]) => (
        <div key={key}>
          <hr />
          <ButtonSize
            onClick={() => setStepOn(key as SizeTypes)}
            type="button"
          >
            <p>{ value.size }</p>
            <span>
              R$
              {' '}
              {value.price.toFixed(2)}
            </span>
          </ButtonSize>
        </div>
      )) }
      <hr />
    </Formulario>
  );
}
