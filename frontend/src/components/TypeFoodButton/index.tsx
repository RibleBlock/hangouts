import { TypeFood } from '../../pages/Home';
import { Button } from './TypeFood.styles';

interface TypeFoodButtonProps {
  onSelectTypeFood: (type: TypeFood) => void;
  title: string;
  source: string;
  alt: string;
}

export function TypeFoodButton({
  onSelectTypeFood, title, source, alt,
}: TypeFoodButtonProps) {
  return (
    <Button
      href="/typepizza"
      type="button"
      key={title}
      onClick={() => onSelectTypeFood(title as TypeFood)}
    >
      <img src={source} alt={alt} />
    </Button>
  );
}
