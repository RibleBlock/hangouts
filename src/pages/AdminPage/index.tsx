import {
  Link, useLocation, useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import {
  ButtonList,
  CaretL, CaretR, InfoBox, Logo, Main, Menu, NavButton, NavTables, H1,
} from './AdminPage.styles';

import logo from '../../assets/images/logo.png';
import { decodeJWT } from '../../services/utils/Decode/DecodeJWT';
import { getToken } from '../../store/Auth/reducer';
import { AdmFlavors, AdmTableUsers } from '../../components';

export function AdminPage() {
  const { admin } = decodeJWT<User>(useSelector(getToken));
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [tableSelected, setTableSelected] = useState<{title: string, table: string}>({
    table: 'users', title: 'Usuários',
  });

  useEffect(() => {
    // fazer um login para ver se é admin
    if (!admin) {
      navigate('/user', { replace: true, state: { prevPath: location.pathname } });
    }
  }, []);

  function alterarTabela(): any {
    switch (tableSelected.table) {
      case 'pizza':
        return (<AdmFlavors />);

      default:
        return (<AdmTableUsers />);
    }
  }

  return (
    <Main isOpen={menuIsOpen}>
      <NavTables>
        <Link to="/">
          <Logo src={logo} alt="logo hangouts" />
        </Link>
        <NavButton
          type="button"
          isSelected={tableSelected.table === 'users'}
          onClick={() => setTableSelected({ table: 'users', title: 'Usuários' })}
        >
          <Icon icon="akar-icons:person" className="icon" />
          USUÁRIO
        </NavButton>
        <NavButton
          type="button"
          isSelected={tableSelected.table === 'pizza'}
          onClick={() => setTableSelected({ table: 'pizza', title: 'Sabores de Pizza' })}
        >
          <Icon icon="la:pizza-slice" className="icon" />
          SABORES
        </NavButton>
      </NavTables>
      <Menu menuIsOpen={menuIsOpen}>
        <H1>{`Gerenciar ${tableSelected.title}`}</H1>
      </Menu>
      <InfoBox>
        <ButtonList
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          type="button"
        >
          { !menuIsOpen
            ? <CaretR weight="duotone" />
            : <CaretL weight="duotone" /> }
        </ButtonList>
        { alterarTabela() }
      </InfoBox>
    </Main>
  );
}
