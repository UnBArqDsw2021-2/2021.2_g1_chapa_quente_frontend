import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services';
import './style.css';

export const CadastroUsuario = () => {
  const initialValue = {
    nome: '',
    senha: '',
    endereco: '',
    telefone: '',
    email: '',
  };

  const navigate = useNavigate();

  const [values, setValues] = useState(initialValue);
  const [msgSuccess, setMsgSuccess] = useState(false);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  const onSubmit = async ev => {
    ev.preventDefault();
    const result = await api.post('/cliente', values);
    if (result.status === 201) {
      setValues(initialValue);
      setMsgSuccess(true);
    }
  };

  useEffect(() => {
    if (msgSuccess) {
      setTimeout(() => {
        setMsgSuccess(false);
        navigate('/login');
      }, 3000);
    }
  }, [msgSuccess]);

  return (
    <>
      <div className="cadastro-usuario-div">
        {msgSuccess && (
          <span id="success-cadastro">Cadastro feito com Sucesso! 😎</span>
        )}
        <h3>Cadastrar</h3>
        <form onSubmit={onSubmit} className="form-cadastro-usuario">
          <input
            className="cadastro-usuario-input"
            id="nome"
            name="nome"
            type="text"
            required
            placeholder="Nome"
            onChange={onChange}
          />

          <input
            className="cadastro-usuario-input"
            id="senha"
            name="senha"
            type="password"
            required
            placeholder="Senha"
            onChange={onChange}
          />

          <input
            className="cadastro-usuario-input"
            id="email"
            name="email"
            type="mail"
            required
            placeholder="Email"
            onChange={onChange}
          />

          <input
            className="cadastro-usuario-input"
            id="endereco"
            name="endereco"
            type="text"
            required
            placeholder="Endereço"
            onChange={onChange}
          />

          <input
            className="cadastro-usuario-input"
            id="telefone"
            name="telefone"
            type="tel"
            required
            pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
            placeholder="(61) 12345-6789"
            onChange={onChange}
          />

          <button type="submit" className="btn-cadastro-usuario">
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
};
