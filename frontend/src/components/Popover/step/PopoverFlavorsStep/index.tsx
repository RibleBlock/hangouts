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
  value: number;
  setValue: (value: number) => void;
  setComment: (comment: string) => void;
  isLoadingSubmit: boolean;
}
export function PopoverFlavorsStep({
  chosenType, size, flavors, setFlavors, value, setValue, setComment, isLoadingSubmit,
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
  function checkFlavors(e: MouseEvent) {
    const el = e.target as EventType & EventTarget;
    const flavor = el.labels[0].getAttribute('for');
    const price = Number((el.labels[0].lastChild.innerText).slice(5));

    if (!flavors.includes(flavor)) {
      setValue(Number(value + price));
      setFlavors([flavor, ...flavors]);
    } else {
      setValue(Number(value - price));
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
      { chosenType !== 'CALZONE' ? (
        <>
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
                    onChange={(e) => checkFlavors(e as any)}
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
                      { chosenType !== 'BEBIDA' && '+ ' }
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
        </>
      ) : (
        <>
          { Object.entries(objSabores).map(([key, value]) => (
            <>
              <h3>CALZONES</h3>
              { (value.sabor).map(({
                nome, descricao, price,
              }: {
                nome: string, descricao: string, price: number
              }) => (
                <Div>
                  <hr />
                  <input
                    key={nome}
                    type="checkbox"
                    id={nome}
                    onChange={(e) => checkFlavors(e as any)}
                    className="input"
                  />
                  <label
                    htmlFor={nome}
                  >
                    <div>
                      <p>{ nome }</p>
                      <span>{ descricao }</span>
                    </div>
                    <span>
                      R$
                      {' '}
                      {price.toFixed(2)}
                    </span>

                  </label>
                </Div>
              )) }
            </>
          )) }
          <hr />
        </>
      ) }

      { chosenType !== 'BEBIDA'
      && (
      <InputText
        subtitle="Observações do pedido (opcional)"
        setText={setComment}
      />
      ) }

      <ButtonAction
        type="submit"
        isLoading={isLoadingSubmit}
      >
        Adicionar ao carrinho
      </ButtonAction>
    </Content>
  );
}
