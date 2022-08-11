import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { Footer, Header, NavigationBar } from '../../layouts';
import { decodeJWT } from '../../services/utils/Decode/DecodeJWT';
import { getToken } from '../../store/Auth/reducer';
import { BeginUser } from './steps/BeginUser';
import { MyData } from './steps/MyData';
import { OrderHistory } from './steps/OrderHistory';
import { Box } from './User.styles';

export function User() {
  const token = useSelector(getToken);
  const [currentUser, setCurrentUser] = useState<User>();
  const [loadingUserToken, setloadingUserToken] = useState<boolean>(true);
  const location = useLocation();

  // Para alterar o token //
  useEffect(() => {
    setloadingUserToken(true);
    async function loadingUserPage() {
      setCurrentUser(decodeJWT<User>(token));
      setloadingUserToken(false);
    }
    loadingUserPage();
  }, [token]);

  const [optionClicked, setOptionClicked] = useState<string>('');

  function sowComponentsUsers(optionClicked: string) {
    switch (optionClicked) {
      case 'Meus dados':
        return (
          <MyData
            user={currentUser!}
            setOption={setOptionClicked}
            loadingToken={setloadingUserToken}
          />
        );
      case 'Formas de pagamentos':
        return (<h1>Formas de pagamentos</h1>);
      case 'Histórico de compras':
        return (
          <OrderHistory
            user={currentUser!}
            setOption={setOptionClicked}
          />
        );
      case 'Endereço':
        return (<h1>Endereço</h1>);
      case 'Admin':
        return (<Navigate to="/admin" replace state={{ prevPath: location.pathname }} />);

      default:
        return (
          <BeginUser
            currentUser={currentUser!}
            setOption={setOptionClicked}
          />
        );
    }
  }

  return (
    <>
      <NavigationBar />
      <Header title={optionClicked || 'Meu Perfil'} />

      { !loadingUserToken ? (
        <Box>
          { sowComponentsUsers(optionClicked) }
        </Box>
      ) : (
        <h2>CARREGANDO</h2>
      ) }
      <Footer />
    </>
  );
}
