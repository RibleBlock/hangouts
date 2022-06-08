import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';
import {
  Footer, Header, NavigationBar, Popover, TypeButtonPopover,
} from '../../components';
import { TypeFood, typeFoods } from '../../assets/Foods';
import { Main } from './ChooseTypePizza.styles';

export function ChooseTypePizza() {
  const [selectedType, setSelectedType] = useState<TypeFood | null>(null);

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
            onSelectType={setSelectedType}
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
