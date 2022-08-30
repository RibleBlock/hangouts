import { useEffect, useState } from 'react';
import { useGetAllUsersMutation } from '../../../services/api/Auth';
import { Loading } from '../../Loading';
import { AdmLineTable } from '../AdmLineTable';
import {
  Table, THead, TBody, BoxLoadind,
} from './AdmTableUsers.styles';

export function AdmTableUsers() {
  const [getUsers] = useGetAllUsersMutation();
  const [isloadingData, setIsloadingData] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    setIsloadingData(true);
    async function adminFunction() {
      const { data } = await getUsers('') as any;
      setAllUsers([...data]);
      setIsloadingData(false);
    }
    adminFunction();
  }, []);

  return (
    <>
      { isloadingData ? (
        <BoxLoadind>
          <Loading big color="grey" />
        </BoxLoadind>
      ) : (
        <Table>
          <THead>
            <AdmLineTable head fields={['ID', 'Criado em', 'Nome', 'E-mail', 'Telefone', 'isAdmin']} />
          </THead>
          <TBody>
            <AdmLineTable fields={allUsers!} />
          </TBody>
        </Table>
      ) }
      {/*  */}
    </>
  );
}
