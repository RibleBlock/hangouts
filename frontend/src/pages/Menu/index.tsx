/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { MenuItem } from '../../components';
import { CalzoneDB, Menu as MenuDB } from '../../constants/module';
import { Header, NavigationBar } from '../../layouts';
import { useGetFlavorsFilterMutation } from '../../services/api/Auth';
import { Section, Div } from './Menu.styles';

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
      const dataCalz = await getFlavors({ table: 'calzone', filter: flavorFilter }) as any;
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
          { (objSabores && objSaboresCalzone) && objSabores?.map(({
            id_flavor_type, name, flavor,
          }) => (
            <>
              <h2 key={id_flavor_type}>{name}</h2>
              { flavor.map(({
                id_flavor, name, id_image, flavor_ingredient,
              }) => (
                <MenuItem
                  key={id_flavor}
                  nameItem={name}
                  ingredients={flavor_ingredient}
                />
              )) }
            </>
          )) }
          { (objSabores && !!objSaboresCalzone?.length) && (
            <>
              <h2>Calzone</h2>
              { objSaboresCalzone?.map(({ id_calzone, name }) => (
                <MenuItem
                  key={id_calzone}
                  nameItem={name}
                />
              )) }
            </>
          ) }
        </Div>
      ) : (
        <h1>CARREGANDO</h1>
      ) }
    </>
  );
}
