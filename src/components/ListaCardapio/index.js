import React, { useEffect, useState } from 'react';
import './style.css';
import { RefeicaoCard } from '../RefeicaoCard';
import api from '../../services';
import { Loading } from '../Loading';

export const ListaCardapio = () => {
  const [sanduiches, setSanduiches] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [acompanhamentos, setAcompanhamentos] = useState([]);
  const [mergeAll, setMergeAll] = useState([]);
  const [load, setLoad] = useState(true);

  const getCardapioItensFromApi = async type => {
    const result = await api.get(`/${type}`);
    if (result.status === 200) {
      return result.data;
    }
    return result.data.error;
  };

  useEffect(() => {
    try {
      getCardapioItensFromApi('sanduiche').then(result =>
        setSanduiches(result),
      );
      getCardapioItensFromApi('bebida').then(result => setBebidas(result));
      getCardapioItensFromApi('acompanhamento').then(result =>
        setAcompanhamentos(result),
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (
      bebidas.length !== 0 ||
      sanduiches.length !== 0 ||
      acompanhamentos.length !== 0
    ) {
      setMergeAll([...bebidas, ...sanduiches, ...acompanhamentos]);
    }
  }, [sanduiches, bebidas, acompanhamentos]);

  useEffect(() => {
    if (Object.keys(mergeAll).length > 0) {
      setLoad(false);
    }
  }, [mergeAll]);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div className="container-list">
          <div className="cards">
            {mergeAll.map(sanduiche => (
              <RefeicaoCard
                name={sanduiche.descricao}
                price={sanduiche.preco}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
