import { ButtonBC } from '../../../../components';
import { Div, Section, TaillessArrow } from './MyData.styles';

interface MyDataProps {
  user: User;
  setOption: (value: string) => void;
}
export function MyData({ user, setOption }: MyDataProps) {
  return (
    <>
      <Div>
        <ButtonBC arrow action={setOption} />
        <p>Meus dados</p>
      </Div>
      <Section>
        <button type="button" disabled>
          <span>E-mail</span>
          <span>{user.email}</span>
        </button>
        <hr />
        <button type="button">
          <span>Nome</span>
          <span>{user.name}</span>
          <TaillessArrow weight="bold" />
        </button>
        <hr />
        <button type="button">
          <span>Telefone</span>
          <span>{user.phone || 'Não definido'}</span>
          <TaillessArrow weight="bold" />
        </button>
        <hr />
        <button type="button">
          <span>Senha</span>
          <span>**********</span>
          <TaillessArrow weight="bold" />
        </button>
      </Section>
    </>
  );
}
