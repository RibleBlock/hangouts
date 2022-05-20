import { useState } from 'react';
import { Header, NavigationBar, TypeButtonPopover as button } from '../../components';
import { TypeFood, typeFoods } from '../Home';
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
      <main>

        { Object.entries(typeFoods).map(([title, value]) => (
          <button type="button">
            <h2>{title}</h2>
            <img src={value.image.source} alt={value.image.source} />
            <p>Algum textinho sobre</p>
          </button>
        )) }
      </main>
    </>
  );
}
