import { useState, memo } from 'react';
import { Box } from './InputText.styles';

interface InputTextProps {
  title: string
  setText: (value: any) => void;
  onFocus?: (value: any) => void,
  type?: 'text' | 'number',
  small?: boolean,
}
function InputTextComponent({
  title, setText, type, small, onFocus,
}: InputTextProps) {
  const [isValid, setIsvalid] = useState<boolean>(false);

  function validateInput(value: any) {
    if (value) {
      setIsvalid(true);
      setText(value);
    } else {
      setIsvalid(false);
    }
  }

  return (
    <Box valid={isValid} small={small}>
      <label htmlFor="comment">
        <input
          type={type}
          id="comment"
          name="observacoes"
          autoComplete="off"
          onFocus={onFocus}
          onChange={(e) => validateInput(e.target.value)}
        />
        <p>{ title }</p>
      </label>
    </Box>
  );
}
export const InputText = memo(InputTextComponent);
