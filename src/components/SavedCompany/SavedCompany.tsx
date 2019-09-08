import React, { useState, FC, BaseSyntheticEvent } from "react";
import SavedCompanyItem from "../SavedCompanyItem/SavedCompanyItem";
import ICompanyItem from "../../models/companyItem";


interface ISavedCompanyProps {
  savedComp: ICompanyItem[];
  deleteCompany(e: BaseSyntheticEvent):void;
}

const SavedCompany: FC<ISavedCompanyProps> = ({ savedComp, deleteCompany }) => {
  const [more, setMore] = useState<boolean>(false);

  const toggle = (): void => {
    setMore(!more);
  };

  return (
    <>
      {savedComp.map((el: any) => (
        <SavedCompanyItem
        key={el.data.inn}
        id={el.data.inn}
        value={el.value}
        deleteCompany={deleteCompany}
        inn={el.data.inn}
        kpp={el.data.kpp}
        ogrn={el.data.ogrn}
        address={el.data.address.value}
        management={el.data.management.name}
        />
      ))}
    </>
  );
};

export default SavedCompany;
