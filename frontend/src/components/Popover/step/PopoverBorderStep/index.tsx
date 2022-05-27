import { bordas, BordersType } from '../../../../pages/Home';
import { PopoverListButton } from '../../PopoverListButton';
import { Content } from '../PopoverSizeStep/PopoverSizeStep.styles';

interface PopoverBorderStepProps {
  setBorda: (sizeName: BordersType) => void;
}
export function PopoverBorderStep({ setBorda }: PopoverBorderStepProps) {
  return (
    <Content>
      <h2>Selecione a borda:</h2>
      { Object.entries(bordas).map(([key, value]) => (
        <PopoverListButton
          key={key}
          item={value.nomes}
          price={value.price}
          setStepOn={setBorda}
        />
      )) }
      <hr />
    </Content>
  );
}
