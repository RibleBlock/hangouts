import { ArrowLeft, X } from 'phosphor-react';
import { Button } from './ButtonBC.styles';

export interface IconChange {
  right?: boolean;
  arrow?: boolean;
}
interface ButtonBCProps extends IconChange {
  action: (value: null) => void;
}
export function ButtonBC({ action, right, arrow }: ButtonBCProps) {
  return (
    <Button
      right={right}
      type="button"
      arrow={arrow}
      onClick={() => action(null)}
    >
      { arrow ? <ArrowLeft weight="bold" /> : <X weight="bold" /> }
    </Button>
  );
}
