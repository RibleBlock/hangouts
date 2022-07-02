import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ChangeOption } from '../../components';
import { Footer, Header, NavigationBar } from '../../layouts';
import { decodeJWT } from '../../services/utils/Decode/DecodeJWT';
import { getToken, removeToken } from '../../store/Auth/reducer';
import { BeginUser } from './BeginUser';
import { Box } from './User.styles';

export function User() {
  const token = useSelector(getToken);
  const currentUser = decodeJWT<User>(token);
  const [optionClicked, setOptionClicked] = useState('');

  function sowComponentsUsers(optionClicked: string) {
    switch (optionClicked) {
      case 'Meus dados':
        return (<h1>Meus dados</h1>);
      case 'Formas de pagamentos':
        return (<h1>Formas de pagamentos</h1>);
      case 'Histórico de compras':
        return (<h1>Histórico de compras</h1>);
      case 'Endereço':
        return (<h1>Endereço</h1>);
      case 'Admin':
        return (<h1>Admin</h1>);

      default:
        return (<BeginUser currentUser={currentUser} setOption={setOptionClicked} />);
    }
  }

  return (
    <>
      <NavigationBar />
      <Header title="Meu Perfil" />

      <Box>
        { sowComponentsUsers(optionClicked) }
      </Box>
      <Footer />
    </>
  );
}
