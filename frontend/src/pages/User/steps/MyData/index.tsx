import { ButtonBC } from '../../../../components';
import { Section } from '../BeginUser/BeginUser.styles';

interface MyDataProps {
  setOption: (value: string) => void;
}
export function MyData({ setOption }: MyDataProps) {
  return (
    <Section>
      <header style={{ display: 'flex' }}>
        <ButtonBC arrow action={setOption} />
        <p>Meus dados</p>
      </header>
    </Section>
  );
}
