import { ReactNode } from 'react';
import { Loading } from '../..';
import { Button } from './ButtonAction.styles';

interface ButtonActionProps {
  small?: boolean;
  round?: boolean;
  noMargin?: boolean;
  children: ReactNode;
  isLoading?: boolean;
  type: 'submit' | 'button';
}
export function ButtonAction({
  small, round, noMargin, isLoading, children, type,
}: ButtonActionProps) {
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
