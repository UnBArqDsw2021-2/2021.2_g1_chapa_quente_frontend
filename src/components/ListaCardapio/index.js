import React, { useEffect, useState } from 'react';
import './style.css';
import { RefeicaoCard } from '../RefeicaoCard';
import api from '../../services';
import { Loading } from '../Loading';
import { useAuth } from '../../context/AuthContext';

export const ListaCardapio = () => {
  const [sanduiches, setSanduiches] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [acompanhamentos, setAcompanhamentos] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);
  const [mergeAll, setMergeAll] = useState([]);
  const [load, setLoad] = useState(true);
  const { token } = useAuth();

  const getCardapioItensFromApi = async type => {
    const result = await api.get(`/${type}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (result.status === 200) {
      return result.data;
    }
    return result.data.error;
  };

  useEffect(() => {
    if(token){
      try {
        getCardapioItensFromApi('sanduiche').then(result =>
          setSanduiches(result),
        );
        getCardapioItensFromApi('bebida').then(result => setBebidas(result));
        getCardapioItensFromApi('acompanhamento').then(result =>
          setAcompanhamentos(result),
        );
        getCardapioItensFromApi('sobremesa').then(result => setSobremesas(result));
      } catch (error) {
        console.log(error);
      }
    }
  }, [token]);

  useEffect(() => {
    if (
      bebidas.length !== 0 ||
      sanduiches.length !== 0 ||
      acompanhamentos.length !== 0 ||
      sobremesas.length !== 0 
    ) {
      setMergeAll([...bebidas, ...sanduiches, ...acompanhamentos, ...sobremesas]);
    }
  }, [sanduiches, bebidas, acompanhamentos, sobremesas]);

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
            {mergeAll.map(item => (
              <RefeicaoCard
                itemInfo={item}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
