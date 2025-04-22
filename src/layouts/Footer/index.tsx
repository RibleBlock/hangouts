import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';
import { FooterBox } from './Footer.styles';

export interface FooterProps {
  relative?: boolean,
}
export function Footer({ relative }: FooterProps) {
  const date = new Date();

  return (
    <FooterBox relative={relative}>
      <div>
        <p>© {date.getFullYear()} Copyright - Riquelme, George e Victor</p>
        <p>Av. Rep. Argentina, 2376 - Aberto todos os dias das 18:00 até 23:30</p>
      </div>
      <div>
        <a href="https://twitter.com/Hangouts_pizza" target="_blank" rel="noopener noreferrer">
          <TwitterLogo />
        </a>
        <a href="https://www.instagram.com/hangouts.pizza/" target="_blank" rel="noopener noreferrer">
          <InstagramLogo />
        </a>
        <a href="https://www.facebook.com/Hangouts.Pizza/" target="_blank" rel="noopener noreferrer">
          <FacebookLogo />
        </a>
      </div>
    </FooterBox>
  );
}
