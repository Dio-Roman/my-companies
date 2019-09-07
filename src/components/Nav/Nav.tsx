import React, { useState, FC } from "react";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import SavedCompany from "../SavedCompany/SavedCompany";
import "./style.scss";
import { NavLink, RouteComponentProps } from "react-router-dom";
import { type } from "os";
import ICompanyItem from "../../models/companyItem";
// import INavProps from "../../models/INavProps";

interface INavProps {
  savedComp: ICompanyItem[];
}

const Nav: FC<INavProps> = ({ savedComp }) => {
  return (
    <nav className="nav">
      <NavLink
        to={`/`}
        className="nav__item "
        activeClassName="nav__item_active"
        exact={true}
      >
        Новая организация
      </NavLink>
      <NavLink
        to={`/saved`}
        className="nav__item"
        activeClassName="nav__item_active"
      >
        Сохраненные организации
        <span className="nav__count-saved"> ({savedComp.length})</span>
      </NavLink>
    </nav>
  );
};

export default Nav;
