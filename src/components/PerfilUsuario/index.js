import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import "./style.css";

export const PerfilUsuario = () => {

  // Preencher com a resposta da API
  const initialValue = {
    nome: '',
    senha: '',
    endereco: '',
    telefone: '',
    email: '',
  };

  const [values, setValues] = useState(initialValue);
  const [update, setUpdate] = useState(false);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  };

  function onSubmit() {
    // função de update
  };

  return (
    <>
      <div className="perfil-usuario-div">
        <h3>Perfil</h3>
        { update ?
          <form className="form-perfil-usuario">
            <input className="perfil-usuario-input"
              id="nome"
              name="nome"
              type="text"
              required
              placeholder="Nome"
              onChange={onChange}
            />

            <input className="perfil-usuario-input"
              id="senha"
              name="senha"
              type="password"
              required
              placeholder="Senha"
              onChange={onChange}
            />
              
            <input className="perfil-usuario-input"
              id="email"
              name="email"
              type="mail"
              required
              placeholder="Email"
              onChange={onChange}
            />

            <input className="perfil-usuario-input"
              id="endereco"
              name="endereco"
              type="text"
              required
              placeholder="Endereço"
              onChange={onChange}
            />

            <input className="perfil-usuario-input"
              id="telefone"
              name="telefone"
              type="tel"
              required
              pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
              placeholder="(61) 12345-6789"
              onChange={onChange}
            />

            <button 
              type="submit"
              className="btn-perfil-usuario"
              onClick={() => {setUpdate(false);onSubmit();}}
            >
              Atualizar Dados            
            </ button>
          </form>
          :
          <form className="form-perfil-usuario">
            <input className="perfil-usuario-input"
              id="nome"
              name="nome"
              type="text"
              placeholder="Nome"
              disabled
              value="Joao"
            />

            <input className="perfil-usuario-input"
              id="senha"
              name="senha"
              type="password"
              disabled
              value="123senha"
            />
              

            <input className="perfil-usuario-input"
              id="email"
              name="email"
              type="mail"
              disabled
              value="joao@email.com"
            />

            <input className="perfil-usuario-input"
              id="endereco"
              name="endereco"
              type="text"
              disabled
              value="Rua dos Bobos Quadra 0"
            />

            <input className="perfil-usuario-input"
              id="telefone"
              name="telefone"
              type="tel"
              pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
              disabled
              value="61 4002 8922"
            />
            <FaEdit className="edit-icon"
              onClick={() => setUpdate(true)}
            />
          </form>
        }
      </div>
    </>
  );
}
