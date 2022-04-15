import React from 'react';
import './style.css';
import sanduicheHome from '../../assets/sanduiche-home.png'; 
import { ListaCardapio } from '../ListaCardapio';

export const HomePage = () => {
  return (
    <section>
      <div className='Home-div'>
        <ul className='Home-ul'>
          <li className='Home-li home-li-left'>
            <p>
              Pode vim<br />
              <span className='span-home-text'>CHAPA</span>, <br />
              que aqui é<br />
              <span className='span-home-text'>QUENTE</span>.
            </p>
          </li>
          <li className='Home-li home-li-right'>
            <img src={sanduicheHome} alt="Sanduiche" />
          </li>
        </ul>
      </div>
      <ListaCardapio/>
      <hr className="home-divider" />
    </section>
  )
}
