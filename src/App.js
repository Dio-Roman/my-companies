import React, { useState } from "react";
import "./App.scss";
import AddNewComp from "./components/AddNewComp/AddNewComp";
import SavedCompany from "./components/SavedCompany/SavedCompany";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  const [listq, setDataq] = useState(['asad']);


  return (
    <Router>
      <div className="App">
        <Switch >
          {/* <Route exact path="/" component={AddNewComp} /> */}
          <Route exact path="/" render={()=><AddNewComp test={listq}/>} />

          <Route exact path="/saved" component={SavedCompany} />
          {/* <SavedCompany/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
