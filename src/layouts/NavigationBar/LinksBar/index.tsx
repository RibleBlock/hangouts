import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { decodeJWT } from '../../../services/utils/Decode/DecodeJWT';
import { getToken } from '../../../store/Auth/reducer';
import { List } from './LinksBar.styles';

export interface LinksBarProps {
  isOpen?: boolean
  elements?: string[];
}
export function LinksBar({ isOpen, elements }: LinksBarProps) {
  const token = useSelector(getToken);
  const currentUser: User | false = token === 'empty' ? false : decodeJWT<User>(token);

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
        <Link to="/menu">
          <div>
            CARDAPIO
          </div>
        </Link>

      </li>
      <li>
        <Link to="/cart">
          <div>
            CARRINHO
          </div>
        </Link>

      </li>
      <li>
        { currentUser ? (
          <Link to="/user">
            <div>
              { currentUser.name.split(' ')[0].toUpperCase() }
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div>
              ENTRAR
            </div>
          </Link>
        ) }
      </li>
    </List>
  );
}
