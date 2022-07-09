import { ReactNode } from 'react';
import { Loading } from '../..';
import { Button, MyLink as Link } from './ButtonAction.styles';

interface ButtonActionProps {
  small?: boolean,
  round?: boolean,
  noMargin?: boolean,
  children: ReactNode,
  isLoading?: boolean,
  type?: 'submit' | 'button',
  link?: boolean,
  to?: string,
}
export function ButtonAction({
  small, round, noMargin, isLoading, children, type, link, to,
}: ButtonActionProps) {
  if (link && to) {
    return (
      <Link
        to={to}
        noMargin={noMargin}
        round={!round}
        small={small}
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
      disabled={isLoading}
    >
      { isLoading ? <Loading color="white" /> : children }
    </Button>
  );
}
