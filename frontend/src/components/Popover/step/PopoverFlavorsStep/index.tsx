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
  const objSabores = typeFoods[chosenType].flavor;
  // const quantidade = typeFoods.PIZZA.sizes[size.toUpperCase()].quantity;

  function limitar() {
    const sizeSwitch = size.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let limite;
    switch (sizeSwitch.toUpperCase()) {
      case 'BROTO':
        limite = 1;
        break;
      case 'MEDIA':
        limite = 2;
        break;
      case 'GRANDE':
        limite = 3;
        break;
      case 'GIGA':
        limite = 4;
        break;
      default:
        limite = 0;
        break;
    }
    return limite;
  }
  const limiteSabor = limitar();

  return (
    <Content>
      { limiteSabor > 1 ? (
        <h2>
          Selecione até
          {' '}
          { limiteSabor }
          {' '}
          sabores
        </h2>
      ) : (
        <h2>
          Selecione
          {' '}
          { limiteSabor }
          {' '}
          sabor
        </h2>
      ) }

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
