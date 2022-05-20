import { ButtonBox } from './TypeButtonPopover.styles';

interface TypeButtonPopoverProps {
  category: string;
  source: string;
  alt: string;
}
export function TypeButtonPopover({ category, source, alt }: TypeButtonPopoverProps) {
  return (
    <ButtonBox
      type="button"
    >
      <h2>{category}</h2>
      <img src={source} alt={alt} />
      <p>Algum textinho sobre</p>
    </ButtonBox>
  );
}
