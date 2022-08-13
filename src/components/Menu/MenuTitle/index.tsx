import { Tudo } from './MenuTitle.styles';

export function MenuTitle({ title }: {title: string}) {
  return (
    <Tudo>
      <svg width="136" height="2" viewBox="0 0 136 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H136" stroke="#A67E3D" />
      </svg>

      <svg width="198" height="2" viewBox="0 0 198 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1L198 1" stroke="#A67E3D" />
      </svg>

      <h2>{title}</h2>

      <svg width="198" height="2" viewBox="0 0 198 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1L198 1" stroke="#A67E3D" />
      </svg>
      <svg width="136" height="2" viewBox="0 0 136 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H136" stroke="#A67E3D" />
      </svg>
    </Tudo>
  );
}
