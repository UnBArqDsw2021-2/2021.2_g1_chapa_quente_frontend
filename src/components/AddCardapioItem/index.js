import React from 'react';
import './style.css';
import { FaPlus } from 'react-icons/fa';

export const AddCardapioItem = ({ price }) => {
  return (
    <>
      <div className="container-add-button-cardapio">
        <div className="price-container">
          <p>
            <span className='icons-money'>R$</span>
            <span className="bold-price">{price}</span>
          </p>
        </div>
        <div className="icon-container">
          <FaPlus className="icon-plus" />
        </div>
      </div>
    </>
  );
};
