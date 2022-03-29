import React from 'react';
import './style.css';
import { RefeicaoCard } from '../RefeicaoCard';

export const ListaCardapio = () => {

  return(
  <>
    <div className="container-list">
        <div className="cards">
            <RefeicaoCard/>
            <RefeicaoCard/>
            <RefeicaoCard/>
            <RefeicaoCard/>
            <RefeicaoCard/>
        </div>
    </div>
  </>
  )
};
