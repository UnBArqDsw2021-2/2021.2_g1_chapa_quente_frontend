/* eslint-disable no-undef */
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState();

  useEffect(() => {
    const dataUser = sessionStorage.getItem('@user');
    const tokenUser = sessionStorage.getItem('@token');

    const data = JSON.parse(dataUser);
    const tokenData = JSON.parse(tokenUser);

    if (data && tokenData) {
      setIsAuthenticate(true);
      setUser(data);
      setToken(tokenData);
    }
  }, []);

  const logOut = () => {
    setIsAuthenticate(false);
    sessionStorage.removeItem('@user');
    sessionStorage.removeItem('@token');
  };

  return (
    <AuthContext.Provider
      value={{
        ...user,
        setUser,
        isAuthenticate,
        setIsAuthenticate,
        logOut,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
