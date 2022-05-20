import { Header } from './NavigationBar.styles';

export function NavigationBar() {
  return (
    <Header>
      <nav>
        <ul>
          <li><button type="button">HOME</button></li>
          <li><button type="button">HANGOUTS</button></li>
          <li><button type="button">LOREM</button></li>
          <li><button type="button">PIZZA</button></li>
          <li><button type="button">BLOG</button></li>
          <li><button type="button">CONTATO</button></li>
        </ul>
      </nav>
    </Header>
  );
}
