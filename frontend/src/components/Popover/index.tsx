import { FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ButtonBC } from '..';
import {
  SizeType, TypeFood, typeFoods,
} from '../../assets/Foods';
import { useAddToCartMutation } from '../../services/api/Auth';
import { decodeJWT } from '../../services/utils/Decode/DecodeJWT';
import { getToken } from '../../store/Auth/reducer';
import { DarkBG, PopoverBox } from './Popover.styles';
import { PopoverBorderStep } from './step/PopoverBorderStep';
import { PopoverFlavorsStep } from './step/PopoverFlavorsStep';
import { PopoverSizeStep } from './step/PopoverSizeStep';

interface PopoverProps {
  selectedType: TypeFood;
  setSelectedType: (value: null) => void;
}
export function Popover({ selectedType, setSelectedType }: PopoverProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [addToCart] = useAddToCartMutation();
  const currentUser = decodeJWT<User>(useSelector(getToken));

  const chosenType = typeFoods[selectedType];
  const [size, setSize] = useState<number>(0);
  const [qtdFlavors, setQtdFlavors] = useState<number>(1);
  const [border, setBorder] = useState<number>(0);
  const [flavor, setFlavor] = useState<number[]>([]);
  const [comment, setComment] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  useEffect(() => {
    console.log(selectedType, size, border, flavor, value, comment);
  }, [selectedType, size, border, flavor, comment, value]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoadingSubmit(true);

    try {
      if ((selectedType === 'PIZZA') && (!selectedType || !size || !border || !currentUser.id)) {
        return toast.error('Algo não está certo.');
      }
      if (!flavor.length) {
        return toast.error('Selecione pelo menos 1 sabor.');
      }

      await addToCart({
        category: selectedType,
        size,
        border,
        flavors: flavor,
        comment,
        value,
        idUser: currentUser.id,
      });

      // TEMPORÁRIO //
      toast.info(`Enviado ${selectedType}, ${size}, ${border}, ${flavor}, ${value}, ${comment}, ${currentUser.id}`);
      // //
      toast.success('Adicionado ao carrinho');
      return navigate('/cart', { replace: true, state: { prevPath: location.pathname } });
    } catch (error: any) {
      // //
      return toast.error(error);
    } finally {
      setIsLoadingSubmit(false);
    }
  }

  return (
    <DarkBG>
      <PopoverBox>
        <header>
          <h2>{ chosenType.title }</h2>
          <ButtonBC
            right
            absolute
            action={setSelectedType}
          />
        </header>
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* Pedido */}
          <input type="hidden" name="type" value={selectedType} />
          <input type="hidden" name="size" value={size} />
          <input type="hidden" name="border" value={border} />
          {/* <input type="hidden" name="flavor" value={flavor} /> */}
          <input type="hidden" name="value" value={value} />
          {/*  */}

          { (selectedType === 'BEBIDA') || (selectedType === 'CALZONE') || (size && border) ? (
            <PopoverFlavorsStep
              chosenType={selectedType}
              qtdFlavors={qtdFlavors}
              setFlavors={setFlavor}
              flavors={flavor}
              value={value}
              setValue={setValue}
              setComment={setComment}
              isLoadingSubmit={isLoadingSubmit}
            />
          ) : (
            <>
              <img
                src={chosenType.image.source}
                alt={chosenType.image.alt}
              />

              { size ? (
                <PopoverBorderStep
                  setBorda={setBorder}
                  setValue={setValue}
                  valueWish={value}
                />
              ) : (
                <PopoverSizeStep
                  setSize={setSize}
                  chosenType={selectedType}
                  setValue={setValue}
                  setQtdFlavors={setQtdFlavors}
                  valueWish={value}
                />
              ) }
            </>
          )}

        </form>
      </PopoverBox>
    </DarkBG>
  );
}
