import { TypeFood } from '../../pages/Home';
import { ButtonBox } from './TypeButtonPopover.styles';

interface TypeButtonPopoverProps {
  onSelectType: (type: TypeFood) => void;
  category: string;
  title: string;
  source: string;
  alt: string;
}
export function TypeButtonPopover({
  onSelectType, category, title, source, alt,
}: TypeButtonPopoverProps) {
  return (
    <ButtonBox
      onClick={() => onSelectType(category as TypeFood)}
      type="button"
    >
      <h2>{title}</h2>
      <img src={source} alt={alt} />
    </ButtonBox>
  );
}
