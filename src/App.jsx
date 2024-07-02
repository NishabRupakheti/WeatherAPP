import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import InputField from "./Components/InputField";
import Result from "./Components/Result";
import NothingToshow from "./Components/NothingToshow";
import Contextprovider from "./Store/Contextprovider";
import Errorlogic from "./Components/Errorlogic";

const App = () => {

  return (
    <Contextprovider>
      <div className="app-component container">
        <div className="headerContainer">
          <Header />
        </div>
        <div className="fieldContainer">
          <InputField />
        </div>
        <div className="resultContainer">
          <Errorlogic/>
        </div>
      </div>
    </Contextprovider>
  );
};

export default App;
