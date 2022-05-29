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
        <>
          <li>
            <Link to="/">
              <div>
                HANGOUTS
              </div>
            </Link>
          </li>
          <li>
            <Link to="/pedir">
              <div>
                PEDIR
              </div>
            </Link>
          </li>
        </>
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
        <Link to="/nothing">
          <div>
            CARDAPIO
          </div>
        </Link>

      </li>
      <li>
        <Link to="/nothing">
          <div>
            CARRINHO
          </div>
        </Link>

      </li>
      <li>
        <Link to="/nothing">
          <div>
            ENTRAR
          </div>
        </Link>
      </li>
    </List>
  );
}
