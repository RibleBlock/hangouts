import { ReactNode } from 'react';
import { Button } from './ChangeOption.styles';

interface ChangeOptionProps {
  children: ReactNode;
  optionTitle: string;
  optionDescription: string;
}
export function ChangeOption({ children, optionTitle, optionDescription }: ChangeOptionProps) {
  return (
    <Button
      className="logout"
      type="button"
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
    </Button>
  );
}
