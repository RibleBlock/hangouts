import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { List } from './LinksBar.styles';

export interface LinksBarProps {
  isOpen?: boolean
  elements?: string[];
}
export function LinksBar({ isOpen, elements }: LinksBarProps) {
  return (
    <List isOpen={isOpen}>
      {!elements ? (
        <li>
          <Link to="/">
            <div>
              HOME
            </div>
          </Link>

        </li>
      ) : (
        elements.map((item) => (
          <li key={item}>
            <Scroll
              activeClass="active"
              to={item}
              spy
              smooth
              duration={500}
              offset={-70}
            >
              <div>
                { item.toUpperCase() }
              </div>
            </Scroll>
          </li>
        ))
      )}

      <li>
        <Link to="https://google.com">
          <div>
            CARDAPIO
          </div>
        </Link>

      </li>
      <li>
        <Link to="https://google.com">
          <div>
            CARRINHO
          </div>
        </Link>

      </li>
      <li>
        <Link to="https://google.com">
          <div>
            ENTRAR
          </div>
        </Link>
      </li>
    </List>
  );
}
