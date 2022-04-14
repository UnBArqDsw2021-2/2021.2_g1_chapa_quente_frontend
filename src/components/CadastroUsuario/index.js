import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services';
import './style.css';

export const CadastroUsuario = () => {
  const initialValueEndereco = {
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: ''
  }
  
  const initialValue = {
    nome: '',
    senha: '',
    endereco: initialValueEndereco,
    telefone: '',
    email: '',
  };

  const navigate = useNavigate();

  const [values, setValues] = useState(initialValue);
  const [valuesEndereco, setValuesEndereco] = useState(initialValueEndereco);
  const [msgSuccess, setMsgSuccess] = useState(false);
  const [msgError, setMsgError] = useState(false);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onChangeEndereco(ev) {
    const { name, value } = ev.target;

    setValuesEndereco({ ...valuesEndereco, [name]: value })
    setValues({ ...values, endereco: valuesEndereco})
  }

  useEffect(() => {
    setTimeout(() => {
      setMsgError(false);
    }, 5000);
  }, [msgError]);

  const onSubmit = async ev => {
    ev.preventDefault();
    try {
      const result = await api.post('/cliente', values);
      if (result.status === 201) {
        setValues(initialValue);
        setMsgSuccess(true);
      }

      if (result.data.erro) {
        setMsgError(true);
      }
    } catch (error) {
      console.log(result);
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
          {msgError && <span id="error-cadastro">Email já utilizado!</span>}

          <input
            className="cadastro-usuario-input"
            id="cidade"
            name="cidade"
            type="text"
            required
            placeholder="Cidade"
            onChange={onChangeEndereco}
          />

          <input
            className="cadastro-usuario-input"
            id="bairro"
            name="bairro"
            type="text"
            required
            placeholder="Bairro"
            onChange={onChangeEndereco}
          />

          <input
            className="cadastro-usuario-input"
            id="rua"
            name="rua"
            type="text"
            required
            placeholder="Rua"
            onChange={onChangeEndereco}
          />

          <input
            className="cadastro-usuario-input"
            id="numero"
            name="numero"
            type="text"
            required
            placeholder="Número"
            onChange={onChangeEndereco}
          />

          <input
            className="cadastro-usuario-input"
            id="complemento"
            name="complemento"
            type="text"
            required
            placeholder="Complemento"
            onChange={onChangeEndereco}
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
