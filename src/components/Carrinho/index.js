import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './style.css';

export const Carrinho = () => {
    const { order } = useAuth();

    return (
        <div className="carrinho-container">
            <div className="carrinho-card">
                <div className="carrinho-title">
                    Carrinho
                </div>
                <div className="carrinho-inside-card" >
                    <div className="carrinho-box">
                        {order.map(item => (
                            <div
                            className="pedido-item"
                            >
                                {console.log("item =>", item)}
                                <p> 
                                    {item.descricao}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="carrinho-confirm-button">
                        Confirmar Pedido
                    </div>
                </div>
            </div> 
        </div>
    );
};