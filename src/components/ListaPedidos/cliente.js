import React, { useEffect, useState } from 'react';
import api from '../../services';
import { Loading } from '../Loading';
import { useAuth } from '../../context/AuthContext';
import { PedidoResumoCliente } from '../PedidoResumo/cliente';
import './style.css';

export const ListaPedidosCliente = () => {
  const [orders, setOrders] = useState([]);
  const [load, setLoad] = useState(true);
  const { user, token } = useAuth();

  const getPedidosFromApi = async () => {
    try {
      const result = await api.get(`/order/client/${user._id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (result.status === 200) {
        setOrders(result.data);
        setLoad(false);
        return;
      }
    } catch (err) {
      console.err(err);
    }
  };

  useEffect(() => { 
    if (token) {
      getPedidosFromApi();
    }
  }, [token]);

  return (
    <div>
      {load ? (
        <Loading />
      ) : (
        <div className="container-pedidos-list">
          <div className="cards-pedidos">
            {orders.map(item => (
              <PedidoResumoCliente
                item={item}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
