import {
  ClockCounterClockwise, Columns, CreditCard, MapPin,
} from 'phosphor-react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Footer, Header, NavigationBar } from '../../layouts';
import { decodeJWT } from '../../services/utils/Decode/DecodeJWT';
import { getToken, removeToken } from '../../store/Auth/reducer';
import {
  Box, Button, SignOutIcon, UserCircleIcon,
} from './User.styles';

export function User() {
  const token = useSelector(getToken);
  const currentUser = decodeJWT<User>(token);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logOut() {
    toast.info(`${currentUser.name} saiu`, {
      style: { backgroundColor: '#fff' },
    });
    dispatch(removeToken());
    navigate('/', { replace: true, state: { prevPath: location.pathname } });
  }

  return (
    <>
      <NavigationBar />
      <Header title="Meu Perfil" />

      <Box>
        <section>
          <div>
            <UserCircleIcon weight="thin" />
            <p>
              Bem vindo,
              {' '}
              { currentUser.name }
            </p>
          </div>
          <button
            type="button"
            onClick={logOut}
          >
            Não é você? Clique aqui para sair
            <SignOutIcon weight="light" />
          </button>
        </section>

        {/* Dados */}
        <section style={{ marginTop: '1.7rem', flexDirection: 'column' }}>
          {/*  */}
          <Button
            className="logout"
            type="button"
          >
            <UserCircleIcon weight="thin" />
            <div className="option">
              <p className="optionTitle">Meus Dados</p>
              <p className="optionDescription">Altere seus dados pessoais</p>
            </div>
          </Button>
          <hr /** */ />
          <Button
            className="logout"
            type="button"
          >
            <CreditCard weight="thin" />
            <div className="option">
              <p className="optionTitle">Meus Dados</p>
              <p className="optionDescription">Altere seus dados pessoais</p>
            </div>
          </Button>
          <hr /** */ />
          <Button
            className="logout"
            type="button"
          >
            <ClockCounterClockwise weight="thin" />
            <div className="option">
              <p className="optionTitle">Meus Dados</p>
              <p className="optionDescription">Altere seus dados pessoais</p>
            </div>
          </Button>
          <hr /** */ />
          <Button
            className="logout"
            type="button"
          >
            <MapPin weight="thin" />
            <div className="option">
              <p className="optionTitle">Meus Dados</p>
              <p className="optionDescription">Altere seus dados pessoais</p>
            </div>
          </Button>
        </section>
      </Box>
      <Footer />
    </>
  );
}
