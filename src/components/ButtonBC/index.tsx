import { ArrowLeft, X } from 'phosphor-react';
import { useLocation } from 'react-router-dom';
import { Button, Lincar } from './ButtonBC.styles';

export interface IconChange {
  right?: boolean;
  arrow?: boolean;
  absolute?: boolean;
  color?: string,
}
interface ButtonBCProps extends IconChange {
  to?: string,
  action?: (value: any) => void;
}
export function ButtonBC({
  to, action, right, arrow, absolute,
}: ButtonBCProps) {
  const location = useLocation();

  if (to) {
    return (
      <Lincar to={to} replace state={{ prevPath: location.pathname }}>
        { arrow ? <ArrowLeft weight="bold" /> : <X weight="bold" /> }
      </Lincar>
    );
  }

  return (
    <Button
      type="button"
      right={right}
      arrow={arrow}
      absolute={absolute}
      onClick={() => action && action(null)}
    >
      { arrow ? <ArrowLeft weight="bold" /> : <X weight="bold" /> }
    </Button>
  );
}
