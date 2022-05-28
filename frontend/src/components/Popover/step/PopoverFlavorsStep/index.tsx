import {
  FlavorType, IngredientType, SizeType, TypeFood, typeFoods,
} from '../../../../pages/Home';
import { PopoverListButton } from '../../PopoverListButton';
import { Content } from '../PopoverSizeStep/PopoverSizeStep.styles';

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
            <PopoverListButton
              key={key}
              item={[nome]}
              descricao={descricao}
              price={value.price}
              setStepOn={setFlavors}
            />
          )) }
        </>
      )) }
      <hr />
    </Content>
  );
}
