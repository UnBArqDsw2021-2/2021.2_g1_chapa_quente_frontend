import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import api from '../../services';
import './style.css';

export const PerfilUsuario = () => {
  const data = JSON.parse(sessionStorage.getItem('@user'));
  const token = JSON.parse(sessionStorage.getItem('@token'));

  const emailToPut = data?.email;

  

  const initialValue = {
    nome: data?.nome,
    senha: data?.senha,
    endereco: data?.endereco,
    telefone: data?.telefone,
    email: data?.email,
  };

  const [values, setValues] = useState(initialValue);
  const [update, setUpdate] = useState(true);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    if (successMsg) {
      setTimeout(() => {
        setSuccessMsg(false);        
        setUpdate(true);        
      }, 3000);
    } else {
      setTimeout(() => {
        setErrorMsg(false);
      }, 3000);
    }
  }, [successMsg, errorMsg]);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await api
        .put(`/cliente/${emailToPut}`, values, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then(res => {
          return res;
        });

      if (response.status === 200) {
        setSuccessMsg(true);
        setUpdate(true);
        sessionStorage.setItem('@user', JSON.stringify(values));
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(true);
    }
  };

  return (
    <>
      {successMsg && (
        <span id="success-profile">Perfil Atualizado com sucesso! 🥰</span>
      )}

      {errorMsg && (
        <span id="error-profile">Erro ao tentar atualizar perfil! 😕</span>
      )}
      <div className="perfil-usuario-div">
        <h3>Perfil</h3>
        <form className="form-perfil-usuario" onSubmit={onSubmit}>
          <input
            className="perfil-usuario-input"
            id="nome"
            name="nome"
            type="text"
            required
            placeholder="Nome"
            onChange={onChange}
            disabled={update}
            value={values.nome}
          />

          <input
            className="perfil-usuario-input"
            id="senha"
            name="senha"
            type="password"
            required
            placeholder="Senha"
            onChange={onChange}
            disabled={update}
            value={values.senha}
          />

          <input
            className="perfil-usuario-input"
            id="email"
            name="email"
            type="mail"
            required
            placeholder="Email"
            onChange={onChange}
            disabled={update}
            value={values.email}
          />

          <input
            className="perfil-usuario-input"
            id="endereco"
            name="endereco"
            type="text"
            required
            placeholder="Endereço"
            onChange={onChange}
            disabled={update}
            value={values.endereco}
          />

          <input
            className="perfil-usuario-input"
            id="telefone"
            name="telefone"
            type="tel"
            // pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
            placeholder="(61) 12345-6789"
            onChange={onChange}
            disabled={update}
            value={values.telefone}
          />

          {!update && (
            <button
              type="submit"
              className="btn-perfil-usuario"
              onClick={() => {
                setUpdate(false);
                onSubmit();
              }}
            >
              Atualizar Dados
            </button>
          )}
        </form>
        <FaEdit className="edit-icon" onClick={() => setUpdate(!update)} />
      </div>
    </>
  );
};
