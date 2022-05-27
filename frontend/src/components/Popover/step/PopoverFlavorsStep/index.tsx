import {
  FlavorType, IngredientType, SizeType, TypeFood, typeFoods,
} from '../../../../pages/Home';
import { PopoverListButton } from '../../PopoverListButton';
import { Content } from '../PopoverSizeStep/PopoverSizeStep.styles';

interface PopoverFlavorsStepProps {
  chosenType: TypeFood;
  chosenSize: number;
  setSize: (sizeName: FlavorType) => void;
}
export function PopoverFlavorsStep({ chosenType, chosenSize, setSize }: PopoverFlavorsStepProps) {
  const objSabores = typeFoods[chosenType || 'PIZZA'].flavor;

  return (
    <Content>
      <h2>
        Selecione até
        {' '}
        {/* NUM */}
        {' '}
        sabores
      </h2>

      { Object.entries(objSabores).map(([key, value]) => (
        <>
          <h1 key={key}>{ key }</h1>
          { (value.sabor).map(({ nome, descricao }: IngredientType) => (
            <>
              <h1>{ nome }</h1>
              <h1>{ descricao }</h1>
              <h1>{ value.price }</h1>
            </>
          )) }
        </>
      )) }
      <hr />
    </Content>
  );
}
