import { useState } from 'react';
import { Box } from './InputText.styles';

interface InputTextProps {
  subtitle: string
  setText: (text: string) => void;
}
export function InputText({ subtitle, setText }: InputTextProps) {
  const [isValid, setIsvalid] = useState<boolean>(false);

  function validateInput(text: string) {
    if (text) {
      setIsvalid(true);
      setText(text);
    } else {
      setIsvalid(false);
    }
  }

  return (
    <Box valid={isValid}>
      <label htmlFor="comment">
        <input
          type="text"
          id="comment"
          name="observacoes"
          onChange={(e) => validateInput(e.target.value)}
        />
        <p>{ subtitle }</p>
      </label>
    </Box>
  );
}
