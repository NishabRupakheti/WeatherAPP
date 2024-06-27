import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Components/Header'
import InputField from './Components/InputField'
import Result from './Components/Result'


const App = () => {
  return (
    <div className="app-component container">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="fieldContainer">
        <InputField />
      </div>
      <div className="resultContainer">
        <Result/>
      </div>

    </div>
  )
}

export default App