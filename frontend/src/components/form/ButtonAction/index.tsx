import { ReactNode } from 'react';
import { Loading } from '../..';
import { Button } from './ButtonAction.styles';

interface ButtonActionProps {
  small?: boolean;
  round?: boolean;
  children: ReactNode;
  isLoading?: boolean;
}
export function ButtonAction({
  small, round, isLoading, children,
}: ButtonActionProps) {
  return (
    <Button
      type="submit"
      round={!round}
      small={small}
      disabled={isLoading}
    >
      { isLoading ? <Loading color="white" /> : children }
    </Button>
  );
}
