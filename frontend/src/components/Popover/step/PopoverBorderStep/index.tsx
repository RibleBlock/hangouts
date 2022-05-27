import { bordas, BordersType } from '../../../../pages/Home';
import { PopoverListButton } from '../../PopoverListButton';
import { Formulario } from '../PopoverSizeStep/PopoverSizeStep.styles';

interface PopoverBorderStepProps {
  borda: BordersType | null;
  setBorda: (sizeName: BordersType) => void;
}
export function PopoverBorderStep({ borda, setBorda }: PopoverBorderStepProps) {
  return (
    <Formulario method="POST">
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
    </Formulario>
  );
}
