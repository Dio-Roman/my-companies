import React, { FC, useEffect } from "react";
import "./style.scss";
import ICompanyItem from "../../models/companyItem";

const CompanyInfo: FC<ICompanyItem> = ({
  title,
  postalCode,
  address,
  director,
  inn,
  kpp,
  ogrn,
  info,
  setList
}) => {
  
  useEffect(()=>{
    setList([])
  },[info])

  return (
    <div className="company-info">
      <h3 className="company-info__title-company">{title}</h3>
      <section className="company-info__text-company">
        <h5>Юридический адрес</h5>
        <p>
          {postalCode}, {address}
        </p>
        <h5>Генеральный директор</h5>
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
