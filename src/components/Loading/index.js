import React from 'react';
import ReactLoading from 'react-loading';
import './styles.css'

export const Loading = () => {
  return (
    <div id="loading-container">
      <ReactLoading type="bars" color="#f98942" height={150} width={100} />
    </div>
  );
};
