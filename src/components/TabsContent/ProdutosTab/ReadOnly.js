
import React from "react";

const ReadOnly = ({ produto, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{produto.fullName}</td>
      <td>{produto.address}</td>
      <td>{produto.phoneNumber}</td>
      <td>{produto.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, produto)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(produto.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnly;