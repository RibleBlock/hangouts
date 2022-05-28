import {
  FlavorType, IngredientType, SizeType, TypeFood, typeFoods,
} from '../../../../pages/Home';
import { Content, Div } from './PopoverFlavorsStep.styles';

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
            <Div>
              <hr />
              <input type="checkbox" id={nome + key.toLowerCase()} />
              <label htmlFor={nome + key.toLowerCase()}>
                <div>
                  <p>{ nome }</p>
                  <span>{ descricao }</span>
                </div>
                <span>
                  { (chosenType !== 'BEBIDA' && chosenType !== 'CALZONE') && '+' }
                  {' '}
                  R$
                  {' '}
                  {value.price.toFixed(2)}
                </span>

              </label>
            </Div>
          )) }
        </>
      )) }
      <hr />
    </Content>
  );
}
