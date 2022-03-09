import React from 'react';
import { BsFacebook, BsTwitter, BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import ChapaQuenteLogo from '../../assets/logoChapaQuenteBranco-03.png';
import './style.css';

export const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <div className="footer-div">
        <ul className="footer-left-list">
          <li>
            <a href="#s">
              <span className="footer-icon-span">
                <MdLocationPin />
              </span>
              Rua dos Bobos, S/N - Brasília
            </a>
          </li>
          <li>
            <a href="#s">
              <span className="footer-icon-span">
                <BsFillTelephoneFill />
              </span>
              61 - 3321-3030/4002-88922
            </a>
          </li>
          <li>
            <a href="https://github.com/UnBArqDsw2021-2/2021.2_G1_chapa_quente">
              <span className="footer-icon-span">
                <AiFillGithub />
              </span>
              2021.2 - ChapaQuente
            </a>
          </li>
        </ul>

        <ul>
          <li>
            {today.getHours() > 16 && today.getHours() <= 23 ? (
              <img
                className="footer-ChapaQuenteLogo footer-logo-aberto"
                src={ChapaQuenteLogo}
                alt="logo-footer"
              />
            ) : (
              <img
                className="footer-ChapaQuenteLogo footer-logo-fechado"
                src={ChapaQuenteLogo}
                alt="logo-footer"
              />
            )}
          </li>
        </ul>
        <ul className="footer-right-list">
          <li>
            <a href="#s">
              <span className="footer-icon-span">
                <BsTwitter />
              </span>
              chapaQuenter
            </a>
          </li>
          <li>
            <a href="#s">
              <span className="footer-icon-span">
                <BsFacebook />
              </span>
              chapa-quente
            </a>
          </li>
          <li>
            <a href="#s">
              <span className="footer-icon-span">
                <AiFillInstagram />
              </span>
              @chapaquente
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
