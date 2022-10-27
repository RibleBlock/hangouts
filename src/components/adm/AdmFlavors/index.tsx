/* eslint-disable camelcase */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from 'react';
import { Flavor } from '../../../interfaces/module';
import { useGetFlavorsFilterMutation } from '../../../services/api/Auth';
import { Graphic } from '../Graphic';
import { Loading } from '../../Loading';
import { AdmLineFlavors } from '../AdmLineFlavors';
import {
  Infos, BoxList, Table, MainBox, EditSecti, BoxLoadind,
} from './AdmFlavors.styles';
import { InputFilter } from '../../../pages/Menu/Menu.styles';
import { AdmEditData } from '../AdmEditData';

export function AdmFlavors() {
  const [getFlavors] = useGetFlavorsFilterMutation();
  const [flavors, setFlavors] = useState<Flavor[]>();
  const [flavorFilter, setFlavorFilter] = useState<string>('');
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);

  const [flavorSelected, setFlavorSelected] = useState<Flavor | null>(null);
  const [image, setImage] = useState<string>(''); /// ///////

  useEffect(() => {
    setIsLoadingData(true);
    async function getFlavorsPizza() {
      const { data } = await getFlavors({ filter: flavorFilter, table: 'flavor' }) as any;
      setFlavors(data);
      setIsLoadingData(false);
    }
    getFlavorsPizza();
  }, [flavorFilter]);

  // AO CLICAR NO SABOR //
  function action() {
    console.log('adicionar');
    setFlavorSelected(null);
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
                  <AdmLineFlavors
                    currentFlavor={null}
                    action={() => {
                      if (!image) {
                        action();
                      }
                    }}
                  />
                  { flavors.map((sabor) => (
                    <AdmLineFlavors
                      key={sabor.id_flavor}
                      currentFlavor={sabor}
                      action={() => {
                        if (!image) {
                          setFlavorSelected(sabor);
                        }
                      }}
                    />
                  )) }
                </tbody>
              </Table>
            ) }
          </div>
        </BoxList>
      </Infos>
      <EditSecti>
        { !flavorSelected ? (
          <AdmEditData
            selectedFlavor={null}
            image={image}
            setImage={setImage}
          />
        ) : (
          <AdmEditData
            selectedFlavor={flavorSelected}
            image={image}
            setImage={setImage}
          />
        ) }
      </EditSecti>
    </MainBox>
  );
}
