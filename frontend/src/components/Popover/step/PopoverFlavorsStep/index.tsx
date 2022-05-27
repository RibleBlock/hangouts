import {
  FlavorType, IngredientType, TypeFood, typeFoods,
} from '../../../../pages/Home';
import { PopoverListButton } from '../../PopoverListButton';
import { Content } from '../PopoverSizeStep/PopoverSizeStep.styles';

interface PopoverFlavorsStepProps {
  chosenType: TypeFood;
  setSize: (sizeName: FlavorType) => void;
}
export function PopoverFlavorsStep({ chosenType, setSize }: PopoverFlavorsStepProps) {
  const objSabores = typeFoods[chosenType].flavor;

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
              <h1>{ !!value.price && value.price }</h1>
            </>
          )) }
        </>
      )) }
      <hr />
    </Content>
  );
}
