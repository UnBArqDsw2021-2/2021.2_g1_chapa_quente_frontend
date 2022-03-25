import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const status = sessionStorage.getItem('@user');
    const statusUser = JSON.parse(status);
    console.log('aaa',status)
    console.log('aaa',statusUser)

    if (statusUser) {
      setIsAuthenticate(true);
      setUser(statusUser)
    }
  }, []);

  const logOut = () => {
    setIsAuthenticate(false);
    sessionStorage.removeItem('@user');
  };

  return (
    <AuthContext.Provider
      value={{
        ...user,
        setUser,
        isAuthenticate,
        setIsAuthenticate,
        logOut,
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
