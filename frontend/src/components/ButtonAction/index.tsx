import { ReactNode } from 'react';
import { Button } from './ButtonAction.styles';

interface ButtonActionProps {
  small?: boolean;
  children: ReactNode;
}
export function ButtonAction({ small, children }: ButtonActionProps) {
  return (
    <Button
      type="submit"
      small={small}
    >
      {children}
    </Button>
  );
}
