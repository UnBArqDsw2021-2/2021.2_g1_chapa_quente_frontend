import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './style.css';
import { RefeicaoCard } from '../RefeicaoCard';
import api from '../../services';

export const ListaCardapio = () => {

  // const data = JSON.parse(sessionStorage.getItem('@user'));
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2EyZTgwMDU5ZWY3NTI4ZjYwY2ZjNiIsInRpcG8iOiJDbGllbnRlIiwiaWF0IjoxNjQ4NTc1MTY0LCJleHAiOjE2NDg2NjE1NjR9.PxtJvJn2ADbsZh30AM-eCu-eMStkypWZPQx-96s5tBk"

  // const navigate = useNavigate();

  const [sanduiches, setSanduiches] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [acompanhamentos, setAcompanhamentos] = useState([]);

  const getCardapioItensFromApi = async (type) => {
    const result = await api.get(`/${type}`, { headers: {"Authorization" : `Bearer ${token}`}});
    if (result.status === 200) {
      return result.data;
      // setMsgSuccess(true);
    } 
    return result.data.error;
  };

  useEffect(() => {
    getCardapioItensFromApi("sanduiche").then((result) => setSanduiches(result));
    getCardapioItensFromApi("bebida").then((result) => setBebidas(result));
    getCardapioItensFromApi("acompanhamento").then((result) => setAcompanhamentos(result));
  }, []);
  console.log(sanduiches, bebidas, acompanhamentos)

  return(
  <>
    <div className="container-list">
        <div className="cards">
            {sanduiches.map((sanduiche) => (
              <RefeicaoCard name={sanduiche.descricao} price={sanduiche.preco}/>
            ))}
        </div>
    </div>
  </>
  )
};
