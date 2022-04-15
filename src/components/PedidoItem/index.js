import React from 'react';
import './style.css';

export const PedidoItem = ({item}) => {
    return (
        <div
            className="pedido-item"
        >
            <div className="pedido-inside-container"> 
                <div className="item-field">
                    {item.descricao}
                </div>
                <div className="item-field">
                    {item.preco}
                </div>
                <div className="item-field">
                    {item?.tamanho}
                </div>
            </div>
        </div>
    );
};