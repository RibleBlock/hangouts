import { ReactNode } from 'react';
import { Loading } from '../..';
import { Button } from './ButtonAction.styles';

interface ButtonActionProps {
  small?: boolean;
  children: ReactNode;
  isLoading?: boolean;
}
export function ButtonAction({ small, isLoading, children }: ButtonActionProps) {
  return (
    <Button
      type="submit"
      small={small}
      disabled={isLoading}
    >
      { isLoading ? <Loading color="white" /> : children }
    </Button>
  );
}
