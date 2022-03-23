import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import chapaQuenteLogo from '../../assets/chapaQuenteLogo.png';
import { useAuth } from '../../context/AuthContext';

export const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const { isAuthenticate } = useAuth();

  console.log(isAuthenticate);
  return (
    <>
      <header>
        <div className="header-left-div">
          <Link to="/">
            <img src={chapaQuenteLogo} alt="Chapa Quente Logo" />
          </Link>
          <ul className="header-left-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cardapio">Cardápio</Link>
            </li>
            <li>
              <Link to="/chapaquenters">ChapaQuenters</Link>
            </li>
          </ul>
        </div>

        <div className="header-right-div">
          <ul className="header-right-list">
            <li>
              <Link to="/carrinho">
                <MdOutlineLocalGroceryStore color="#F98942" size={30} />
              </Link>
            </li>
            <Link to="/login">
              {/* <li>Entrar</li> */}
              <button type="button" className="btnPrimary">
                {isAuthenticate ? 'Sair' : 'Entrar'}
              </button>
            </Link>
          </ul>
        </div>
      </header>
      <hr className="header-divider" />
    </>
  );
};
