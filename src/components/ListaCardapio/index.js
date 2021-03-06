import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../services';
import { Loading } from '../Loading';
import { RefeicaoCard } from '../RefeicaoCard';
import { useAuth } from '../../context/AuthContext';
import './style.css';

export const ListaCardapio = () => {
  const [load, setLoad] = useState(true);
  const [items, setItems] = useState([]);

  const { token } = useAuth();
  const tipos = ['sanduiche', 'bebida', 'acompanhamento', 'sobremesa'];

  useEffect(() => {
    axios.all(tipos.map(item => api.get(item).then(r => r.data))).then(item => {
      setItems([].concat(...item));
      setLoad(false);
    });
  }, [token]);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div className="container-list">
          <div className="cards">
            {items.map(item => ( 
              item.isAvailable ?
                <RefeicaoCard itemInfo={item} /> 
              :
                null
            ))}
          </div>
        </div>
      )}
    </>
  );
};
