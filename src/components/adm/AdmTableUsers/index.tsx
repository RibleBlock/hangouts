import { CheckSquare, Square } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { InputFilter } from '../../../pages/Menu/Menu.styles';
import { useGetAllUsersMutation } from '../../../services/api/Auth';
import { decodeJWT } from '../../../services/utils/Decode/DecodeJWT';
import { getToken } from '../../../store/Auth/reducer';
import { ButtonAction } from '../../form/ButtonAction';
import { Loading } from '../../Loading';
import { AdmLineTable } from '../AdmLineTable';
import {
  Table, THead, TBody, BoxLoadind, MainUser,
} from './AdmTableUsers.styles';

export function AdmTableUsers() {
  const { admin } = decodeJWT<User>(useSelector(getToken));

  const [getUsers] = useGetAllUsersMutation();
  const [isloadingData, setIsloadingData] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [allUsersMemo, setAllUsersMemo] = useState<User[]>([]);
  const [filterUsers, setFilterUsers] = useState<string>('');

  useEffect(() => {
    setIsloadingData(true);
    async function adminFunction() {
      const { data } = await getUsers({ filter: filterUsers }) as any;
      setAllUsers([...data]);
      setAllUsersMemo([...data]);
      setIsloadingData(false);
    }
    adminFunction();
  }, [filterUsers]);

  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  const deactivatingFilters = () => {
    setButtonDisable(!buttonDisable);

    if (!buttonDisable) {
      setAllUsers(allUsers.filter((value) => !value.is_active));
    } else {
      setAllUsers(allUsersMemo);
    }
  };

  return (
    <MainUser>
      <div>
        <InputFilter
          type="text"
          name="filtro"
          placeholder="Procurar Usuário"
          onChange={(e) => setFilterUsers(e.target.value)}
          autoComplete="off"
        />
        <ButtonAction
          action={deactivatingFilters}
          isLoading={isloadingData}
          type="button"
          noMargin
          color="#282727"
          bcolor="#c9c9c9"
          small="16"
        >
          Desativados
          {' '}
          { buttonDisable ? <CheckSquare size="2rem" weight="bold" /> : (<Square size="2rem" weight="bold" />) }
        </ButtonAction>
      </div>
      { isloadingData ? (
        <BoxLoadind>
          <Loading big color="grey" />
        </BoxLoadind>
      ) : (
        <Table>
          <THead>
            <AdmLineTable head fields={['ID', 'Criado em', 'Nome', 'E-mail', 'Telefone', 'isAdmin', 'isActive']} />
          </THead>
          <TBody>
            <AdmLineTable setFields={setAllUsers} fields={allUsers!} isAdmin={admin} />
          </TBody>
        </Table>
      ) }
    </MainUser>
  );
}
