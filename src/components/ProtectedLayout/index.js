import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// eslint-disable-next-line react/prop-types
export const ProtectedLayout = ({ children }) => {
  const { isAuthenticate } = useAuth();
  const location = useLocation();

  if (!isAuthenticate) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
