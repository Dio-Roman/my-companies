import React, { useState } from "react";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import SavedCompany from "../SavedCompany/SavedCompany";
import "./style.scss";
import { NavLink  } from "react-router-dom";

const Nav = ({savedComp}) => {
  return (
    <nav className="nav">
        <NavLink  
          to={`/`} 
          className="nav__item "  
          activeClassName="nav__item_active"
          exact={true}
          >
          Новая организация
        </NavLink >
        <NavLink  to={`/saved`} className="nav__item" activeClassName="nav__item_active">
          
            Сохраненные организации
            <span className="nav__count-saved"> ({savedComp.length})</span>
          
        </NavLink >
      </nav>
  )
}

export default Nav;