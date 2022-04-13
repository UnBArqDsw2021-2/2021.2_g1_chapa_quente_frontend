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
    // eslint-disable-next-line no-unused-vars
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

      if (response.status === 200) {
        sessionStorage.setItem('@user', JSON.stringify({
          ...response.data.pessoa,
          funcao: values.tipo
        }));
        sessionStorage.setItem('@token', JSON.stringify(response.data.token));
        setUser({
          ...response.data,
          funcao: values.tipo
        });
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
          <div id="tipo-usuario">
            <label htmlFor="clienteTipo" className="input-tipo">
              <input
                type="radio"
                id="clienteTipo"
                name="tipo"
                value="Cliente"
                onChange={onChange}
              />
              Cliente
            </label>

            <label htmlFor="funcionarioTipo" className="input-tipo">
              <input
                type="radio"
                id="funcionarioTipo"
                name="tipo"
                value="Funcionario"
                onChange={onChange}
              />
              Funcionario
            </label>

            <label htmlFor="entregador" className="input-tipo">
              <input
                type="radio"
                id="entregador"
                name="tipo"
                value="Entregador"
                onChange={onChange}
              />
              Entregador
            </label>
          </div>
          {erroLogin && (
            <strong id="error-login">Email e senha não são validos!</strong>
          )}

          {values.tipo === '' && erroLogin && (
            <strong id="error-login">Selecione o Tipo</strong>
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
