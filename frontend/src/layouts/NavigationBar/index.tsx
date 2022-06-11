import { useState } from 'react';
import { LinksBar, LinksBarProps } from './LinksBar';
import { Nav, ListIcon as List } from './NavigationBar.styles';

export function NavigationBar({ elements }: LinksBarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Nav>
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
