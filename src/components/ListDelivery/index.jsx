/* eslint-disable react/jsx-no-comment-textnodes */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import api from '../../services';
import { Loading } from '../Loading';
import './styles.css';

export const ListDelivery = () => {
  const token = JSON.parse(sessionStorage.getItem('@token'));
  const [load, setLoad] = useState(true);

  const [realData, setRealData] = useState();

  const getAllorder = async () => {
    try {
      const res = await api.get('/order', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        const idOrder = res.data.map(id => id._id);
        await axios
          .all(
            idOrder.map(item =>
              api
                .get(`/order/details/${item}`, {
                  headers: {
                    authorization: `Bearer ${token}`,
                  },
                })
                .then(r => r.data),
            ),
          )
          .then(item => {
            setRealData([].concat(...item));
            setLoad(false);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkDelivery = async idDeleivery => {
    try {
      setLoad(true);
      const res = await api.put(
        `/order/track/${idDeleivery}`,
        { rastreio: 'Pedido Entregue' },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.status === 200) {
        setLoad(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllorder();
  }, [load]);

  useEffect(() => {
    console.log(realData);
  }, [realData]);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div id="container-entrega">
          <table className="table-entrega">
            <thead>
              <tr>
                <th className="th-produto-edit">Cliente</th>
                <th className="th-produto-edit">Endereço</th>
                <th className="th-produto-edit">Estado</th>
                <th className="th-produto-edit">Valor total</th>
                <th className="th-produto-edit">Ação</th>
              </tr>
            </thead>
            <tbody>
              {realData.map(order =>
                order.rastreio !== 'Pedido Entregue' ? (
                  <>
                    <tr>
                      <td>{order.dadosCliente.nome}</td>
                      <td>{order.dadosCliente.endereco}</td>
                      <td>{order.estado}</td>
                      <td>{order.valorTotal}</td>

                      <td>
                        <button
                          disabled={order.rastreio === 'Pedido Entregue'}
                          type="button"
                          onClick={() => checkDelivery(order._id)}
                          className="btnCheck"
                        >
                          Confirma Entrega
                        </button>
                      </td>
                    </tr>
                  </>
                ) : null,
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
