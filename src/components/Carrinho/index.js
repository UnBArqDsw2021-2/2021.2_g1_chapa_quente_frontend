import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';
import { PedidoItem } from '../PedidoItem';
import api from '../../services';
import './style.css';

export const Carrinho = () => {
    const {setOrder, order, setPreOrder, preOrder, token} = useAuth();
    const navigate = useNavigate();

    const clearOrder = () => {
        setOrder({
            combo: [],
            sanduiche: [],
            bebida: [],
            acompanhamento: [],
            sobremesa: [],
            cupom: '',
            valorTotal: 0,
            clienteId: '',
            entregador: '',
            retiradaLocal: false,
        });
        setPreOrder([]);
    }

    useEffect(() => {
      }, [order]);

    
    const confirmOrder = async () => {
        const result = await api.post(`/order/create`, order, { headers: {"Authorization" : `Bearer ${token}`}});
        if (result.status === 201) {
            clearOrder();
            navigate('/lista-pedidos');
        } else {
            console.log(result.data.erro);
        }
    };

    const showItems = () => (
        preOrder.map(item => (
            <PedidoItem item={item} />
        ))
    )

    return (
        <div className="carrinho-container">
            <div className="carrinho-card">
                <div className="carrinho-title">
                    Carrinho
                </div>
                <div className="carrinho-inside-card" >
                    <div className="carrinho-box">
                        <div className="carrinho-header">
                            <div className="item-field">
                                Nome do Produto
                            </div>
                            <div className="item-field">
                                Preço
                            </div>
                            <div className="item-field">
                                Tamanho
                            </div> 
                        </div>
                        {showItems()}
                    </div>
                    <Form.Select 
                        className="cadastro-produto-dropdown"
                        aria-label="Retirar no local"
                        defaultValue="false"
                        onChange={(Option) => 
                            {
                            if(Option.target.value === "true") {
                                setOrder({ ...order, retiradaLocal: true});
                            }
                            else setOrder({ ...order, retiradaLocal: false})
                            }
                        }
                    >
                        <option value="true">Retirada no Local</option>
                        <option value="false">Entrega</option>
                    </Form.Select>
                    <div
                        className="carrinho-confirm-button"
                        onClick={() => confirmOrder()}
                    >
                        Confirmar Pedido
                    </div>
                </div>
            </div> 
        </div>
    );
};