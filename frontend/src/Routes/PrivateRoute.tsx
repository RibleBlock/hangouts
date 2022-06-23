import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { getToken } from '../store/Auth/reducer';

const PrivateRoute: React.FC = () => {
  const isLoggedIn = useSelector(getToken);
  const location = useLocation();

  if (isLoggedIn === 'empty') {
    return (
      <Navigate to="/login" replace state={{ prevPath: location.pathname }} />
    );
  }

  return <Outlet />;
};

export default PrivateRoute;
