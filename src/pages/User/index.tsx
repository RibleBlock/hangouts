import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { Footer, Header, NavigationBar } from '../../layouts';
import { decodeJWT } from '../../services/utils/Decode/DecodeJWT';
import { getToken } from '../../store/Auth/reducer';
import { AddressUser } from './steps/AddressUser';
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

  function sowComponentsUsers(optionClicked: string | null) {
    switch (optionClicked) {
      case 'mydata':
        return (
          <MyData
            user={currentUser!}
            setOption={setOptionClicked}
            loadingToken={setloadingUserToken}
          />
        );
      case 'historic':
        return (
          <OrderHistory
            user={currentUser!}
            setOption={setOptionClicked}
          />
        );
      case 'address':
        return (
          <AddressUser
            user={currentUser!}
            setOption={setOptionClicked}
          />
        );
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

  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();
  const tab = query.get('tab');

  return (
    <>
      <NavigationBar />
      <Header title={optionClicked || 'Meu Perfil'} />

      { !loadingUserToken && (
        <Box>
          { sowComponentsUsers(tab) }
        </Box>
      ) }
      <Footer />
    </>
  );
}
