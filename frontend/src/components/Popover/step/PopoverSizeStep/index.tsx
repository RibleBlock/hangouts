import { useEffect, useState } from 'react';
import { SizeTypes, TypeFood, typeFoods } from '../../../../pages/Home';
import { Formulario, ButtonSize } from './PopoverSizeStep.styles';

interface PopoverSizeStepProps {
  chosenType: TypeFood;
}
export function PopoverSizeStep({ chosenType }: PopoverSizeStepProps) {
  const [size, setSize] = useState<SizeTypes | null>(null);

  useEffect(() => {
    console.log(size);
  }, [size]);
  return (
    <Formulario>
      <h2>Escolha o tamanho:</h2>
      { Object.entries(typeFoods[chosenType].sizes).map(([key, value]) => (
        <div key={key}>
          <hr />
          <ButtonSize
            onClick={() => setSize(key as SizeTypes)}
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
