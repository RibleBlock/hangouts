import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { Formulario, ButtonSize } from './PopoverSizeStep.styles';
import { sizesObj, sizeTypes } from '../..';

export function PopoverSizeStep() {
  const [size, setSize] = useState<sizeTypes>('BROTO');

  useEffect(() => {
    console.log(size);
  }, [size]);
  return (
    <Formulario>
      <h2>Escolha o tamanho:</h2>
      { Object.entries(sizesObj).map(([key, value]) => (
        <>
          <hr />
          <ButtonSize
            onClick={() => setSize(key as sizeTypes)}
            type="button"
            key={key}
          >
            <p>{ value.size }</p>
            <span>
              R$
              {' '}
              {value.price.toFixed(2)}
            </span>
          </ButtonSize>
        </>
      )) }
      <hr />
    </Formulario>
  );
}
