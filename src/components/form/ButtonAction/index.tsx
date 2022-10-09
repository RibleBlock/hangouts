import { ReactNode } from 'react';
import { Loading } from '../..';
import { Button, MyLink as Link } from './ButtonAction.styles';

export type ButtonActionStyles = {
  small?: string,
  round?: boolean,
  color?: string,
  bcolor?: string,
  noMargin?: boolean,
  secundary?: boolean,
}
interface ButtonActionProps extends ButtonActionStyles {
  children: ReactNode,
  isLoading?: boolean,
  action?: (value?: any) => void,
  type?: 'submit' | 'button',
  link?: boolean,
  to?: string,
}
export function ButtonAction({
  bcolor, color, small, secundary, round, noMargin, isLoading, children, type, link, to, action,
}: ButtonActionProps) {
  if (link && to) {
    return (
      <Link
        to={to}
        secundary={secundary}
        color={color}
        bcolor={bcolor}
        style={{
          maxWidth: small ? '18rem' : '38rem',
          marginTop: !noMargin ? '2.5rem' : '0',
          borderRadius: round ? '5rem' : '.6rem',
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <Button
      type={type}
      noMargin={noMargin}
      round={!round}
      small={small}
      secundary={secundary}
      color={color}
      bcolor={bcolor}
      onClick={action}
      disabled={isLoading}
    >
      { isLoading ? <Loading color={color!} /> : children }
    </Button>
  );
}
