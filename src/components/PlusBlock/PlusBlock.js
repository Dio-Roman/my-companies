import React from "react";
import "./style.scss";

const PlusBlock = () => {
  return (
    <div className="plus-block">
      <span className="plus-img">
        <span className="plus-img__horizont-line" />
        <span className="plus-img__vertical-line" />
      </span>
      <p className="plus-text">
        Для добавления новой организации введите ее название, ИНН или адрес.
      </p>
    </div>
  );
};

export default PlusBlock;
