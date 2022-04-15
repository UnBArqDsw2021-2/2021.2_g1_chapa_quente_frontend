
import React from "react";
import { AiFillEdit } from 'react-icons/ai';
import './style.css';

const ReadOnly = ({ produto, handleEditClick }) => {
  return (
    <tr className="tr-produto-edit">
      <td className="td-produto-edit">{produto.descricao}</td>
      <td className="td-produto-edit">{Number(produto.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
      <td className="td-produto-edit">{produto.tipo}</td>
      <td className="td-produto-edit">{produto.desconto}</td>
      <td className="td-produto-edit">{produto.isAvailable ? "Sim" : "Não"}</td>
      <td className="td-produto-edit">{produto.tamanho}</td>
      <td className="td-produto-edit">
        <button
          className="button-produto-edit"
          type="button"
          onClick={(event) => handleEditClick(event, produto)}
        >
          <AiFillEdit size={20}/>
        </button>
      </td>
    </tr>
  );
};

export default ReadOnly;