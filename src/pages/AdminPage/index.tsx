import {
  Link, useLocation, useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ButtonList,
  CaretL, CaretR, InfoBox, Logo, Main, Menu, NavButton, NavTables,
} from './AdminPage.styles';

import logo from '../../assets/images/logo.png';
import { decodeJWT } from '../../services/utils/Decode/DecodeJWT';
import { getToken } from '../../store/Auth/reducer';
import { AdmTableUsers } from '../../components';

export function AdminPage() {
  const { admin } = decodeJWT<User>(useSelector(getToken));
  const [tableSelected, setTableSelected] = useState<string>('users');
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // fazer um login para ver se é admin
    if (!admin) {
      navigate('/user', { replace: true, state: { prevPath: location.pathname } });
    }
  }, []);

  return (
    <>
      <Menu>
        <Link to="/">
          <Logo src={logo} alt="logo hangouts" />
          <Link
            to="/user"
            style={{ fontSize: 12, verticalAlign: 'top', color: '#0030f1' }}
          >
            VOLTAR
          </Link>
        </Link>
      </Menu>
      <Main isOpen={menuIsOpen}>
        <NavTables>
          <NavButton
            type="button"
            isSelected={tableSelected === 'users'}
            onClick={() => setTableSelected('users')}
          >
            USERS
          </NavButton>
          <NavButton
            type="button"
            isSelected={tableSelected === 'item2'}
            onClick={() => setTableSelected('item2')}
          >
            ITEM_2
          </NavButton>
        </NavTables>
        <InfoBox>
          <ButtonList
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            type="button"
          >
            { !menuIsOpen
              ? <CaretR weight="duotone" />
              : <CaretL weight="duotone" /> }
          </ButtonList>
          {/**/}
          <AdmTableUsers />
        </InfoBox>
      </Main>
    </>
  );
}
