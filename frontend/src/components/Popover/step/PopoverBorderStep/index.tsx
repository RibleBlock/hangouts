import { bordas, BordersType } from '../../../../assets/Foods';
import { PopoverListButton } from '../../PopoverListButton';
import { Content } from '../PopoverSizeStep/PopoverSizeStep.styles';

interface PopoverBorderStepProps {
  setBorda: (sizeName: BordersType) => void,
  setValue: (value: number) => void,
  valueWish: number,
}
export function PopoverBorderStep({ setBorda, setValue, valueWish }: PopoverBorderStepProps) {
  return (
    <Content>
      <h2>Selecione a borda:</h2>
      { Object.entries(bordas).map(([key, value]) => (
        <PopoverListButton
          key={key}
          item={value.nomes}
          price={value.price}
          setStepOn={setBorda}
          setValue={setValue}
          valueWish={valueWish}
        />
      )) }
      <hr />
    </Content>
  );
}
