import { ReactNode } from 'react';
import { TaillessArrow } from '../../pages/User/steps/MyData/MyData.styles';
import { Button } from './ChangeOption.styles';

export type ChangeOptionStyles = {
  showArrow?: boolean,
}
interface ChangeOptionProps extends ChangeOptionStyles {
  children?: ReactNode;
  optionTitle: string;
  optionDescription?: string;
  setOption: (value: string) => void;
}
export function ChangeOption({
  showArrow, children, optionTitle, optionDescription, setOption,
}: ChangeOptionProps) {
  return (
    <Button
      className="logout"
      type="button"
      onClick={() => setOption(optionTitle)}
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
      { showArrow && (
        <TaillessArrow weight="bold" className="arrowsvg" />
      ) }
    </Button>
  );
}
