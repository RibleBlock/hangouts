import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LinksBar, LinksBarProps } from './LinksBar';
import { Nav, ListIcon as List } from './NavigationBar.styles';

import hangoutsLogo from '../../assets/images/logo.png';

export function NavigationBar({ elements }: LinksBarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Nav>
        <Link to="/">
          <img src={hangoutsLogo} alt="Hangouts LOGO" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <List weight="regular" />
        </button>
        <LinksBar elements={elements} />
      </Nav>
      <nav style={{ position: 'sticky', top: '7rem' }}>
        <LinksBar isOpen={isOpen} elements={elements} />
      </nav>
    </>
  );
}
