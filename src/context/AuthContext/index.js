import React, { createContext, useContext, useEffect, useState } from 'react';
// import { loginRequest, setUserLocalStorage } from '../../utils/loginUtils';

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({});

  useEffect(() => {
    const status = sessionStorage.getItem('userLogged');
    const statusUser = JSON.parse(status);

    if (statusUser) {
      setIsAuthenticate(statusUser);
    }
  }, []);

  async function authenticate(email, password) {
    // const response = await loginRequest(email, password);
    console.log(email);
    console.log(password);
    sessionStorage.setItem('userLogged', JSON.stringify(isAuthenticate));
    setIsAuthenticate(true);
    // const payload = { name: response.name, email: response.email };
    // setUser(payload);
    // setUserLocalStorage(payload);
  }

  return (
    <AuthContext.Provider
      value={{ ...user, isAuthenticate, setIsAuthenticate, authenticate }}
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
