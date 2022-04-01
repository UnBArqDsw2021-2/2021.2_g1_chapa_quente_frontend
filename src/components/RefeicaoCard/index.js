import React from 'react';
import './style.css';
import { AddCardapioItem } from '../AddCardapioItem';
import sanduicheChapaQuente from '../../assets/sanduiche.png';

export const RefeicaoCard = ({name, price}) => {

  return(
  <>
    <div className="container">
        <div className="container-img-refeicaocard">
          <img src={sanduicheChapaQuente} alt="sanduiche"  width="80%" height="110px"/>
        </div>
        <div className="container-name-food-refeicaocard">
          <p>{name}</p>
        </div>
        <div className="container-button-refeicaocard">
          <AddCardapioItem price={price}/>
        </div>
    </div>
  </>
  )
};
