import { Link } from 'react-router-dom';

export function AdminPage() {
  return (
    <>
      <Link to="/user" style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>VOLTAR</Link>
      <h1 style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>AdminPage</h1>
    </>
  );
}
