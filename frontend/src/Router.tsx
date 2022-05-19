import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import { ChooseTypePizza, Home } from './pages';

export function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/typepizza" element={<ChooseTypePizza />} />
      </Switch>
    </Router>
  );
}
