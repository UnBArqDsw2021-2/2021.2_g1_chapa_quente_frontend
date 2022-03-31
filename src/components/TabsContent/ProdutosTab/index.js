import React, { useState, useEffect } from "react";

export const ProdutosTab = () => {

  // const data = JSON.parse(sessionStorage.getItem('@user'));
  const token = JSON.parse(sessionStorage.getItem('@token'));
  const [produtos, setProdutos] = useState();

  const getData = async () => {
    await fetch('http://localhost:3333/cliente/all', {
      method: 'get',
      headers: {
        authorization: `Bearer ${token}`
      }
    })
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
      {/* {produtos?.map(({ value }) => (console.log(value)))} */}
      {/* {<p>{produtos.lenght !== 0 ? produtos[0] : null}</p>} */}
      {console.log(produtos[0])}
      {/* <ul className="produtos-lista">
        <li className="produtos-item">
          {console.log(produtos)}
        </li>
      </ul> */}
    </div>
  );
}