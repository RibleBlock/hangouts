import { useEffect, useState } from 'react';
import { useGetAllUsersMutation } from '../../../services/api/Auth';
import { AdmLineTable } from '../AdmLineTable';
import {
  Table, THead, TBody, Th,
} from './AdmTable.styles';

export function AdmTableUsers() {
  const [getUsers] = useGetAllUsersMutation();
  const [isloadingData, setIsloadingData] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    setIsloadingData(true);
    async function adminFunction() {
      const { data } = await getUsers('') as any;
      console.log(data);
      setAllUsers([...data]);
      console.log(allUsers);
      setIsloadingData(false);
    }
    adminFunction();
  }, []);

  return (
    <>
      { isloadingData ? (
        <h1>Carregando</h1>
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
