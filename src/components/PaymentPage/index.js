import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Form } from 'react-bootstrap';
import { BsCashCoin } from 'react-icons/bs';
import { FaRegCreditCard } from 'react-icons/fa';
import { useParams } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import api from '../../services';
import './style.css';

export const PaymentPage = () => {
    const [_value, setValue] = useState()
    const [pedido, setPedido] = useState()
    const { id } = useParams();
    const { token } = useAuth();

    const initialValue = {
        numero: '',
        titular: '',
        cvc: '',
        validade: null,
        bandeira: '',
    };

    const [values, setValues] = useState(initialValue);

    function onChange(ev) {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
    }

    const realizarPagamento = () => {
        alert('Pagamento feito');
    }

    const cadastrarCartao = () => {
        alert('Cadastro de cartão realizado com sucesso!');
    }

    useEffect(() => {
        if(token){
            api.get(`/order/find/${id}`, { headers: {"Authorization" : `Bearer ${token}`}}).then(res => {
                setPedido(res.data.valorTotal)
            });
        }
    }, [token])

  return (
    <>
        <div className="body-payment">
            <div className="header-payment">
                <div className="title-payment">Pagamento</div>
                { pedido && <div className="value-payment">Valor total: R$ {pedido}</div>}
            </div>
            <div className="escolha-pagamento">Escolha um método de pagamento:</div>
            <div className="container-payment">
                    <div className="choosePaymentType">
                        <div className="payment-card">
                        <FaRegCreditCard className="icon-card"/>
                        <label htmlFor="pagamentoTipo" className="input-pagamento">
                            <input
                                type="radio"
                                id="pagamentoTipo"
                                name="pagamentoTipo"
                                value="Cartao"
                                onChange={e => setValue(e.target.value)}
                            />
                            Cartão
                        </label>
                        { _value === "Cartao" && <form className="form-cadastro-cartao">
                            <input
                                className="cadastro-cartao-input"
                                id="numero"
                                name="numero"
                                type="text"
                                required
                                defaultValue="1823274823721"
                                disabled
                                placeholder="Numero do cartao"
                                onChange={onChange}
                            />
                            <input
                                className="cadastro-cartao-input"
                                id="titular"
                                name="titular"
                                type="text"
                                required
                                defaultValue="titular"
                                disabled
                                placeholder="Titular do cartao"
                                onChange={onChange}
                            />
                            <input
                                className="cadastro-cartao-input"
                                id="cvc"
                                name="cvc"
                                type="text"
                                required
                                defaultValue="222"
                                disabled
                                placeholder="Código de segurança do cartao"
                                onChange={onChange}
                            />
                            <input
                                className="cadastro-cartao-input"
                                id="validade"
                                name="validade"
                                type="date"
                                required
                                defaultValue="1823274823721"
                                disabled
                                placeholder="Data de validade do cartao"
                                onChange={onChange}
                            />
                            <input
                                className="cadastro-cartao-input"
                                id="bandeira"
                                name="bandeira"
                                type="text"
                                required
                                defaultValue="Mastercard"
                                disabled
                                placeholder="Bandeira do cartao"
                                onChange={onChange}
                            />
                        {/* {selectOption()} */}

                        <button type="button"  onClick={() => cadastrarCartao()} className="btn-cadastro-cartao">
                            Adicionar cartão
                        </button>
                        </form>
                        }
                        </div>
                        <div className="payment-cash">
                            <BsCashCoin className="icon-cash"/>
                            <label htmlFor="pagamentoTipo" className="input-pagamento">
                                <input
                                    type="radio"
                                    id="pagamentoTipo"
                                    name="pagamentoTipo"
                                    value="Dinheiro"
                                    onChange={e => setValue(e.target.value)}
                                />
                                Dinheiro
                            </label>
                        </div>
                </div>
                <button type="button" className="btn-pagamento" onClick={() => {realizarPagamento()}}>Pagar</button>
            </div>
        </div>
    </>
  );
};
