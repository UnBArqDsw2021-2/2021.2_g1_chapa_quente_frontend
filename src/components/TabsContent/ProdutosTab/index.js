import React, { useState, useEffect } from "react";

export const ProdutosTab = () => {

  const [produtos, setProdutos] = useState();

  const getData = async () => {
    await fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
      .then(response => response.json())
      .then(json => {
        setProdutos(json);
      })
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="produtos-tab-div">
      <ul className="produtos-lista">
        <li className="produtos-item">
          {}
          {console.log(produtos)}
        </li>
      </ul>
    </div>
  );

}