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
                HANGOUTS
              </div>
            </Link>

          </li>
          <li>
            <Link to="https://google.com">
              <div>
                LOREM
              </div>
            </Link>

          </li>
          <li>
            <Link to="https://google.com">
              <div>
                PIZZA
              </div>
            </Link>

          </li>
          <li>
            <Link to="https://google.com">
              <div>
                BLOG
              </div>
            </Link>

          </li>
          <li>
            <Link to="https://google.com">
              <div>
                CONTATO
              </div>
            </Link>

          </li>
        </ul>
      </nav>
    </Header>
  );
}
