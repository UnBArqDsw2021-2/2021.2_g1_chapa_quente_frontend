import React from 'react';
import './style.css';

export const AddCardapioItem = ({price}) => {

  return(
  <>
    <div className='container-add-button-cardapio'>
        <div className="price-container">
            <p>{price}</p>
        </div>
        <div className="icon-container">
            <p>+</p>
        </div>
    </div>
  </>
  )
};
