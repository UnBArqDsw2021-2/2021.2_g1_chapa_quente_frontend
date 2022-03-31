import React from "react";

export const ProdutosTab = ({ produtos }) => {

  if (produtos !== undefined) {
    return (
      <div className="produtos-tab-div">
        {produtos.map((produto) => console.log(produto))}
      </div>
    );
  }
  return (
    <p>deu ruim</p>
  );

}
