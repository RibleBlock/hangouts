/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
import { useEffect } from 'react';
import {
  IngredientType, SizeType, TypeFood, typeFoods,
} from '../../../../assets/Foods';
import { ButtonAction } from '../../../form/ButtonAction';
import { InputText } from '../../../form/InputText';
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

  // funcao de desativar checkbox //
  function checkFlavors(flavor: string) {
    if (!flavors.includes(flavor)) {
      setFlavors([flavor, ...flavors]);
    } else {
      setFlavors(flavors.filter((v) => v !== flavor));
    }
  }

  useEffect(() => {
    const inputs = document.querySelectorAll('.input') as any;

    if (flavors.length === limiteSabor) {
      // bloquear //
      for (let input of inputs) {
        input.disabled = !input.checked;
      }
    } else {
      // desbloquear //
      for (let input of inputs) {
        input.disabled = false;
      }
    }
  }, [flavors]);

  return (
    <Content>
      <input type="button" />
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

      { Object.entries(objSabores).map(([key, value]) => (
        <>
          <h3 key={key}>{ key }</h3>
          { (value.sabor).map(({ nome, descricao }: IngredientType) => (
            <Div>
              <hr />
              <input
                key={nome + key.toLowerCase()}
                type="checkbox"
                id={chosenType === 'BEBIDA' ? nome + key.toLowerCase() : nome}
                onChange={() => checkFlavors(nome)}
                className="input"
              />
              <label
                htmlFor={chosenType === 'BEBIDA' ? nome + key.toLowerCase() : nome}
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

      <ButtonAction
        type="submit"
      >
        Adicionar ao carrinho
      </ButtonAction>
    </Content>
  );
}
