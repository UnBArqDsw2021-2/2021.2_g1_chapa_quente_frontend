import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './style.css';
import api from '../../services';
import { useAuth } from '../../context/AuthContext';

export const PedidoResumo = ({item}) => {
    const [orderState, setOrderState] = useState({});
    const { token } = useAuth();

    const updateState = async(value) => {
        await api.put(`/order/update/${item._id}`, value, { headers: {"Authorization" : `Bearer ${token}`}});
    }
    return (
        <div
            className="pedido-item"
        >
            <div className="pedido-inside-container"> 
                <div className="item-field">
                    {item._id}
                </div>
                <Form.Select 
                    className="estado-pedido-dropdown"
                    aria-label="Tipo do produto"
                    onChange={(Option) => setOrderState({ estado: Option.target.value })}
                    defaultValue={item.estado}
                >
                    <option value="Carrinho">Carrinho</option>
                    <option value="Pronto para fazer">Pronto para fazer</option>
                    <option value="Preparando">Preparando</option>
                    <option value="Coleta">Coleta</option>
                    <option value="Rota de entrega">Rota de entrega</option>
                    <option value="Concluido">Concluido</option>
                    <option value="Pronto para Coleta">Pronto para Coleta</option>
                </Form.Select>
                <div 
                    className="confirmar-estado-button"
                    onClick={() => updateState(orderState)}
                >
                    Confirmar Estado
                </div>
            </div>
        </div>
    );
};