import { Linked } from './TypeFood.styles';

export interface TypeFoodButtonProps {
  title: string;
  source: string;
  alt: string;
}

export function TypeFoodButton({
  title, source, alt,
}: TypeFoodButtonProps) {
  return (
    <Linked to="/categoria/" title={title}>
      <img src={source} alt={alt} />
    </Linked>
  );
}
