import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';
import { FooterBox } from './Footer.styles';

export function Footer() {
  return (
    <FooterBox>
      <p>© 2022 Copyright - Riquelme, George e Victo</p>
      <div>
        <TwitterLogo />
        <InstagramLogo />
        <FacebookLogo />
      </div>
    </FooterBox>
  );
}
