/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import api from '../../../services'
import ReadOnly from './ReadOnly';
import Editable from './Editable'
import './style.css';

export const AdicionalTab = ({ adicionalResponse }) => {
  const token = JSON.parse(sessionStorage.getItem('@token'));

  const [adicional, setadicional] = useState(adicionalResponse);
  const [addFormData, setAddFormData] = useState({
    descricao: "",
    preco: "",
    tipo: "",
    desconto: "",
    isAvailable: "",
  });

  const [editFormData, setEditFormData] = useState({
    descricao: "",
    preco: "",
    tipo: "",
    desconto: "",
    isAvailable: "",
  });

  const [editprodutoId, setEditprodutoId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleDeleteClick = (produtoId) => {
    window.location.reload(false);
    api.delete(`adicional/delete/:${produtoId}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  };

  const handleEditFormSubmit = async (event) => {
    const editedproduto = {
      _id: editprodutoId,
      descricao: editFormData.descricao,
      preco: editFormData.preco,
      tipo: editFormData.tipo,
      desconto: editFormData.desconto,
      isAvailable: editFormData.isAvailable
    };
    try {
      const res = await api.put(`adicional/update/:${editedproduto._id}`,
        editFormData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (event, produto) => {
    event.preventDefault();
    setEditprodutoId(produto._id);

    const formValues = {
      _id: produto._id,
      descricao: produto.descricao,
      preco: produto.preco,
      tipo: produto.tipo,
      desconto: produto.desconto,
      isAvailable: produto.isAvailable,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditprodutoId(null);
  };

  return (
    <div className="adicional-tab">
      <form onSubmit={handleEditFormSubmit}>
        <table className='table-produto'>
          <thead>
            <tr>
              <th className='th-produto-edit'>Descicao</th>
              <th className='th-produto-edit'>Preço</th>
              <th className='th-produto-edit'>Tipo</th>
              <th className='th-produto-edit'>Desconto</th>
              <th className='th-produto-edit'>Disponível</th>
              <th className='th-produto-edit'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {adicional.map((produto) => (
              <>
                {editprodutoId === produto._id ? (
                  <Editable
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                ) : (
                  <ReadOnly
                    produto={produto}
                    handleEditClick={handleEditClick}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>

    </div>
  );

}
