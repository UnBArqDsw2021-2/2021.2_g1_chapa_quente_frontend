import React, { useEffect, useState } from 'react';
import './style.css';
import { RefeicaoCard } from '../RefeicaoCard';
import api from '../../services';

export const ListaCardapio = () => {
  const token = JSON.parse(sessionStorage.getItem('@token'));

  console.log(token);

  // const navigate = useNavigate();

  const [sanduiches, setSanduiches] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [acompanhamentos, setAcompanhamentos] = useState([]);

  const getCardapioItensFromApi = async type => {
    const result = await api.get(`/${type}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (result.status === 200) {
      return result.data;
      // setMsgSuccess(true);
    }
    return result.data.error;
  };

  useEffect(() => {
    getCardapioItensFromApi('sanduiche').then(result => setSanduiches(result));
    getCardapioItensFromApi('bebida').then(result => setBebidas(result));
    getCardapioItensFromApi('acompanhamento').then(result =>
      setAcompanhamentos(result),
    );
  }, []);
  console.log(sanduiches, bebidas, acompanhamentos);

  return (
    <>
      <div className="container-list">
        <div className="cards">
          {sanduiches.map(sanduiche => (
            <RefeicaoCard name={sanduiche.descricao} price={sanduiche.preco} />
          ))}
        </div>
      </div>
    </>
  );
};
