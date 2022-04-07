import React, { useState, useEffect } from 'react';
import api from '../../services';
import './style.css';
import { Loading } from '../Loading';
import { NavTabItem } from '../NavTabItem';
import { NavTabContent } from '../NavTabContent';
import { ProdutosTab } from "../TabsContent/ProdutosTab"
import { UsuariosTab } from '../TabsContent/UsuariosTab';

export const NavTab = () => {
  const [produtos, setProdutos] = useState();
  const [load, setload] = useState(true);

  const getData = async () => {
    try {
      const response = await api.get('/sanduiche');

      setProdutos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (produtos !== undefined) {
      setload(false);
    } else {
      setload(true);
    }
  }, [produtos]);

  const [activeTab, setActiveTab] = useState('produtos');
  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div className="nav-tab-div">
          <ul className="nav">
            <li>
              <NavTabItem
                title="Produtos"
                id="produtos"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </li>
            <li>
              <NavTabItem
                title="Usuários"
                id="usuarios"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </li>
          </ul>
          <div className="outlet">
            <NavTabContent id="produtos" activeTab={activeTab}>
              <ProdutosTab produtosResponse={produtos}/>
            </NavTabContent>
            <NavTabContent id="usuarios" activeTab={activeTab}>
              <UsuariosTab />
            </NavTabContent>
          </div>
        </div>
      )}
    </>
  );
};
