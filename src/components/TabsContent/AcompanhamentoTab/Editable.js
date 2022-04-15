import React from "react";
import { FaSave } from 'react-icons/fa'
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { GiCancel } from 'react-icons/gi'
import './style.css';

const Editable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleDeleteClick
}) => {
  return (
    <tr>
      <td>
        <input className="input-produto-form"
          type="text"
          required="required"
          name="descricao"
          value={editFormData.descricao}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input className="input-produto-form"
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
        <input className="input-produto-form"
          type="text"
          required="required"
          name="tipo"
          value={editFormData.tipo}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input className="input-produto-form"
          type="number"
          required="required"
          name="desconto"
          value={editFormData.desconto}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select className="input-produto-form"
           name="isAvailable"
          value={editFormData.isAvailable}
          onChange={handleEditFormChange}
        >
          <option className="input-produto-form" value="true">Sim</option>
          <option className="input-produto-form" value="false">Não</option>
        </select>
      </td>
      <td>
        <button className="button-produto-edit" type="submit"> <FaSave size={20} /></button>
        <button className="button-produto-edit" type="button" onClick={handleCancelClick}>
          <GiCancel size={20} />
        </button>
        <button className="button-produto-edit" type="button" onClick={() => handleDeleteClick(editFormData._id)}>
          <RiDeleteBin2Fill size={20} />
        </button>
      </td>
    </tr>
  );
};

export default Editable;