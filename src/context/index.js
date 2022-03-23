import React from 'react';

import { AuthProvider } from './AuthContext';

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
