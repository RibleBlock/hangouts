import { TypeFood } from '../../pages/Home';
import { ButtonBox } from './TypeButtonPopover.styles';

interface TypeButtonPopoverProps {
  onSelectType: (type: TypeFood) => void;
  category: string;
  source: string;
  alt: string;
}
export function TypeButtonPopover({
  onSelectType, category, source, alt,
}: TypeButtonPopoverProps) {
  return (
    <ButtonBox
      onClick={() => onSelectType(category as TypeFood)}
      type="button"
    >
      <h2>{category}</h2>
      <img src={source} alt={alt} />
    </ButtonBox>
  );
}
