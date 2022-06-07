import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import {
  Cart,
  ChooseTypePizza, Home, Login, Register,
} from '../pages';
import PrivateRoute from './PrivateRoute';

export function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/pedir" element={<PrivateRoute />}>
          <Route path="/pedir" element={<ChooseTypePizza />} />
        </Route>

        <Route path="/cart" element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Switch>
    </Router>
  );
}
