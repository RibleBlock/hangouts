import {
  ClockCounterClockwise, CreditCard, MapPin,
} from 'phosphor-react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ChangeOption } from '../../components';
import { Footer, Header, NavigationBar } from '../../layouts';
import { decodeJWT } from '../../services/utils/Decode/DecodeJWT';
import { getToken, removeToken } from '../../store/Auth/reducer';
import {
  Box, SignOutIcon, UserCircleIcon,
} from './User.styles';

export function User() {
  const token = useSelector(getToken);
  const currentUser = decodeJWT<User>(token);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logOut() {
    toast.info(`${currentUser.name} saiu`);
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
          <ChangeOption
            optionTitle="Meus dados"
            optionDescription="Altere seus dados pessoais"
          >
            <UserCircleIcon weight="thin" />
          </ChangeOption>
          <hr /** */ />

          <ChangeOption
            optionTitle="Formas de pagamentos"
            optionDescription="Adicione/Remova formas de pagamentos"
          >
            <CreditCard weight="thin" />
          </ChangeOption>
          <hr /** */ />

          <ChangeOption
            optionTitle="Histórico de compras"
            optionDescription="Acompanhar pedidos e ver historico"
          >
            <ClockCounterClockwise weight="thin" />
          </ChangeOption>
          <hr /** */ />

          <ChangeOption
            optionTitle="Endereco"
            optionDescription="Altere o endereco de entraga"
          >
            <MapPin weight="thin" />
          </ChangeOption>

        </section>
      </Box>
      <Footer />
    </>
  );
}
