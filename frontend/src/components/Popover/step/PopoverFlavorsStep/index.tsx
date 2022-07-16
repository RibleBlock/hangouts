/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from 'react';
import {
  IngredientType, SizeType, TypeFood, typeFoods,
} from '../../../../assets/Foods';
import { CalzoneDB, DrinkDB, FlavorDB } from '../../../../constants/module';
import { useGetFlavorsMutation } from '../../../../services/api/Auth';
import { ButtonAction } from '../../../form/ButtonAction';
import { InputText } from '../../../form/InputText';
import { Loading } from '../../../Loading';
import { Content } from './PopoverFlavorsStep.styles';
import { Additionals } from './step/Calzone';
import { Drink } from './step/Drink';
import { PizzaType } from './step/PizzaType';

interface PopoverFlavorsStepProps {
  chosenType: TypeFood,
  qtdFlavors: number,
  flavors: number[],
  setFlavors: (sizeName: number[]) => void,
  value: number,
  setValue: (value: number) => void,
  setComment: (comment: string) => void,
  isLoadingSubmit: boolean,
}
export function PopoverFlavorsStep({
  chosenType, qtdFlavors, flavors, setFlavors, value, setValue, setComment, isLoadingSubmit,
}: PopoverFlavorsStepProps) {
  const [getFlavors] = useGetFlavorsMutation() as any;
  const [isLoadingFlavors, setIsLoadingFlavors] = useState<boolean>(false);

  const [objSabores, setObjSabores] = useState<FlavorDB[] & CalzoneDB[] & DrinkDB[]>();

  // DB SABORES
  useEffect(() => {
    setIsLoadingFlavors(true);
    async function getFlavorsEffect() {
      let table = '';
      if (chosenType === 'BEBIDA') {
        table = 'drink_size';
      } else if (chosenType !== 'PIZZA' && chosenType !== 'DOCE') {
        table = chosenType.toLowerCase();
      } else {
        table = '';
      }
      const data = await getFlavors({ table });
      setObjSabores(data.data);
      setIsLoadingFlavors(false);
    }
    getFlavorsEffect();
  }, []);

  const limiteSabor = qtdFlavors;

  // funcao de desativar checkbox //
  function checkFlavors(flavor: number, price: number) {
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
      case 'CALZONE':
        return (
          <Additionals
            checkFlavors={checkFlavors}
            objSabores={objSabores}
          />
        );
      default:
        return (
          <Drink
            checkFlavors={checkFlavors}
            objSabores={objSabores}
          />
        );
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

          <div>
            { popoverSteps() }
          </div>

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
