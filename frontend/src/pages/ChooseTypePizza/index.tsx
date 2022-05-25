import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';
import {
  Footer, Header, NavigationBar, Popover, TypeButtonPopover,
} from '../../components';
import { TypeFood, typeFoods } from '../Home';
import { Main } from './ChooseTypePizza.styles';

export function ChooseTypePizza() {
  const [selectedType, setSelectedType] = useState<TypeFood | null>(null);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(selectedType);
  }, [selectedType]);
  return (
    <>
      <NavigationBar />
      <Header title="Pizzas">
        Feita a partir das técnicas de grandes mestres italianos
        nós levamos apenas os melhores ingredientes
        para nossos clientes
      </Header>
      <Main>

        { Object.entries(typeFoods).map(([title, value]) => (
          <TypeButtonPopover
            onSelectType={setSelectedType}
            category={value.title}
            source={value.image.source}
            alt={value.image.alt}
            key={title}
          />
        )) }
      </Main>

      <Dialog open={selectedType !== null} onClose={() => setSelectedType(null)} as="div">
        <Popover />
      </Dialog>
      <Footer />
    </>
  );
}
