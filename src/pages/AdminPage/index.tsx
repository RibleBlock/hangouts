import {
  Link, useLocation, useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ButtonList,
  CaretL, CaretR, InfoBox, Logo, Main, Menu, NavTables,
} from './AdminPage.styles';

import logo from '../../assets/images/logo.png';
import { decodeJWT } from '../../services/utils/Decode/DecodeJWT';
import { getToken } from '../../store/Auth/reducer';

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
        </Link>
      </Menu>
      <Main isOpen={menuIsOpen}>
        <NavTables>
          <h1>ALO</h1>
          <h1>OLA</h1>
          <h1>ALO</h1>
          <h1>OLA</h1>
          <h1>ALO</h1>
          <h1>OLA</h1>
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
          <Link to="/user" style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>VOLTAR</Link>
          <h2 style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>AdminPage</h2>
        </InfoBox>
      </Main>
    </>
  );
}
