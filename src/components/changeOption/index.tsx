import { ReactNode } from 'react';
import { ButtonLink, Button, Status } from './ChangeOption.styles';

interface ChangeOptionProps {
  tab?: string,
  children?: ReactNode;
  optionTitle: string;
  status?: string;
  optionDescription?: string;
  setOption: (value: any) => void;
}
export function ChangeOption({
  tab, children, optionTitle, optionDescription, status, setOption,
}: ChangeOptionProps) {
  if (!tab) {
    return (
      <Button
        type="button"
        onClick={setOption}
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

  return (
    <ButtonLink
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
    </ButtonLink>
  );
}
