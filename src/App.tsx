import React, { useState, BaseSyntheticEvent } from "react";
import "./app.scss";
import AddNewComp from "./components/AddNewComp/AddNewComp";
import SavedCompany from "./components/SavedCompany/SavedCompany";
import Nav from "./components/Nav/Nav";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps
} from "react-router-dom";

import ICompanyItem from "./models/companyItem";
import { any } from "prop-types";

function App() {
  const [savedComp, setSavedComp] = useState<ICompanyItem[]>([]);

  const addToSaved = (info: any): void => {
    setSavedComp([...savedComp, ...info]);
  };

  const deleteCompany = (e: BaseSyntheticEvent<EventTarget>): void => {
    setSavedComp(
      [...savedComp].filter((el: any) => el.data.inn != e.target.id)
    );
  };

  return (
    <Router>
      <div className="wrap">
        <h1>Мои организации</h1>
        <Nav savedComp={savedComp} />
        <main className="main-new-comp">
          <Switch>
            {/* <Route exact path="/" component={AddNewComp} /> */}
            <Route
              exact
              path="/"
              render={() => (
                <AddNewComp addToSaved={addToSaved} savedComp={savedComp} />
              )}
            />

            <Route
              exact
              path="/saved"
              render={() => (
                <SavedCompany
                  savedComp={savedComp}
                  deleteCompany={deleteCompany}
                />
              )}
            />
            {/* <SavedCompany/> */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
