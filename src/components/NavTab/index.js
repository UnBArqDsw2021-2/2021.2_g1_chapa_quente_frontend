import React, { useState, useEffect } from 'react';
import api from '../../services';
import './style.css';
import { Loading } from '../Loading';
import { NavTabItem } from '../NavTabItem';
import { NavTabContent } from '../NavTabContent';
import { AdicionalTab } from '../TabsContent/AdicionalTab';
import { SanduicheTab } from "../TabsContent/SanduicheTab";
import { SobremesaTab } from "../TabsContent/SobremesaTab";
import { AcompanhamentoTab } from '../TabsContent/AcompanhamentoTab';
import { BebidaTab } from '../TabsContent/BebidaTab';
import { UsuariosTab } from '../TabsContent/UsuariosTab';

export const NavTab = () => {
  const [sanduiche, setSanduiche] = useState();
  const [sobremesa, setSobremesa] = useState();
  const [bebida, setBebida] = useState();
  const [acompanhamento, setAcompanhamento] = useState();
  const [adicional, setAdicional] = useState();

  const [load, setload] = useState(true);

  const getData = async () => {
    try {
      const response = await api.get('/sanduiche');
      setSanduiche(response.data);
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await api.get('/sobremesa');
      setSobremesa(response.data);
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await api.get('/bebida');
      setBebida(response.data);
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await api.get('/acompanhamento');
      setAcompanhamento(response.data);
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await api.get('/adicional');
      setAdicional(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (sanduiche !== undefined && sobremesa !== undefined && acompanhamento !== undefined&& bebida !== undefined&& adicional !== undefined) {
      setload(false);
    } else {
      setload(true);
    }
  }, [sanduiche, sobremesa, bebida, acompanhamento, adicional]);

  const [activeTab, setActiveTab] = useState('sanduiche');
  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div className="nav-tab-div">
          <ul className="nav">
            <li>
              <NavTabItem
                title="Sanduíche"
                id="sanduiche"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </li>
            <li>
              <NavTabItem
                title="Sobremesa"
                id="sobremesa"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </li>
            <li>
              <NavTabItem
                title="Adicional"
                id="adicional"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </li>
            <li>
              <NavTabItem
                title="Acompanhamentos"
                id="acompanhamento"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </li>
            <li>
              <NavTabItem
                title="Bebidas"
                id="bebida"
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
            <NavTabContent id="sanduiche" activeTab={activeTab}>
              <SanduicheTab sanduicheResponse={sanduiche}/>
            </NavTabContent>
            <NavTabContent id="sobremesa" activeTab={activeTab}>
              <SobremesaTab sobremesaResponse={sobremesa}/>
            </NavTabContent>
            <NavTabContent id="acompanhamento" activeTab={activeTab}>
              <AcompanhamentoTab acompanhamentoResponse={acompanhamento} />
            </NavTabContent>
            <NavTabContent id="adicional" activeTab={activeTab}>
              <AdicionalTab adicionalResponse={adicional} />
            </NavTabContent>
            <NavTabContent id="bebida" activeTab={activeTab}>
              <BebidaTab bebidaResponse={bebida} />
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
