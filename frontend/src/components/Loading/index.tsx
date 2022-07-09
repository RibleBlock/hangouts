import { Circle } from './Loading.styles';

export type LoadingStyles = {
  color: 'black' | 'white' | 'grey';
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
