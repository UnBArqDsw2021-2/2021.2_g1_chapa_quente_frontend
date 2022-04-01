import React from "react";

const Editable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleDeleteClick
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          name="descricao"
          value={editFormData.descricao}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="number"
          min="0.00"
          step="0.01"
          pattern="([0-9]{1,3}).([0-9]{1,3})"
          required="required"
          name="preco"
          value={editFormData.preco}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="tipo"
          value={editFormData.tipo}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="number"
          required="required"
          name="desconto"
          value={editFormData.desconto}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="isAvailable"
          value={editFormData.isAvailable}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
        <button type="button" onClick={() => handleDeleteClick(editFormData._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Editable;