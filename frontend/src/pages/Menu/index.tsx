/* eslint-disable camelcase */
import { Pizza } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Loading, MenuItem, MenuTitle } from '../../components';
import { CalzoneDB, Menu as MenuDB } from '../../interfaces/module';
import { Footer, Header, NavigationBar } from '../../layouts';
import { useGetFlavorsFilterMutation } from '../../services/api/Auth';
import { Section, Div, LoadBox } from './Menu.styles';

export function Menu() {
  const [isLoadingFlavors, setIsLoadingFlavors] = useState<boolean>(false);
  const [flavorFilter, setFlavorFilter] = useState<string>('');
  const [objSabores, setObjSabores] = useState<MenuDB[]>();
  const [objSaboresCalzone, setObjSaboresCalzone] = useState<CalzoneDB[]>();
  const [getFlavors] = useGetFlavorsFilterMutation();

  // DB SABORES
  useEffect(() => {
    setIsLoadingFlavors(true);
    async function getFlavorsEffect() {
      const data = await getFlavors({ filter: flavorFilter }) as any;
      const dataCalz = await getFlavors({ table: 'calzone_flavor', filter: flavorFilter }) as any;
      setObjSabores(data.data);
      setObjSaboresCalzone(dataCalz.data);
      console.log(objSabores);
      setIsLoadingFlavors(false);
    }
    getFlavorsEffect();
  }, [flavorFilter]);

  return (
    <>
      <NavigationBar />
      <Header title="Cardápio" />

      <Section>
        <input
          type="text"
          name="filtro"
          placeholder="Digite o sabor que deseja"
          onChange={(e) => setFlavorFilter(e.target.value)}
        />
      </Section>

      { !isLoadingFlavors ? (
        <Div>
          { (!objSabores?.length && !objSaboresCalzone?.length) ? (
            <div className="noPizza">
              <Pizza size={96} color="#5e5e5e" weight="light" />
              <h3>Esse sabor ainda não existe.</h3>
            </div>
          ) : (
            <>
              { (objSabores && objSaboresCalzone) && objSabores?.map(({
                id_flavor_type, name, flavor,
              }) => (
                <>
                  <MenuTitle key={id_flavor_type} title={name} />
                  { flavor.map(({
                    id_flavor, name, flavor_ingredient, image,
                  }) => (
                    <MenuItem
                      key={id_flavor}
                      image={image}
                      nameItem={name}
                      ingredients={flavor_ingredient}
                    />
                  )) }
                </>
              )) }
              { (objSabores && !!objSaboresCalzone?.length) && (
                <>
                  <MenuTitle title="Calzone" />
                  { objSaboresCalzone?.map(({ id_calzone_flavor, name, image }) => (
                    <MenuItem // agora tem imagem
                      key={id_calzone_flavor}
                      image={image}
                      nameItem={name}
                    />
                  )) }
                </>
              ) }
            </>
          ) }
        </Div>
      ) : (
        <LoadBox>
          <Loading color="grey" />
        </LoadBox>
      ) }
      {/* <Footer /> */}
      <Footer />
    </>
  );
}
