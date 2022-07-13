/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { Loading } from '../../..';
import { BordersType } from '../../../../assets/Foods';
import { BorderDB } from '../../../../constants/module';
import { useGetDataTableMutation } from '../../../../services/api/Auth';
import { PopoverListButton } from '../../PopoverListButton';
import { Content } from '../PopoverSizeStep/PopoverSizeStep.styles';

interface PopoverBorderStepProps {
  setBorda: (sizeName: string) => void,
  setValue: (value: number) => void,
  valueWish: number,
}
export function PopoverBorderStep({ setBorda, setValue, valueWish }: PopoverBorderStepProps) {
  const [isLoadingBorder, setIsLoadingBorder] = useState<boolean>(false);
  const [borderData, setBorderData] = useState<BorderDB[]>([]);
  const [getBordersInDB] = useGetDataTableMutation();

  useEffect(() => {
    async function getFuckinBorders() {
      setIsLoadingBorder(true);
      const data = await getBordersInDB({
        route: 'borders',
        filter: '',
      }).unwrap();
      setBorderData([...data]);
      setIsLoadingBorder(false);
    }
    getFuckinBorders();
  }, []);

  function setarValores(border: string, price: number) {
    setValue(Number(valueWish) + price);
    setBorda(border);
  }

  return (
    <Content>
      { !isLoadingBorder ? (
        <>
          <h2>Selecione a borda:</h2>
          { borderData && borderData?.map(({ id_pizza_border, name, price }) => (
            <PopoverListButton
              key={id_pizza_border}
              item={name}
              price={price}
              setStepOn={() => setarValores(name, price)}
              plusIcon
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
