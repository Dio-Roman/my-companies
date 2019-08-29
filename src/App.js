import React, { useState } from "react";
import "./app.scss";
import AddNewComp from "./components/AddNewComp/AddNewComp";
import SavedCompany from "./components/SavedCompany/SavedCompany";
import Nav from "./components/Nav/Nav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

  const [savedComp, setSavedComp] = useState([]);

  const addToSaved = info => {
    setSavedComp([...savedComp, ...info]);
  };


  const deleteCompany = e => {
    setSavedComp([...savedComp].filter(el => el.data.inn != e.target.id));
  };

  return (
    <Router>
      <div className="wrap">
        <h1>Мои организации</h1>
        <Nav savedComp={savedComp}/>
        <main className="main-new-comp">
          <Switch >
            {/* <Route exact path="/" component={AddNewComp} /> */}
            <Route exact path="/" render={()=><AddNewComp addToSaved={addToSaved} savedComp={savedComp}/>} />

            <Route exact path="/saved" render={()=> <SavedCompany savedComp={savedComp} deleteCompany={deleteCompany}/>} />
            {/* <SavedCompany/> */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
