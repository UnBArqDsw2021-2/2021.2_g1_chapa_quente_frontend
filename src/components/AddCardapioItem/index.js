import React from 'react';
import './style.css';
import { FaPlus } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
 
export const AddCardapioItem = ({ itemInfo }) => {
  const { order, setOrder, preOrder, setPreOrder, user } = useAuth();

  const addOrder = () => {
    setOrder({ ...order,
      [itemInfo.tipo]: order?.[itemInfo.tipo]?.concat([itemInfo]),
      valorTotal: order?.valorTotal + itemInfo.preco,
      clienteId: user._id,
    });

    setPreOrder([ ...preOrder, itemInfo])
  }
  return (
    <>
      <div className="container-add-button-cardapio">
        <div className="price-container">
          <p>
            <span className='icons-money'>R$</span>
            <span className="bold-price">{itemInfo.preco}</span>
          </p>
        </div>
        <div className="icon-container">
          <FaPlus className="icon-plus" onClick={() => addOrder()}/>
        </div>
      </div>
    </>
  );
};
