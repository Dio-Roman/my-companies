import React, { useState,    } from "react";
import "./style.scss";

const SavedCompany = ({ savedList, deleteCompany }) => {
  const [more, setMore] = useState(false);

  const toggle = () => {
    setMore(!more);
  };
  
  // const value = useContext(MyContext);

  return (
    <>
      {savedList.map(el => (
        <div className="saved-company" key={el.data.inn}>
          <h3 className="saved-company__title-company">{el.value}</h3>
          <ul className="saved-company__numbers-company numbers-list">
            <li className="numbers-list__item">
              <p>ИНН</p>
              <p>{el.data.inn}</p>
            </li>
            {more && (
              <>
                <li className="numbers-list__item">
                  <p>КПП</p>
                  <p>{el.data.kpp}</p>
                </li>
                <li className="numbers-list__item">
                  <p>ОГРН</p>
                  <p>{el.data.ogrn}</p>
                </li>
              </>
            )}
          </ul>
          {more && (
            <section className="saved-company__text-company">
              <h6>Юридический адрес</h6>
              <p>{el.data.address.value}</p>
              <h6>Генеральный директор</h6>
              <p>{el.data.management.name}</p>
            </section>
          )}

          <button
            id={el.data.inn}
            className="saved-company__delete-btn"
            onClick={e => deleteCompany(e)}
          />
          <button className="saved-company__save-btn" onClick={() => toggle()}>
            {!more ? "подробнее" : "скрыть подробности"}
          </button>
        </div>
      ))}
    </>
  );
};

export default SavedCompany;
