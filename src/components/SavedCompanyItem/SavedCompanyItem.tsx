import React, { useState, FC, BaseSyntheticEvent } from "react";
import "./style.scss";

interface ISavedCompanyItemProps {
  key: number;
  id: number;
  value: string;
  deleteCompany(e: BaseSyntheticEvent): void;
  inn: number;
  kpp: number;
  ogrn: number;
  address: string;
  management: string;
}

const SavedCompanyItem: FC<ISavedCompanyItemProps> = ({
  key,
  id,
  value,
  deleteCompany,
  inn,
  kpp,
  ogrn,
  address,
  management
}) => {
  const [more, setMore] = useState<boolean>(false);

  const toggle = (): void => {
    setMore(!more);
  };

  return (
    <div className="saved-company" key={key}>
      <h3 className="saved-company__title-company">{value}</h3>
      <button
        id={id}
        className="saved-company__delete-btn"
        onClick={(e: BaseSyntheticEvent) => deleteCompany(e)}
      />
      <ul className="saved-company__numbers-company numbers-list">
        <li className="numbers-list__item">
          <p>
            <span className="text-company__p">ИНН </span>
            {inn}
          </p>
        </li>
        {more && (
          <>
            <li className="numbers-list__item">
              <p>
                <span className="text-company__p">КПП </span>
                {kpp}
              </p>
            </li>
            <li className="numbers-list__item">
              <p>
                <span className="text-company__p">ОГРН </span>
                {ogrn}
              </p>
            </li>
          </>
        )}
      </ul>
      {more && (
        <section className="saved-company__text-company text-company">
          <p>
            <span className="text-company__p">Юридический адрес </span>
            {address}
          </p>
          <p>
            <span className="text-company__p">Генеральный директор </span>
            {management}
          </p>
        </section>
      )}

      <button className="saved-company__more-btn" onClick={() => toggle()}>
        {!more ? "подробнее" : "скрыть подробности"}

        <span
          className={
            !more ? "arrow-pic arrow-pic_down" : "arrow-pic arrow-pic_up"
          }
        ></span>
      </button>
    </div>
  );
};

export default SavedCompanyItem;
