import { useState } from 'react';
import { Banner } from './Home.styles';

import logoBanner from '../../assets/images/logo.png';
import { Footer, NavigationBar } from '../../components';
import { Section } from '../../components/Section';

import imagePizza from '../../assets/images/imagePizza.svg';
import imageCalzone from '../../assets/images/imageCalzone.svg';
import imageRefrigerante from '../../assets/images/imageRefrigerante.svg';
import { TypeFoodButton } from '../../components/TypeFoodButton';

const typeFoods = {
  PIZZA: {
    title: 'Pizzas',
    image: {
      source: imagePizza,
      alt: 'Imagem de uma pizza',
    },
  },
  CALZONE: {
    title: 'Calzones',
    image: {
      source: imageCalzone,
      alt: 'Imagem de uma Calzones',
    },
  },
  BEBIDA: {
    title: 'Bebidas',
    image: {
      source: imageRefrigerante,
      alt: 'Imagem de uma Garrafa',
    },
  },
};
export type TypeFood = keyof typeof typeFoods;

export function Home() {
  const [typeFood, setTypeFood] = useState<TypeFood | null>(null);

  return (
    <>
      <section>
        <Banner>
          <img src={logoBanner} alt="pizzaria" />
        </Banner>
        <NavigationBar />
      </section>
      <Section
        title="Hangouts"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque vel diam ante. Aliquam auctor, arcu a sollicitudin
          suscipit, ante eros luctus lacus, at semper nunc magna
          suscipit libero. Rutrum ligula et, consequat ex.
        </p>
      </Section>
      <Section
        background
        title="Hangouts"
      >
        <p>
          Aliquam fermentum pellentesque mauris a convallis.
          Mauris nisi mi, euismod at mollis nec, suscipit a nibh.
          Sed luctus odio a felis rutrum malesuada. Integer eu nunc tincidunt,
          sollicitudin augue sit amet, tempus erat. Aenean eu mi tellus.
          Praesent scelerisque nunc at urna pellentesque luctus.
          Praesent efficitur ultrices augue eget egestas.
        </p>
      </Section>
      <Section
        subtitle="Nossas"
        title="Pizzas"
      >
        <div className="boxLinks">
          { Object.entries(typeFoods).map(([title, value]) => (
            <TypeFoodButton
              onSelectTypeFood={setTypeFood}
              title={title}
              source={value.image.source}
              alt={value.image.alt}
            />
          )) }
        </div>
      </Section>
      <Footer />
    </>
  );
}
