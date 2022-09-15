import { useState, memo } from 'react';
import { Box } from './InputText.styles';

interface InputTextProps {
  subtitle: string
  setText: (value: any) => void;
  type?: 'text' | 'number',
  small?: boolean,
}
function InputTextComponent({
  subtitle, setText, type, small,
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
          onChange={(e) => validateInput(e.target.value)}
        />
        <p>{ subtitle }</p>
      </label>
    </Box>
  );
}
export const InputText = memo(InputTextComponent);
