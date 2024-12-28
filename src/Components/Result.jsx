import { useContext } from "react";
import React from "react";
import { InputContext } from "../Store/Contextprovider";

const Result = () => {
  const { temp, weatherstate, feelsLike, humidity, windspeed, name } = useContext(InputContext);

  return (
    <div className="container">
      <h2 className="text-center text-primary mb-4">Weather Report for: <span className="text-capitalize">{name}</span></h2>
      
      <div className="card shadow-lg rounded-lg">
        <div className="card-header bg-info text-white text-center fs-4">
          Current Weather Condition: <strong>{weatherstate}</strong>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Temperature:</strong> <span className="fs-5">{temp}°C</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Feels Like:</strong> <span className="fs-5">{feelsLike}°C</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Humidity:</strong> <span className="fs-5">{humidity}%</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Wind Speed:</strong> <span className="fs-5">{windspeed} km/h</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Result;
