import { FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { ButtonBC } from '..';
import {
  BordersType, SizeType, TypeFood, typeFoods,
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
  const [size, setSize] = useState<SizeType | null>(null);
  const [border, setBorder] = useState<BordersType | null>(null);
  const [flavor, setFlavor] = useState<string[]>([]);
  const [comment, setComment] = useState<string>('');

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(selectedType, size, border, flavor, comment);
  }, [selectedType, size, border, flavor, comment]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      await addToCart({
        category: selectedType, size, border, flavors: flavor, comment, id_user: currentUser.id,
      }).unwrap();
      // eslint-disable-next-line no-console
      console.info('Enviado', selectedType, size, border, flavor, comment);
      navigate('/cart', { replace: true, state: { prevPath: location.pathname } });
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.error(error);
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
          <input type="hidden" name="type" value={selectedType} />
          <input type="hidden" name="size" value={size || 'vazio'} />
          <input type="hidden" name="border" value={border || 'vazio'} />
          <input type="hidden" name="flavor" value={flavor} />

          { (selectedType === 'BEBIDA') || (selectedType === 'CALZONE') || (size && border) ? (
            <PopoverFlavorsStep
              chosenType={selectedType}
              size={size || 'BROTO'}
              setFlavors={setFlavor}
              flavors={flavor}
              setComment={setComment}
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
                />
              ) : (
                <PopoverSizeStep
                  setSize={setSize}
                  chosenType={selectedType}
                />
              ) }
            </>
          )}

        </form>
      </PopoverBox>
    </DarkBG>
  );
}
