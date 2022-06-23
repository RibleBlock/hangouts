import { useSelector } from 'react-redux';
import { Header, NavigationBar } from '../../layouts';
import { decodeJWT } from '../../services/utils/Decode/DecodeJWT';
import { getToken } from '../../store/Auth/reducer';

export function User() {
  const token = useSelector(getToken);
  const currentUser = decodeJWT<User>(token);

  return (
    <>
      <NavigationBar />
      <Header title="Meu Perfil" />
      <br />
      <h1 style={{ textAlign: 'center' }}>
        { currentUser.name }
      </h1>
    </>
  );
}
