import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getToken } from '../../store/Auth/reducer';
import {
  Popover, TypeButtonPopover,
} from '../../components';
import { TypeFood, typeFoods } from '../../assets/Foods';
import { Main } from './ChooseTypePizza.styles';
import { Footer, Header, NavigationBar } from '../../layouts';

export function ChooseTypePizza() {
  const [selectedType, setSelectedType] = useState<TypeFood | null>(null);
  const token = useSelector(getToken);
  const navigate = useNavigate();
  const location = useLocation();

  const handleButton = (category: TypeFood) => {
    if (token === 'empty') {
      navigate('/login', { replace: true, state: { prevPath: location.pathname } });
    } else {
      setSelectedType(category);
    }
  };

  return (
    <>
      <NavigationBar />
      <Header title="Pizzas">
        Feita a partir das técnicas de grandes mestres italianos
        nós levamos apenas os melhores ingredientes
        para nossos clientes
      </Header>
      <Main>

        { Object.entries(typeFoods).map(([key, value]) => (
          <TypeButtonPopover
            onSelectType={handleButton}
            category={key}
            title={value.title}
            source={value.image.source}
            alt={value.image.alt}
            key={key}
          />
        )) }
      </Main>

      <Dialog open={selectedType !== null} onClose={() => setSelectedType(null)} as="div">
        { selectedType && (
        <Popover
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        ) }
      </Dialog>
      <Footer />
    </>
  );
}
