import { ArrowLeft, X } from 'phosphor-react';
import { Button } from './ButtonBC.styles';

export interface IconChange {
  right?: boolean;
  arrow?: boolean;
  absolute?: boolean;
}
interface ButtonBCProps extends IconChange {
  action: (value: any) => void;
}
export function ButtonBC({
  action, right, arrow, absolute,
}: ButtonBCProps) {
  return (
    <Button
      type="button"
      right={right}
      arrow={arrow}
      absolute={absolute}
      onClick={() => action(null)}
    >
      { arrow ? <ArrowLeft weight="bold" /> : <X weight="bold" /> }
    </Button>
  );
}
