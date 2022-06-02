import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  const isLoggedIn = true; // Por enquanto
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate to="/login" replace state={{ prevPath: location.pathname }} />
    );
  }

  return <Outlet />;
};

export default PrivateRoute;
