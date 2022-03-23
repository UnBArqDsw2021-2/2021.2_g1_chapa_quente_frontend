import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProtectedLayout } from '../components/ProtectedLayout';

export const RoutesChapa = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route exact path="/cardapio" element={<h1>Cardápio</h1>} />
        <Route exact path="/chapaquenters" element={<h1>ChapaQuenters</h1>} />
        <Route exact path="/login" element={<h1>Login</h1>} />
        <Route exact path="/carrinho" element={<h1>Carrinho</h1>} />
        <Route
          exact
          path="/perfil"
          element={
            <ProtectedLayout>
              <h1>perfil</h1>
            </ProtectedLayout>
          }
        />
        <Route path="*" element={<h1>Pagina Não Encontrada</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};
