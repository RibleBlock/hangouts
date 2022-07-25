import { FormEvent, MouseEvent, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Eye, EyeClosed } from 'phosphor-react';
import { useLocation } from 'react-router-dom';
import { ButtonAction, ButtonBC } from '../../../../components';
import { DarkBG } from '../../../../components/Popover/Popover.styles';
import {
  BoxPopOver, Div, Section, TaillessArrow,
} from './MyData.styles';
import { useUpdateDataUserMutation } from '../../../../services/api/Auth';
import { addToken } from '../../../../store/Auth/reducer';
import { validationUserData } from '../../../../services/utils/validations/validationUser';

interface MyDataProps {
  user: User,
  setOption: (value: string) => void,
  loadingToken: (value: boolean) => void,
}
export function MyData({ user, setOption, loadingToken }: MyDataProps) {
  const [popoverEditData, setPopoverEditData] = useState<boolean>(false);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [dataChenger, setDataChenger] = useState('');
  const [updateData] = useUpdateDataUserMutation();
  const [fieldValue, setField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useDispatch();

  function openPopoverChangerData(e: MouseEvent) {
    const el = e.target as EventType & EventTarget;
    setDataChenger(el!.firstChild.innerText);
    setPopoverEditData(true);
  }

  async function chengeDataForm(e: FormEvent) {
    e.preventDefault();
    setLoadingSubmit(true);

    try {
      if (!fieldValue || !passwordField) return toast.error('Preencha os campos.');
      let inValid = '';

      let field = '';
      switch (dataChenger) {
        case 'Nome':
          field = 'name';
          inValid = validationUserData({ name: fieldValue! });
          break;
        case 'Telefone':
          field = 'phone';
          inValid = validationUserData({ phone: fieldValue! });
          break;
        case 'Senha':
          field = 'password';
          inValid = validationUserData({ password: fieldValue! });
          break;
        default:
          return toast.error('Algo deu errado.');
      }
      if (inValid) return toast.error(inValid);

      const { token } = await updateData({
        id: user.id, field, value: fieldValue, password: passwordField,
      }).unwrap() as any;
      dispatch(addToken(token));

      return toast.success(`${dataChenger} alterado.`);
    } catch (error: any) {
      if (error?.data.error) return toast.error(error?.data.error);
      return toast.error(error);
    } finally {
      setLoadingSubmit(false);
      setPopoverEditData(false);
      setVisible(false);
    }
  }

  return (
    <>
      <Div>
        <ButtonBC arrow action={setOption} />
        <p>Meus dados</p>
      </Div>
      <Section>
        <button
          type="button"
          name="email"
          onClick={(e) => openPopoverChangerData(e)}
          disabled
        >
          <span className="first">E-mail</span>
          <span>{user.email}</span>
        </button>
        <hr />
        <button
          type="button"
          name="nome"
          onClick={(e) => openPopoverChangerData(e)}
        >
          <span className="first">Nome</span>
          <span>{user.name}</span>
          <TaillessArrow weight="bold" />
        </button>
        <hr />
        <button
          type="button"
          name="telefone"
          onClick={(e) => openPopoverChangerData(e)}
        >
          <span className="first">Telefone</span>
          <span>{user.phone || 'Não definido'}</span>
          <TaillessArrow weight="bold" />
        </button>
        <hr />
        <button
          type="button"
          name="senha"
          onClick={(e) => openPopoverChangerData(e)}
        >
          <span className="first">Senha</span>
          <span>**********</span>
          <TaillessArrow weight="bold" />
        </button>
      </Section>

      <Dialog open={popoverEditData !== false} onClose={() => setPopoverEditData(false)} as="div">
        <DarkBG>
          <BoxPopOver>
            <header>
              <ButtonBC
                action={() => setPopoverEditData(false)}
                absolute
                arrow
              />
              <h2>
                Alterar
                {' '}
                { dataChenger }
              </h2>
            </header>
            <p>Atualizar dados pessoais</p>
            <form onSubmit={(e) => chengeDataForm(e)}>
              { dataChenger === 'Senha' ? (
                <>
                  <button type="button" onClick={() => setVisible(!visible)}>
                    { !visible ? <Eye size={20} /> : <EyeClosed size={20} /> }
                  </button>
                  <input
                    type={!visible ? 'text' : 'password'}
                    placeholder={dataChenger}
                    onChange={(e) => setField(e.target.value)}
                  />
                </>
              ) : (
                <input
                  type={!visible ? 'text' : 'password'}
                  placeholder={dataChenger}
                  onChange={(e) => setField(e.target.value)}
                />
              ) }

              <input
                type="password"
                placeholder="Confirme sua senha atual"
                onChange={(e) => setPasswordField(e.target.value)}
              />
              <ButtonAction
                type="submit"
                isLoading={loadingSubmit}
                small
              >
                Salvar
              </ButtonAction>
            </form>
          </BoxPopOver>
        </DarkBG>
      </Dialog>
    </>
  );
}
