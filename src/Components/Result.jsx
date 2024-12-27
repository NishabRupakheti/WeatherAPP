import { useContext } from "react";
import React from "react";
import { InputContext } from "../Store/Contextprovider";

const Result = () => {
  const { temp, weatherstate, feelsLike, humidity, windspeed , input , name, setName } =
    useContext(InputContext);

  return (
    <>
    <h2>Weather report in : {name} </h2>
      <div className="container text-center"> Condition : {weatherstate} </div>
      <div className="card m-3 " style={{ width: "90%" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center ">
            Temperature : {temp}° C{" "}
          </li>
          <li className="list-group-item text-center ">
            Feels like : {feelsLike}° C{" "}
          </li>
          <li className="list-group-item text-center ">
            Humidity : {humidity}{" %"}
          </li>
          <li className="list-group-item text-center ">
            Wind speed : {windspeed} Km/hr{" "}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Result;
