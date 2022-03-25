import React from "react";

export const NavTabContent = ({id, activeTab, children}) => {

  return(
    activeTab === id ? <div className="nav-tab-content-div">
      { children }
    </div>
    :
    null
  );

}