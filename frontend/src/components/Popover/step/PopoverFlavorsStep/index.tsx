import {
  FlavorType, IngredientType, SizeType, TypeFood, typeFoods,
} from '../../../../pages/Home';
import { PopoverListButton } from '../../PopoverListButton';
import { Content, Label } from './PopoverFlavorsStep.styles';

interface PopoverFlavorsStepProps {
  chosenType: TypeFood;
  size: SizeType;
  setFlavors: (sizeName: FlavorType[]) => void;
}
export function PopoverFlavorsStep({ chosenType, size, setFlavors }: PopoverFlavorsStepProps) {
  // const quantidade = typeFoods.PIZZA.sizes[size].quantity;
  const objSabores = typeFoods[chosenType].flavor;

  return (
    <Content>
      <h2>
        Selecione até
        {' '}
        {/* { quantidade } */}
        {' '}
        sabores
      </h2>

      { Object.entries(objSabores).map(([key, value]) => (
        <>
          <h3 key={key}>{ key }</h3>
          { (value.sabor).map(({ nome, descricao }: IngredientType) => (
            <div className="inputs">
              <hr />
              <Label htmlFor={nome}>
                <input type="checkbox" id={nome} />
                <div>
                  <p>{ nome }</p>
                  <span>{ descricao }</span>
                </div>
                <span>
                  R$
                  {' '}
                  {value.price.toFixed(2)}
                </span>

              </Label>
            </div>
          )) }
        </>
      )) }
      <hr />
    </Content>
  );
}
