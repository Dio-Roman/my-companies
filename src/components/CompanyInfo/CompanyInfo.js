import React, { Component } from "react";
import "./style.css";

const CompanyInfo = ({ title, address, director, inn, kpp, ogrn }) => {
  return (
    <div className="company-info">
      <h3 className="company-info__title-company">{title}</h3>
      <section className="company-info__text-company">
        <h6>Юридический адрес</h6>
        <p>{address}</p>
        <h6>Генеральный директор</h6>
        <p>{director}</p>
      </section>
      <ul className="company-info__numbers-company numbers-list">
        <li className="numbers-list__item">
          <p>ИНН</p>
          <p>{inn}</p>
        </li>
        <li className="numbers-list__item">
          <p>КПП</p>
          <p>{kpp}</p>
        </li>
        <li className="numbers-list__item">
          <p>ОГРН</p>
          <p>{ogrn}</p>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default CompanyInfo;
