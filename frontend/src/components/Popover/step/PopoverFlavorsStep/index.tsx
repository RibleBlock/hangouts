/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from 'react';
import {
  IngredientType, SizeType, TypeFood, typeFoods,
} from '../../../../assets/Foods';
import { useLazyGetFlavorsQuery } from '../../../../services/api/Auth';
import { FlavorDB } from '../../../../store/module';
import { ButtonAction } from '../../../form/ButtonAction';
import { InputText } from '../../../form/InputText';
import { Loading } from '../../../Loading';
import { Content } from './PopoverFlavorsStep.styles';
import { PizzaType } from './step/PizzaType';

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
  const [getFlavors] = useLazyGetFlavorsQuery() as any;
  const [isLoadingFlavors, setIsLoadingFlavors] = useState<boolean>(false);

  const [objSabores, setObjSabores] = useState<FlavorDB[]>();

  // DB SABORES
  useEffect(() => {
    setIsLoadingFlavors(true);
    async function getFlavorsEffect() {
      const data = await getFlavors();
      setObjSabores(data.data);
      setIsLoadingFlavors(false);
    }
    getFlavorsEffect();
  }, []);

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
  function checkFlavors(flavor: string, price: number) {
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

  function popoverSteps() {
    switch (chosenType) {
      case 'PIZZA':
        return (
          <PizzaType
            type="Salgada"
            checkFlavors={checkFlavors}
            objSabores={objSabores}
          />
        );
      case 'DOCE':
        return (
          <PizzaType
            type="Doce"
            checkFlavors={checkFlavors}
            objSabores={objSabores}
          />
        );
      default:
        return 'BEBIDA';
    }
  }

  return (
    <Content>
      <input type="button" />
      { !isLoadingFlavors ? (
        <>
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

          { popoverSteps() }

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
        </>
      ) : (
        <div className="load_box">
          <Loading color="grey" />
        </div>
      ) }

    </Content>
  );
}
