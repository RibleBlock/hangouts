/* eslint-disable camelcase */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from 'react';
import { Flavor, FlavorDB } from '../../../interfaces/module';
import { useGetFlavorsFilterMutation } from '../../../services/api/Auth';
import { Graphic } from '../Graphic';
import { Loading } from '../../Loading';
import { AdmLineFlavors } from '../AdmLineFlavors';
import {
  Infos, BoxList, Table, MainBox, EditSecti, EditBox, BoxLoadind,
} from './AdmFlavors.styles';
import { InputFilter } from '../../../pages/Menu/Menu.styles';

export function AdmFlavors() {
  const [getFlavors] = useGetFlavorsFilterMutation();
  const [flavors, setFlavors] = useState<Flavor[]>();
  const [flavorFilter, setFlavorFilter] = useState<string>('');
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);

  const [flavorSelected, setFlavorSelected] = useState<Flavor | null>(null);

  useEffect(() => {
    setIsLoadingData(true);
    async function getFlavorsPizza() {
      const { data } = await getFlavors({ filter: flavorFilter, table: 'flavor' }) as any;
      setFlavors(data);
      setIsLoadingData(false);
    }
    getFlavorsPizza();
  }, [flavorFilter]);

  // AO CLICAR //
  function action(flavor: Flavor) {
    setFlavorSelected(flavor);
    console.log(flavorSelected?.name);
  }

  return (
    <MainBox>
      <Infos>
        <Graphic
          label={flavorSelected?.name}
          labels={flavorSelected?.report.map(({ date }) => date) || []}
          data={flavorSelected?.report.map(({ times_ordered }) => times_ordered) || []}
        />

        <BoxList>
          <InputFilter
            type="text"
            name="filtro"
            placeholder="Digite o sabor que deseja"
            onChange={(e) => setFlavorFilter(e.target.value)}
            autoComplete="off"
          />
          <div>
            { isLoadingData || !flavors ? (
              <BoxLoadind>
                <Loading color="grey" big />
              </BoxLoadind>
            ) : (
              <Table>
                <tbody>
                  <AdmLineFlavors currentFlavor={null} action={action} />
                  { flavors.map((sabor) => (
                    <AdmLineFlavors key={sabor.id_flavor} currentFlavor={sabor} action={action} />
                  )) }
                </tbody>
              </Table>
            ) }
          </div>
        </BoxList>
      </Infos>
      <EditSecti>
        <EditBox>
          OLAaaaaaaaaaaaa
        </EditBox>
      </EditSecti>
    </MainBox>
  );
}
