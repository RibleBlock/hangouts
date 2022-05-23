import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { Header } from './NavigationBar.styles';

export interface Position {
  fixed?: boolean;
}
interface NavigationBarPropss extends Position {
  elements?: string[]
}
export function NavigationBar({ elements, fixed }: NavigationBarPropss) {
  return (
    <>
      {/* DIV de preenchimento */}
      <div style={{ display: fixed ? 'block' : 'none', height: '7rem' }}></div>
      <Header fixed={fixed}>
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
          </ul>
        </nav>
      </Header>
    </>
  );
}
