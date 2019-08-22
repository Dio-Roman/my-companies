import React, { useState } from "react";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import SavedCompany from "../SavedCompany/SavedCompany";
import "./style.scss";
import { Link } from "react-router-dom";

const AddNewComp = () => {
  const [list, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [savedComp, setSavedComp] = useState([]);

  const MyContext = React.createContext();

  const sendReq = e => {
    if (e.target.value.length >= 3) {
      fetch(
        `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party`,
        {
          method: "post",
          body: JSON.stringify({
            count: 3,
            query: document.querySelector("#company").value
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
          setData(data.suggestions);
        })
        .catch(err => {
          console.error(err);
          return Promise.resolve([]);
        });
    }
  };

  const showInfo = e => {
    let aboutComp = list.filter(el => el.data.inn == e.target.id);
    setInfo(aboutComp);
  };

  const addToSaved = info => {
    setSavedComp([...savedComp, ...info]);
    // isSaved()
  };

  //   const isSaved = () => {
  // console.log(savedComp);

  //   }

  const deleteCompany = e => {
    setSavedComp([...savedComp].filter(el => el.data.inn != e.target.id));
  };

  return (
  
    <div className="wrap">
      <h1>Мои организации</h1>
      <nav className="nav">
        <Link to={`/`}>
          <p className="nav__item nav__item_active">Новая организация</p>
        </Link>
        <Link to={`/saved`}>
          <p className="nav__item">
            Сохраненные организации
            <span className="nav__count-saved"> ({savedComp.length})</span>
          </p>
        </Link>
      </nav>
      <main className="main-new-comp">
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
          />
        </label>

        <ul className="main-new-comp__list">
          {list.map(el => (
            <li key={el.data.inn} id={el.data.inn} onClick={e => showInfo(e)}>
              {el.value}
            </li>
          ))}
        </ul>

        {info.length == 1 ? (
          <>
            <CompanyInfo
              title={info[0].value}
              address={info[0].data.address.value}
              director={info[0].data.management.name}
              inn={info[0].data.inn}
              kpp={info[0].data.kpp}
              ogrn={info[0].data.ogrn}
            />
            <button
              className="company-info__save-btn"
              onClick={() => addToSaved(info)}
            >
              {savedComp == 0 ? "Сохранить" : "Сохранено"}
            </button>
          </>
        ) : null}

        <span className="plus-img">
          <span className="plus-img__horizont-line" />
          <span className="plus-img__vertical-line" />
        </span>
        <p className="main-new-comp__plus-text">
          Для добавления новой организации введите ее название, ИНН или адрес.
        </p>
      </main>

      
              <SavedCompany  savedList={savedComp} deleteCompany={deleteCompany}/>

      

    </div>
    
  );
};

export default AddNewComp;
