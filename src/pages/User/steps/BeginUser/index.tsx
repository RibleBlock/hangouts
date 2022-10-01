import {
  ClockCounterClockwise, CreditCard, MapPin, CurrencyCircleDollar,
} from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ChangeOption } from '../../../../components';
import { removeToken } from '../../../../store/Auth/reducer';
import { Section, SignOutIcon, UserCircleIcon } from './BeginUser.styles';

interface BeginUserProps {
  currentUser: User;
  setOption: (value: string) => void;
}
export function BeginUser({ currentUser, setOption } : BeginUserProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    toast.info(`${currentUser.name} saiu`);
    dispatch(removeToken());
    navigate('/', { replace: true, state: { prevPath: location.pathname } });
  };

  return (
    <>
      <Section style={{ flexDirection: 'row' }}>
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
      </Section>

      {/* Dados */}
      <Section style={{ marginTop: '1.7rem', flexDirection: 'column' }}>
        {/*  */}
        <ChangeOption
          tab="/user?tab=mydata"
          optionTitle="Meus dados"
          optionDescription="Altere seus dados pessoais"
          setOption={setOption}
        >
          <UserCircleIcon weight="thin" />
        </ChangeOption>
        <hr /** */ />

        <ChangeOption
          tab="/user?tab=address"
          optionTitle="Endereço"
          optionDescription="Altere o endereco de entraga"
          setOption={setOption}
        >
          <MapPin weight="thin" />
        </ChangeOption>
        <hr /** */ />

        <ChangeOption
          tab="/user?tab=historic"
          optionTitle="Histórico de compras"
          optionDescription="Acompanhar pedidos e ver historico"
          setOption={setOption}
        >
          <ClockCounterClockwise weight="thin" />
        </ChangeOption>

        { currentUser.admin && (
        <>
          <hr />
          <ChangeOption
            tab="/admin"
            setOption={setOption}
            optionTitle="Admin"
            optionDescription="Administre os pedidos em andamento"
          >
            <CurrencyCircleDollar weight="thin" />
          </ChangeOption>
        </>
        ) }

      </Section>
    </>
  );
}
