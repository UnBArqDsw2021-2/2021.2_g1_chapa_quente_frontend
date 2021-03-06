import React, { useEffect, useState } from 'react';
// import './style.css';
import './style.css';
import api from '../../services';
import { Loading } from '../Loading';
import { useAuth } from '../../context/AuthContext';
import { PedidoResumo } from '../PedidoResumo';

export const ListaPedidosFuncionario = () => {
  const [orders, setOrders] = useState([]);
  const [load, setLoad] = useState(true);
  const { token } = useAuth();

  const getPedidosFromApi = async() => {
    const result = await api.get(`/order`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (result.status === 200) {
        return result.data;
    }
    console.err(result.data.error)
    return result.data.error;
  };


  useEffect(() => { 
    if(token){
      try {
        getPedidosFromApi().then((result) => {
          setOrders(result);
          setLoad(false);
        });
      } catch (error) {
        console.err(error);
      }
    }
  }, [token]);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div className="container-pedidos-list">
          <div className="cards-pedidos">
            {orders.map(item => (
              <PedidoResumo
                item={item}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
