import { Circle } from './Loading.styles';

export type LoadingStyles = {
  color: 'black' | 'white';
}
interface LoadingProps extends LoadingStyles {}

export function Loading({ color }: LoadingProps) {
  return (
    <Circle
      color={color}
      weight="bold"
    />
  );
}
