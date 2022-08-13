/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { BordersType, SizeType, TypeFood } from '../../../../assets/Foods';
import { FlavorTypePizzaSize } from '../../../../interfaces/module';
import { useGetDataTableMutation } from '../../../../services/api/Auth';
import { Loading } from '../../../Loading';
import { PopoverListButton } from '../../PopoverListButton';
import { Content } from './PopoverSizeStep.styles';

interface PopoverSizeStepProps {
  chosenType: TypeFood;
  setSize: (value: number) => void;
  setQtdFlavors: (value: number) => void;
  setValue: (value: number) => void;
  valueWish: number,
}
export function PopoverSizeStep({
  setSize, chosenType, setValue, setQtdFlavors, valueWish,
}: PopoverSizeStepProps) {
  const [isLoadingSize, setIsLoadingSize] = useState<boolean>(false);
  const [sizeObject, setSizeObject] = useState<FlavorTypePizzaSize[]>();
  const [getSizesInDB] = useGetDataTableMutation();

  const tipoEslhido = chosenType === 'PIZZA' ? 'Salgada' : chosenType.toLowerCase();
  useEffect(() => {
    setIsLoadingSize(true);
    async function loadData() {
      const data = await getSizesInDB({
        route: 'sizes',
        filter: tipoEslhido[0].toUpperCase() + tipoEslhido.slice(1),
      }).unwrap() as any;
      setSizeObject(data[0].flavor_type_pizza_size);
      setIsLoadingSize(false);
    }
    loadData();
  }, []);

  function setarValores(size: number, price: number, qtd: number) {
    setValue(Number(valueWish) + price);
    setQtdFlavors(qtd);
    setSize(size);
  }

  return (
    <Content>
      { !isLoadingSize ? (
        <>
          <h2>Selecione o Tamanho:</h2>
          { sizeObject && sizeObject.map(({
            pizza_size: {
              id_pizza_size, name, price, quantidade_flavors,
            },
          }) => (
            <PopoverListButton
              key={name}
              item={name}
              price={price}
              setStepOn={() => setarValores(id_pizza_size, price, quantidade_flavors)}
            />
          )) }
          <hr />
        </>
      ) : (
        <div className="load_box">
          <Loading color="grey" />
        </div>
      ) }
    </Content>
  );
}
