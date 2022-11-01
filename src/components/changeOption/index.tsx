import { ReactNode } from 'react';
import { TaillessArrow } from '../../pages/User/steps/MyData/MyData.styles';
import { Button, Status } from './ChangeOption.styles';

export type ChangeOptionStyles = {
  showArrow?: boolean,
}
interface ChangeOptionProps extends ChangeOptionStyles {
  tab: string,
  children?: ReactNode;
  optionTitle: string;
  status?: string;
  optionDescription?: string;
  setOption: (value: string) => void;
}
export function ChangeOption({
  tab, showArrow, children, optionTitle, optionDescription, status,
}: ChangeOptionProps) {
  return (
    <Button
      to={tab}
    >
      {children}
      <div className="option">
        <p className="optionTitle">
          {optionTitle}
        </p>
        <p className="optionDescription">
          {optionDescription}
        </p>
      </div>
      { status && (
        <Status status={status}>
          {status}
        </Status>
      ) }
    </Button>
  );
}
