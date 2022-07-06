import { ArrowCart, Section } from './CartItem.styles';

interface CartItemProps {
  title: string,
}
export function CartItem({ title }: CartItemProps) {
  return (
    <Section>
      <div>
        <ArrowCart weight="bold" />
        <p>{title || 'Sem Titulo'}</p>
      </div>
      <p>R$ 0,00</p>
    </Section>
  );
}
