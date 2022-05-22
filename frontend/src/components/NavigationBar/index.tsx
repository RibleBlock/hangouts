import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { Header } from './NavigationBar.styles';

interface NavigationBarPropss {
  elements?: string[]
}
export function NavigationBar({ elements }: NavigationBarPropss) {
  return (
    <Header>
      <nav>
        <ul>
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
        </ul>
      </nav>
    </Header>
  );
}
