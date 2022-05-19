import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';
import { FooterBox } from './Footer.styles';

export function Footer() {
  return (
    <FooterBox>
      <p>© 2022 Copyright - Riquelme, George e Victor</p>
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
