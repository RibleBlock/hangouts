import { ReactNode } from 'react';
import { SectionBox } from './Section.styles';

export interface DarkSection {
  background?: boolean;
}
interface SectionProps extends DarkSection {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function Section({
  background, children, subtitle, title,
}: SectionProps) {
  return (
    <SectionBox background={background}>
      <span>{subtitle || '2022'}</span>
      <h1>{title}</h1>
      <svg width="130" height="22" viewBox="0 0 130 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="10.5" x2="130" y2="10.5" stroke="#A67E3D" strokeWidth="3" />
        <rect x="17.0607" y="10.6064" width="13.5" height="13.5" transform="rotate(-45 17.0607 10.6064)" stroke="#A67E3D" strokeWidth="1.5" />
        <rect x="93.1676" y="10.7129" width="13.5" height="13.5" transform="rotate(-45 93.1676 10.7129)" stroke="#A67E3D" strokeWidth="1.5" />
        <rect x="74.1676" y="10.7129" width="13.5" height="13.5" transform="rotate(-45 74.1676 10.7129)" stroke="#A67E3D" strokeWidth="1.5" />
        <rect x="55.1676" y="10.7129" width="13.5" height="13.5" transform="rotate(-45 55.1676 10.7129)" stroke="#A67E3D" strokeWidth="1.5" />
        <rect x="36.1676" y="10.7129" width="13.5" height="13.5" transform="rotate(-45 36.1676 10.7129)" stroke="#A67E3D" strokeWidth="1.5" />
      </svg>
      { children }
    </SectionBox>
  );
}
