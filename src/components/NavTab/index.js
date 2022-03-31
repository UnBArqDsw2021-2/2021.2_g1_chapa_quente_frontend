import React, { useState, useEffect } from 'react';
import './style.css';

import { NavTabItem } from '../NavTabItem';
import { NavTabContent } from '../NavTabContent';
// import { ProdutosTab } from "../TabsContent/ProdutosTab"
import { UsuariosTab } from '../TabsContent/UsuariosTab';
import api from '../../services';
import { Loading } from '../Loading';

export const NavTab = () => {
  const token = JSON.parse(sessionStorage.getItem('@token'));

  const [produtos, setProdutos] = useState();
  const [load, setload] = useState(true);

  const getData = async () => {
    try {
      const response = await api.get('/cliente/all', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

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
              {/* <ProdutosTab produtos={produtos !== undefined ? produtos : []}/> */}
              {produtos.map(data => (
                <p>{data.nome}</p>
              ))}
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
