/* eslint-disable react/prop-types */
import React from 'react';
import './styles.css';

export const Modal = ({ children }) => {
  return (
    <div id="container-modal">
      <div id="wrapper-modal">{children}</div>
    </div>
  );
};
