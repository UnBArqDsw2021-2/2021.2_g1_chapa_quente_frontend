import React, { useState, useEffect } from "react";
import './style.css'
import { NavTabItem } from '../NavTabItem'
import { NavTabContent } from "../NavTabContent";
import { ProdutosTab } from "../TabsContent/ProdutosTab"
import { UsuariosTab } from "../TabsContent/UsuariosTab"

export const NavTab = () => {
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

  const [activeTab, setActiveTab] = useState("produtos");
  return (
    <div className="nav-tab-div">
      <ul className="nav">
        <li>
          <NavTabItem title="Produtos" id="produtos" activeTab={activeTab} setActiveTab={setActiveTab} />
        </li>
        <li>
          <NavTabItem title="Usuários" id="usuarios" activeTab={activeTab} setActiveTab={setActiveTab} />
        </li>
      </ul>
      <div className="outlet">
        <NavTabContent id="produtos" activeTab={activeTab}>
          <ProdutosTab produtos={produtos !== undefined ? produtos : []}/>
        </NavTabContent>
        <NavTabContent id="usuarios" activeTab={activeTab}>
          <UsuariosTab />
        </NavTabContent>
      </div>
    </div>
  );
};