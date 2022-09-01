import { useEffect, useState } from 'react';
import { InputFilter } from '../../../pages/Menu/Menu.styles';
import { useGetAllUsersMutation } from '../../../services/api/Auth';
import { Loading } from '../../Loading';
import { AdmLineTable } from '../AdmLineTable';
import {
  Table, THead, TBody, BoxLoadind, MainUser,
} from './AdmTableUsers.styles';

export function AdmTableUsers() {
  const [getUsers] = useGetAllUsersMutation();
  const [isloadingData, setIsloadingData] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [filterUsers, setFilterUsers] = useState<string>('');

  useEffect(() => {
    setIsloadingData(true);
    async function adminFunction() {
      const { data } = await getUsers({ filter: filterUsers }) as any;
      setAllUsers([...data]);
      setIsloadingData(false);
    }
    adminFunction();
  }, [filterUsers]);

  return (
    <MainUser>
      <InputFilter
        type="text"
        name="filtro"
        placeholder="Procurar Usuário"
        onChange={(e) => setFilterUsers(e.target.value)}
        autoComplete="off"
      />
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
    </MainUser>
  );
}
