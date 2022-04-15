import React, { useEffect, useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import { useAuth } from '../../context/AuthContext';
import api from '../../services';
import './style.css';

export const PedidoResumoCliente = ({ item }) => {
  const { token } = useAuth();
  const [orderStatus, setOrderStatus] = useState();

  const updateStatus = async () => {
    const order = await api
      .get(`/order/find/${item._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(r => r.data);
    setOrderStatus(order.estado);
    
  };

  useEffect(() => {
    setOrderStatus(item.estado);
  }, []);

  return (
    <div className="pedido-item">
      <div className="pedido-inside-container">
        <div className="item-field">{item._id}</div>
        <p className="estado-pedido-cliente">{orderStatus}</p>
        <BiRefresh
          size="34px"
          style={{ cursor: 'pointer' }}
          onClick={() => updateStatus()}
        />
      </div>
    </div>
  );
};
