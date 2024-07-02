import { useContext } from "react";
import React from "react";
import { InputContext } from "../Store/Contextprovider";

const Result = () => {

  const {temp , weatherstate , feelsLike , humidity , windspeed} = useContext(InputContext)
 
  return (
    <>
        <div className="container text-center" > {weatherstate} </div>
      <div class="card m-3 " style={{width:"90%"}}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center ">Temperature : {temp}  </li>
          <li class="list-group-item text-center ">Feels like : {feelsLike}  </li>
          <li class="list-group-item text-center ">Humidity : {humidity} </li>
          <li class="list-group-item text-center ">Wind speed : {windspeed} </li>
        </ul>
      </div>
    </>
  );
};

export default Result;
