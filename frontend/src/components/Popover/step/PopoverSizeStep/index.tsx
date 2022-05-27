import { useEffect } from 'react';
import { SizeType, TypeFood, typeFoods } from '../../../../pages/Home';
import { PopoverListButton } from '../../PopoverListButton';
import { Formulario } from './PopoverSizeStep.styles';

interface PopoverSizeStepProps {
  chosenType: TypeFood;
  size: SizeType | null;
  setSize: (sizeName: SizeType) => void;
}
export function PopoverSizeStep({ size, setSize, chosenType }: PopoverSizeStepProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(size);
  }, [size]);
  return (
    <Formulario method="POST">
      <h2>Selecione o tamanho:</h2>
      { Object.entries(typeFoods[chosenType].sizes).map(([key, value]) => (
        <PopoverListButton
          key={key}
          item={[value.size]}
          price={value.price}
          setStepOn={setSize}
        />
      )) }
      <hr />
    </Formulario>
  );
}
