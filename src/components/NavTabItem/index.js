import React from "react";

export const NavTabItem = ({ id, title, activeTab, setActiveTab }) => {

  const handleClick = () => {
    setActiveTab(id);
  }

  return (
    <button className={activeTab === id ? "active" : "" } type="button" onClick={handleClick}>
      {title}
    </button>
  );
}