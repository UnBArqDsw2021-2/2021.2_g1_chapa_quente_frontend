import React from "react";
import './style.css'

export const NavTabItem = ({ id, title, activeTab, setActiveTab }) => {

  const handleClick = () => {
    setActiveTab(id);
  }

  return (
    <button id={activeTab === id ? "nav-tab-active" : "" } type="button" onClick={handleClick}>
      {title}
    </button>
  );
}