import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
// import { Footer } from '../components/Footer';
import { ProtectedLayout } from '../components/ProtectedLayout';
import { ListaCardapio } from '../components/ListaCardapio';
import { PerfilUsuario } from '../components/PerfilUsuario';
import { Login } from '../components/Login';
import { CadastroUsuario } from '../components/CadastroUsuario';
import { NavTab } from '../components/NavTab';
import { CadastroProduto } from '../components/CadastroProduto';

export const RoutesChapa = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={ <NavTab /> } />
        <Route exact path="/cardapio" element={<h1>Cardápio</h1>} />
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route exact path="/cardapio" element={<ListaCardapio />} />
        <Route exact path="/chapaquenters" element={<h1>ChapaQuenters</h1>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/carrinho" element={<h1>Carrinho</h1>} />
        <Route exact path="/cadastro" element={<CadastroUsuario />} />
        <Route exact path="/cadastro-produto" element={<CadastroProduto />} />
        <Route
          exact
          path="/perfil"
          element={
            <ProtectedLayout>
              <PerfilUsuario />
            </ProtectedLayout>
          }
        />
        <Route path="*" element={<h1>Pagina Não Encontrada</h1>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};
