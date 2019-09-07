import React, { useState, useRef, FC, BaseSyntheticEvent } from "react";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import SavedCompany from "../SavedCompany/SavedCompany";
import PlusBlock from "../PlusBlock/PlusBlock";
import Nav from "../Nav/Nav";

import "./style.scss";
import { Link } from "react-router-dom";
import { number } from "prop-types";
import ICompanyItem from "../../models/companyItem";
// import { Promise } from "q";
// import { resolve } from "path";

interface IAddNewCompProps {
  savedComp: any;
  addToSaved: any;
  // deleteCompany: any;
}

const AddNewComp: FC<IAddNewCompProps> = ({ savedComp, addToSaved }) => {
  const [list, setList] = useState<any[]>([]);
  const [info, setInfo] = useState<any[]>([]);

  const [inputText, setInput] = useState("");
  // const inputRef = useRef<HTMLInputElement>();

  const sendReq = (e: BaseSyntheticEvent) => {
    setInfo([]);
    setInput(e.target.value);
    if (e.target.value.length >= 3) {
      fetch(
        `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party`,
        {
          method: "post",
          body: JSON.stringify({
            count: 3,
            // query: document.querySelector("#company").value
            // query:inputRef.value
            query: inputText
          }),
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: "Token a446ed2b04a9149dca2bf7fb74360cd922baceed"
          }
        }
      )
        .then(data => {
          return data.json();
        })
        .then(data => {
          setList(data.suggestions);
        })
        .catch(err => {
          console.error(err);
          // return Promise.resolve([]);
        });
    }
  };

  const showInfo = (e: BaseSyntheticEvent) => {
    let aboutComp = list.filter((el: any) => el.data.inn == e.target.id);
    setInfo(aboutComp);
    if (info.length != 0) {
      setList([]);
    }
  };

  // const autoComplete = (aboutComp) => {
  // setSavedComp([...savedComp, ...info]);
  // document.querySelector("#company").value = aboutComp[0].value;
  // console.log(info[0].value)
  // };

  return (
    <>
      <h3 className="main-new-comp__title">Организация или ИП</h3>
      <label>
        <input
          className="main-new-comp__input"
          id="company"
          type="text"
          name="company"
          placeholder="Введите название, ИНН или адрес организации"
          autoComplete="off"
          onChange={sendReq}
          // ref={inputRef}
          value={inputText}
        />
      </label>

      {list.length != 0 ? (
        <ul className="main-new-comp__list list">
          {list.map((el: any) => (
            <li
              key={el.data.inn}
              className="list__item"
              id={el.data.inn}
              onClick={e => showInfo(e)}
            >
              <h6 className="list-item__h6">{el.value}</h6>
              <p>
                {el.data.inn}
                {/* <span>  </span> 
              {'  '}  */}
                г.{el.data.address.data.city}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <PlusBlock />
      )}

      {info.length == 1 ? (
        <section className="info-wrap">
          <CompanyInfo
            title={info[0].value}
            postalCode={info[0].data.address.data.postal_code}
            address={info[0].data.address.value}
            director={info[0].data.management.name}
            inn={info[0].data.inn}
            kpp={info[0].data.kpp}
            ogrn={info[0].data.ogrn}
            // clearData={clearData}
          />
          {savedComp.some((el: any) => el.data.inn == info[0].data.inn) ? (
            <p>
              <span>&#10004;</span>Сохранено
            </p>
          ) : (
            <button className="save-btn" onClick={() => addToSaved(info)}>
              Сохранить
            </button>
          )}
        </section>
      ) : null}
    </>
  );
};

export default AddNewComp;
