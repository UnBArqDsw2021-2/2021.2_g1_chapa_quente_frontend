import React, { useEffect, useState } from 'react';
// import './style.css';
import './style.css';
import api from '../../services';
import { Loading } from '../Loading';
import { useAuth } from '../../context/AuthContext';
import { PedidoResumo } from '../PedidoResumo';

export const ListaPedidosFuncionario = () => {
  const [orders, setOrders] = useState([]);
//   const [mergeAll, setMergeAll] = useState([]);
  const [load, setLoad] = useState(true);
  const { token } = useAuth();

  const getPedidosFromApi = async() => {
    const result = await api.get(`/order`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (result.status === 200) {
        console.log("success")
      return result.data;
    }
    console.log('failed')
    return result.data.error;
  };


  useEffect(() => { 
    if(token){
      try {
        getPedidosFromApi().then(result =>
          setOrders(result),
        );
      } catch (error) {
        console.log(error);
      }
    }
  }, [token]);

//   useEffect(() => {
//       console.log('orders =>', orders)
//     // setMergeOrder([mergeOrder.concat(order?.bebidas,
//     //     order?.sanduiches,
//     //     order?.acompanhamentos,
//     //     order?.sobremesas)])
//     // )

//     // setOrder({ ...order,
//     //     [itemInfo.tipo]: order?.[itemInfo.tipo]?.concat([itemInfo]),
//     //     valorTotal: order?.valorTotal + itemInfo.preco,
//     //     clienteId: _id,
//     //   });

//     orders.map((order) => setMergeAll(
//         mergeAll.concat([].concat(order?.bebidas,
//             order?.sanduiches,
//             order?.acompanhamentos,
//             order?.sobremesas))
//     ))

//     orders.map((order) => (
//         order?.bebidas
//     ))
//     console.log(mergeAll)
//   }, [orders]);

  useEffect(() => {
    if (Object.keys(orders).length > 0) {
      setLoad(false);
    }
  }, [orders]);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div className="container-list">
          <div className="cards">
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
