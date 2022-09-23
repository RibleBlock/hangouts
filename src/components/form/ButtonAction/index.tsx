import { ReactNode } from 'react';
import { Loading } from '../..';
import { Button, MyLink as Link } from './ButtonAction.styles';

export type ButtonActionStyles = {
  small?: boolean,
  round?: boolean,
  noMargin?: boolean,
  secundary?: boolean,
}
interface ButtonActionProps extends ButtonActionStyles {
  children: ReactNode,
  isLoading?: boolean,
  type?: 'submit' | 'button',
  link?: boolean,
  to?: string,
}
export function ButtonAction({
  small, secundary, round, noMargin, isLoading, children, type, link, to,
}: ButtonActionProps) {
  if (link && to) {
    return (
      <Link
        to={to}
        small={small}
        secundary={secundary}
        style={{
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
      disabled={isLoading}
    >
      { isLoading ? <Loading color="white" /> : children }
    </Button>
  );
}
