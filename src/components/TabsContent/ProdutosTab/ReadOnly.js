
import React from "react";

const ReadOnly = ({ produto, handleEditClick }) => {
  return (
    <tr>
      <td>{produto.descricao}</td>
      <td>{produto.preco}</td>
      <td>{produto.tipo}</td>
      <td>{produto.desconto}</td>
      <td>{produto.isAvailable ? "Sim" : "Não"}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, produto)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnly;