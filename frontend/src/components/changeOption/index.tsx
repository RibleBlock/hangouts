import { ReactNode } from 'react';
import { Button } from './ChangeOption.styles';

interface ChangeOptionProps {
  children: ReactNode;
  optionTitle: string;
  optionDescription: string;
  setOption: (value: string) => void;
}
export function ChangeOption({
  children, optionTitle, optionDescription, setOption,
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
    </Button>
  );
}
