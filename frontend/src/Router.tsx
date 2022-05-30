import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import { ChooseTypePizza, Home, Login } from './pages';

export function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pedir" element={<ChooseTypePizza />} />
      </Switch>
    </Router>
  );
}
