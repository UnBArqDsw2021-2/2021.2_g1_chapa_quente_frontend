import React, { Fragment } from "react";
import "./style.css";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import chapaQuenteLogo from "../../assets/chapaQuenteLogo.png"

export const Header = () => {
  return (
    <>
      <header>
        <div className="header-left-div">
          <img src={chapaQuenteLogo} alt="chapaquente logo" />
          <ul className="header-left-list">
            <li>
              <a href="#s">Home</a>
            </li>
            <li>
              <a href="#s">Cardápio</a>
            </li>
            <li>
              <a href="#s">ChapaQuenters</a>
            </li>
          </ul>
        </div>

        <div className="header-right-div">
          <ul className="header-right-list">
            <li><a href="#s">
              < MdOutlineLocalGroceryStore color="#F98942" size={30} />
            </a></li>
            <li>entrar/logar</li>
          </ul>
        </div>
      </header>
      <hr className="header-divider" />
    </>
  );
};
