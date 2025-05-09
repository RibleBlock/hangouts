import { Circle } from './Loading.styles';

export type LoadingStyles = {
  color: string;
}
interface LoadingProps extends LoadingStyles {}

export function Loading({ color, big }: LoadingProps & { big?: boolean }) {
  return (
    <Circle
      style={{ width: big ? '5rem' : '2.8rem', height: big ? '5rem' : '4rem' }}
      color={color}
      weight="bold"
    />
  );
}
