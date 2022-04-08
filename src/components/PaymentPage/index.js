import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Form } from 'react-bootstrap';
// import api from '../../services';
import './style.css';
import { useParams } from 'react-router';
import { FaRegCreditCard } from 'react-icons/fa';
import { BsCashCoin } from 'react-icons/bs';

export const PaymentPage = () => {
    const [_value, setValue] = useState()
    const { id } = useParams();
    console.log(id);

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

  return (
    <>
        <div className="body-payment">
            <div className="header-payment">
                <div>Valor total: R$ 20,00</div>
            </div>
            <div className="container-payment">
                <div>Pagar com:</div>
                    <div className="choosePaymentType">
                        <div className="payment-card">
                        <FaRegCreditCard className="icon-card"/>
                        <label htmlFor="pagamentoTipo" className="input-tipo">
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
                                placeholder="Numero do cartao"
                                onChange={onChange}
                            />
                            <input
                                className="cadastro-cartao-input"
                                id="titular"
                                name="titular"
                                type="text"
                                required
                                placeholder="Titular do cartao"
                                onChange={onChange}
                            />
                            <input
                                className="cadastro-cartao-input"
                                id="cvc"
                                name="cvc"
                                type="text"
                                required
                                placeholder="Código de segurança do cartao"
                                onChange={onChange}
                            />
                            <input
                                className="data-input"
                                id="validade"
                                name="validade"
                                type="date"
                                required
                                placeholder="Data de validade do cartao"
                                onChange={onChange}
                            />
                            <input
                                className="cadastro-cartao-input"
                                id="bandeira"
                                name="bandeira"
                                type="text"
                                required
                                placeholder="Bandeira do cartao"
                                onChange={onChange}
                            />
                        {/* {selectOption()} */}

                        <button type="button" onClick={() => console.log(id)} className="btn-cadastro-cartao">
                            Adicionar cartão
                        </button>
                        </form>
                        }
                        </div>
                        <div className="payment-cash">
                            <BsCashCoin className="icon-cash"/>
                            <label htmlFor="pagamentoTipo" className="input-tipo">
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
                <button type="button" className="btn-pagamento">Pagar</button>
            </div>
        </div>
    </>
  );
};
