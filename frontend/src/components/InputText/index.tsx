import { Box } from './InputText.styles';

interface InputTextProps {
  subtitle: string
  setText: (text: string) => void;
}
export function InputText({ subtitle, setText }: InputTextProps) {
  return (
    <Box>
      <label htmlFor="comment">
        <input
          type="text"
          id="comment"
          name="observacoes"
          onChange={(e) => setText(e.target.value)}
        />
        <p>{ subtitle }</p>
      </label>
    </Box>
  );
}
