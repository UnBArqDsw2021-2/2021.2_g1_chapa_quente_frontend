import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import api from '../../services';
import './style.css';

export const PerfilUsuario = () => {
  const data = JSON.parse(sessionStorage.getItem('@user'));

  const initialValue = {
    nome: data.cliente.nome,
    senha: data.cliente.senha,
    endereco: data.cliente.endereco,
    telefone: data.cliente.telefone,
    email: data.cliente.email,
  };

  // const initialValue = {
  //   nome: '',
  //   senha: '',
  //   endereco: '',
  //   telefone: '',
  //   email: '',
  // };

  const [values, setValues] = useState(initialValue);
  const [update, setUpdate] = useState(true);
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    if (successMsg)
      setTimeout(() => {
        setSuccessMsg(false);
        setUpdate(true);
        navigate('/login');
      }, 3000);
  }, [successMsg]);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await api
        .put(`/cliente/${data.cliente._id}`, values)
        .then(res => {
          return res;
        });

      if (response.status === 200) {
        setSuccessMsg(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {successMsg && (
        <span id="success-profile">Perfil Atualizado com sucesso</span>
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
