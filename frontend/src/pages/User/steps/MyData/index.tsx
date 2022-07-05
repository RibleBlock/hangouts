import { MouseEvent, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { ButtonAction, ButtonBC } from '../../../../components';
import { DarkBG } from '../../../../components/Popover/Popover.styles';
import {
  BoxPopOver, Div, Section, TaillessArrow,
} from './MyData.styles';

interface MyDataProps {
  user: User;
  setOption: (value: string) => void;
}
export function MyData({ user, setOption }: MyDataProps) {
  const [popoverEditData, setPopoverEditData] = useState<boolean>(false);
  const [dataChenger, setDataChenger] = useState('');

  function openPopoverChangerData(e: MouseEvent) {
    const el = e.target as EventType & EventTarget;
    setDataChenger(el!.firstChild.innerText);
    setPopoverEditData(true);
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
            <p>Alteração de dados</p>
            <form method="post">

              <input type="text" placeholder={dataChenger} />
              { dataChenger === 'Senha' && (
                <input type="text" placeholder="Confirme a nova senha" />
              ) }
              <input type="text" placeholder="Confirme sua senha atual" />
              <ButtonAction
                isLoading={false}
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
