import { useState } from 'react';
import {
  Footer,
  Header, NavigationBar, TypeButtonPopover as button, TypeButtonPopover,
} from '../../components';
import { TypeFood, typeFoods } from '../Home';
import { Main } from './ChooseTypePizza.styles';
// import { Main } from './ChooseTypePizza.styles';

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

        { Object.entries(typeFoods).map(([title, value]) => (
          <TypeButtonPopover
            category={value.title}
            source={value.image.source}
            alt={value.image.alt}
          />
        )) }
      </Main>
      <Footer />
    </>
  );
}
