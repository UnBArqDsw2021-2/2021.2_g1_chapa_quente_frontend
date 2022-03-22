import React, { useState } from "react";
import "./style.css";

export const CadastroUsuario = () => {

  const initialValue = {
    nomeUsuario: '',
    senha: '',
    endereco: '',
    telefone: '',
    email: '',
  };

  const [values, setValues] = useState(initialValue);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  };

  // function onSubmit(ev) {
  //   ev.preventDefault();
  //   fetch().then(response => {
  //     return response
  //   });
  // };

  return (
    <>
      <div className="cadastro-usuario-div">
        {/* <form onSubmit={onSubmit()}> */}
        <h3>Cadastrar</h3>
        <form className="form-cadastro-usuario">
          <input className="cadastro-usuario-input"
            id="nomeUsuario"
            name="nomeUsuario"
            type="text"
            required
            placeholder="Nome"
            onChange={onChange} />

          <input className="cadastro-usuario-input"
            id="senha"
            name="senha"
            type="password"
            required
            placeholder="Senha"
            onChange={onChange} />

          <input className="cadastro-usuario-input"
            id="email"
            name="email"
            type="mail"
            required
            placeholder="Email"
            onChange={onChange} />

          <input className="cadastro-usuario-input"
            id="endereco"
            name="endereco"
            type="text"
            required
            placeholder="Endereço"
            onChange={onChange} />

          <input className="cadastro-usuario-input"
            id="telefone"
            name="telefone"
            type="tel"
            required
            pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
            placeholder="(61) 12345-6789"
            onChange={onChange} />

          <button type="submit" className="btn-cadastro-usuario">Cadastrar{console.log(values)}</button>
        </form>
      </div>
    </>
  );
}
