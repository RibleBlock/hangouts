import { SizeType, TypeFood, typeFoods } from '../../../../assets/Foods';
import { PopoverListButton } from '../../PopoverListButton';
import { Content } from './PopoverSizeStep.styles';

interface PopoverSizeStepProps {
  chosenType: TypeFood;
  setSize: (sizeName: SizeType) => void;
  setValue: (value: number) => void;
  valueWish: number,
}
export function PopoverSizeStep({
  setSize, chosenType, setValue, valueWish,
}: PopoverSizeStepProps) {
  return (
    <Content>
      <h2>Selecione o tamanho:</h2>
      { Object.entries(typeFoods[chosenType].sizes).map(([key, value]) => (
        <PopoverListButton
          key={key}
          item={[value.size]}
          price={value.price}
          setStepOn={setSize}
          setValue={setValue}
          valueWish={valueWish}
        />
      )) }
      <hr />
    </Content>
  );
}
