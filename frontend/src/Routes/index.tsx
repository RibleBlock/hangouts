import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import { ChooseTypePizza, Home, Login } from '../pages';
import PrivateRoute from './PrivateRoute';

export function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/pedir" element={<PrivateRoute />}>
          <Route path="/pedir" element={<ChooseTypePizza />} />
        </Route>

        <Route path="/cart" element={<PrivateRoute />}>
          <Route path="/cart" element={<h1>CART</h1>} />
        </Route>
      </Switch>
    </Router>
  );
}
