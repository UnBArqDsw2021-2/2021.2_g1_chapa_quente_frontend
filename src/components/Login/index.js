import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../services';
import './style.css';

export const Login = () => {
  const initialValueLogin = {
    email: '',
    senha: '',
    tipo: '',
  };

  const navigate = useNavigate();
  const { setUser, setIsAuthenticate, isAuthenticate } = useAuth();

  const [values, setValues] = useState(initialValueLogin);
  const [erroLogin, setErroLogin] = useState(false);

  useEffect(() => {
    if (isAuthenticate) {
      navigate('/');
    }
  }, [isAuthenticate]);

  const onChange = ev => {
    const { name, value } = ev.target;

    if (name === '' || value === '') {
      setErroLogin(false);
    }

    setValues({ ...values, [name]: value });
  };

  const redirect = () => {
    navigate('/cadastro');
  };

  const onSubmit = async evente => {
    evente.preventDefault();
    setErroLogin(false);

    try {
      const response = await api.post('/signin', values).then(res => {
        return res;
      });
      console.log(response.status);
      console.log(response.data);

      if (response.status === 200) {
        sessionStorage.setItem('@user', JSON.stringify(response.data));
        setUser(response.data);
        setIsAuthenticate(true);
      }
    } catch (error) {
      setErroLogin(true);
    }
  };

  return (
    <>
      <div className="login-usuario-div">
        <h3>Login</h3>
        <form onSubmit={onSubmit} className="form-login-usuario">
          <input
            className="login-usuario-input"
            id="email"
            name="email"
            type="text"
            required
            placeholder="Email"
            onChange={onChange}
          />

          <input
            className="login-usuario-input"
            id="senha"
            name="senha"
            type="password"
            required
            placeholder="Senha"
            onChange={onChange}
          />

          <input
            className="login-usuario-input"
            id="tipo"
            name="tipo"
            type="text"
            required
            placeholder="Tipo"
            onChange={onChange}
          />
          {erroLogin && (
            <strong id="error-login">Email e senha não são validos!</strong>
          )}

          <div id="btn-login-row">
            <button type="submit" className="btn-login-usuario">
              Entrar
            </button>
            <button
              type="button"
              className="btn-login-usuario"
              onClick={redirect}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
