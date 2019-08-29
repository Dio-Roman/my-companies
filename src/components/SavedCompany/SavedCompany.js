import React, { useState,    } from "react";
import "./style.scss";

const SavedCompany = ({ savedComp, deleteCompany }) => {
  const [more, setMore] = useState(false);

  const toggle = () => {
    setMore(!more);
  };
  
  // const value = useContext(MyContext);

  return (
    <>
      {savedComp.map(el => (
        <div className="saved-company" key={el.data.inn}>
          <h3 className="saved-company__title-company">{el.value}</h3>
          <button
            id={el.data.inn}
            className="saved-company__delete-btn"
            onClick={e => deleteCompany(e)}
          />
          <ul className="saved-company__numbers-company numbers-list">
            <li className="numbers-list__item">
              <p><span className="text-company__p">ИНН   </span>{el.data.inn}</p>
            </li>
            {more && (
              <>
                <li className="numbers-list__item">
                  <p><span className="text-company__p">КПП   </span>{el.data.kpp}</p>
                </li>
                <li className="numbers-list__item">
                  <p><span className="text-company__p">ОГРН   </span>{el.data.ogrn}</p>
                </li>
              </>
            )}
          </ul>
          {more && (
            <section className="saved-company__text-company text-company">
              <p><span className="text-company__p">Юридический адрес   </span>{el.data.address.value}</p>
              <p><span className="text-company__p">Генеральный директор   </span>{el.data.management.name}</p>
            </section>
          )}

          
          <button className="saved-company__more-btn" onClick={() => toggle()}>
            {!more ? "подробнее" : "скрыть подробности"}

          <span className={!more ? "arrow-pic arrow-pic_down" : "arrow-pic arrow-pic_up"}></span>
          </button>
        </div>
      ))}
    </>
  );
};

export default SavedCompany;
