import {
  IngredientType, SizeType, TypeFood, typeFoods,
} from '../../../../pages/Home';
import { InputText } from '../../../InputText';
import { Content, Div } from './PopoverFlavorsStep.styles';

interface PopoverFlavorsStepProps {
  chosenType: TypeFood;
  size: SizeType;
  flavors: string[];
  setFlavors: (sizeName: string[]) => void;
  setComment: (comment: string) => void;
}
export function PopoverFlavorsStep({
  chosenType, size, flavors, setFlavors, setComment,
}: PopoverFlavorsStepProps) {
  const objSabores = typeFoods[chosenType].flavor;

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
        limite = 1;
        break;
    }
    return limite;
  }
  const limiteSabor = limitar();

  function checkFlavors(flavor: string) {
    if (!flavors.includes(flavor)) {
      setFlavors([flavor, ...flavors]);
    } else {
      setFlavors(flavors.filter((v) => v !== flavor));
    }
  }

  return (
    <Content>
      { limiteSabor > 1 ? (
        <h2>
          Selecione até
          {' '}
          { limiteSabor }
          {' '}
          sabores:
        </h2>
      ) : (
        <h2>
          Selecione
          {' '}
          { limiteSabor }
          {' '}
          sabor:
        </h2>
      ) }

      <input type="text" />
      { Object.entries(objSabores).map(([key, value]) => (
        <>
          <h3 key={key}>{ key }</h3>
          { (value.sabor).map(({ nome, descricao }: IngredientType) => (
            <Div>
              <hr />
              <input type="checkbox" id={nome + key.toLowerCase()} onChange={() => checkFlavors(nome)} />
              <label
                htmlFor={nome + key.toLowerCase()}
              >

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

      { chosenType !== 'BEBIDA'
      && (
      <InputText
        subtitle="Observações do pedido (opcional)"
        setText={setComment}
      />
      ) }
    </Content>
  );
}
