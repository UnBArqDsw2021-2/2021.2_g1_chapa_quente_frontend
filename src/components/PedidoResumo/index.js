import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import './style.css';
import api from '../../services';
import { useAuth } from '../../context/AuthContext';

export const PedidoResumo = ({ item }) => {
  const [orderState, setOrderState] = useState({});
  const [items, setItems] = useState([]);
  const { token } = useAuth();

  const updateState = async value => {
    await api.put(`/order/update/${item._id}`, value, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  useEffect(() => {
    setItems(
      [].concat(
        item.acompanhamento,
        item.bebida,
        item.sanduiche,
        item.sobremesa,
        item.combo,
      ),
    );
  }, []);


  return (
    <div className="pedido-item">
      <div
        className="pedido-inside-container"
        style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}
      >
        <div
          style={{
            padding: '6px',
            width: '720px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {items.length && (
            <div>
              <div className="arrange-container">
                <p className="arrange-container-title">
                  Tipo:
                </p>
                <p className="arrange-container-title">
                  Produto:
                </p>
                <p className="arrange-container-title">
                  Tamanho:
                </p>
              </div>
              {[]
                .concat(
                  item.acompanhamento,
                  item.bebida,
                  item.sanduiche,
                  item.sobremesa,
                  item.combo,
                )
                .map(it => {
                  return (
                    <div className="arrange-container">
                      <p>
                        {it.tipo.charAt(0).toUpperCase() + it.tipo.slice(1)}
                      </p>
                      <p>
                        {it.descricao}
                      </p>
                      <p>
                      {it.tamanho && ` (${it.tamanho})`}
                      </p>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        {/* ALTERACAO DO ESTADO DO PEDIDO */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '18px',
          }}
        >
          <Form.Select
            className="estado-pedido-dropdown"
            aria-label="Tipo do produto"
            onChange={Option => setOrderState({ estado: Option.target.value })}
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
    </div>

    // <div className="pedido-item">
    //   <div className="pedido-inside-container">
    //     <div>
    //       {[].concat(item.acompanhamento, item.bebida, item.sanduiche, item.sobremesa, item.combo).map((it) => {
    //         return (
    //           <div>
    //             {it.tipo}
    //           </div>
    //         )
    //       })}
    //     </div>
    //     <div className="item-field">{item._id}</div>
    //     <Form.Select
    //       className="estado-pedido-dropdown"
    //       aria-label="Tipo do produto"
    //       onChange={Option => setOrderState({ estado: Option.target.value })}
    //       defaultValue={item.estado}
    //     >
    //       <option value="Carrinho">Carrinho</option>
    //       <option value="Pronto para fazer">Pronto para fazer</option>
    //       <option value="Preparando">Preparando</option>
    //       <option value="Coleta">Coleta</option>
    //       <option value="Rota de entrega">Rota de entrega</option>
    //       <option value="Concluido">Concluido</option>
    //       <option value="Pronto para Coleta">Pronto para Coleta</option>
    //     </Form.Select>
    //     <div
    //       className="confirmar-estado-button"
    //       onClick={() => updateState(orderState)}
    //     >
    //       Confirmar Estado
    //     </div>
    //   </div>
    // </div>
  );
};
