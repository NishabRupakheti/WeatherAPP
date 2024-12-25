import { useContext } from "react";
import React from "react";
import { InputContext } from "../Store/Contextprovider";

const Result = () => {
  const { temp, weatherstate, feelsLike, humidity, windspeed } =
    useContext(InputContext);

  return (
    <>
      <div className="container text-center"> {weatherstate} </div>
      <div className="card m-3 " style={{ width: "90%" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center ">
            Temperature : {temp}° F{" "}
          </li>
          <li className="list-group-item text-center ">
            Feels like : {feelsLike}° F{" "}
          </li>
          <li className="list-group-item text-center ">
            Humidity : {humidity}{" "}
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
