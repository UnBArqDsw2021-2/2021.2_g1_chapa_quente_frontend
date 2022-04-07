import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import api from '../../services';
import './style.css';
import { useAuth } from '../../context/AuthContext';

export const CadastroProduto = () => {
  const [productType, setProductType] = useState("acompanhamento");
  const initialValue = {
    descricao: '',
    preco: '',
    desconto: '',
    tamanho: '',
    gelo: '',
    adicional: '',
    tipo: productType,
    isAvailable: true,
  };
  const { token } = useAuth();

  const navigate = useNavigate();

  const [values, setValues] = useState(initialValue);
  const [msgSuccess, setMsgSuccess] = useState(false);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  const onSubmit = async ev => {
    ev.preventDefault();
    const result = await api.post(`/${productType}/create`, values, { headers: {"Authorization" : `Bearer ${token}`}});
    if (result.status === 201) {
      setValues(initialValue);
      setMsgSuccess(true);
    } else {
        console.log(result.data.erro);
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

  useEffect(() => {
    setValues(initialValue)
  }, [productType]);

    function selectOption( type ) {
        switch(type){
            case 'acompanhamento':
                return (
                    <input
                        className="cadastro-produto-input"
                        id="tamanho"
                        name="tamanho"
                        type="text"
                        required
                        placeholder="Tamanho"
                        onChange={onChange}
                    />
                )
            case 'bebida':
                return (
                    <>
                        <input
                            className="cadastro-produto-input"
                            id="tamanho"
                            name="tamanho"
                            type="text"
                            required
                            placeholder="Tamanho"
                            onChange={onChange}
                        />
                        <input
                            className="cadastro-produto-input"
                            id="gelo"
                            name="comGelo"
                            type="boolean"
                            required
                            placeholder="Gelo"
                            onChange={onChange}
                        />
                    </>
                )
            case 'sanduiche':
                return (
                    <input
                        className="cadastro-produto-input"
                        id="adicional"
                        name="adicional"
                        type="text"
                        required
                        placeholder="Adicional"
                        onChange={onChange}
                    />
                )
            default:
                return(<> </>)     
      }
}

  return (
    <>
      <div className="cadastro-produto-div">
        {msgSuccess && (
          <span id="success-cadastro">Cadastro feito com Sucesso! 😎</span>
        )}
        <h3>Cadastrar Produto</h3>
            <Form.Select 
                className="cadastro-produto-dropdown"
                aria-label="Tipo do produto"
                onChange={(Option) => setProductType(Option.target.value)}
            >
                <option value="acompanhamento">Acompanhamento</option>
                <option value="bebida">Bebida</option>
                <option value="sanduiche">Sanduíche</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="adicional">Adicional</option>
            </Form.Select>
            <form onSubmit={onSubmit} className="form-cadastro-produto">
                <input
                    className="cadastro-produto-input"
                    id="descricao"
                    name="descricao"
                    type="text"
                    required
                    placeholder="Descrição"
                    onChange={onChange}
                />
                <input
                    className="cadastro-produto-input"
                    id="preco"
                    name="preco"
                    type="float"
                    required
                    placeholder="Preço"
                    onChange={onChange}
                />
                <input
                    className="cadastro-produto-input"
                    id="desconto"
                    name="desconto"
                    type="float"
                    required
                    placeholder="Desconto"
                    onChange={onChange}
                />
                {selectOption(productType)}

                <button type="submit" className="btn-cadastro-produto">
                    Cadastrar
                </button>
            </form>
      </div>
    </>
  );
};
