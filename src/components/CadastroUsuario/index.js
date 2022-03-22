import React, { useState } from "react";
import "./style.css";

export const CadastroUsuario = () => {

  const initialValue = {
    nome: '',
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

  function onSubmit(ev) {
    ev.preventDefault();
    fetch('http://localhost:3333/cliente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(json => console.log('success: ', json))
      .catch((error) => console.error('error: ', error)
    );
  };

  return (
    <>
      <div className="cadastro-usuario-div">
        <h3>Cadastrar</h3>
        <form onSubmit={onSubmit} className="form-cadastro-usuario">
          <input className="cadastro-usuario-input"
            id="nome"
            name="nome"
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

          <button type="submit" className="btn-cadastro-usuario">
            Cadastrar
            {/* {console.log(values)} */}
            </button>
        </form>
      </div>
    </>
  );
}
