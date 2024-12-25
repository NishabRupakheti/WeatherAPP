import React, { useContext } from "react";
import { InputContext } from "../Store/Contextprovider";
import axios from "axios";
import { CiSearch } from "react-icons/ci";

const Button = () => {
  const {
    input,
    error,
    setTemp,
    setWeatherstate,
    setFeelsLike,
    setHumidity,
    setWindSpeed,
    seterror,
  } = useContext(InputContext);

  const fetchData = async () => {
    const apiKey = "351610ddc4e310074582a97cd299619f";
    const geocodeUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`;

    try {
      const geocodeResponse = await fetch(geocodeUrl);
      const geocodeData = await geocodeResponse.json();

      if (geocodeData.cod !== 200) {
        throw new Error("Invalid location");
      }
      seterror(false)
      const lat = geocodeData.coord.lat;
      const lon = geocodeData.coord.lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();

      console.log(weatherData);
      setTemp(Math.round(weatherData.main.temp - 273.15));
      setFeelsLike(Math.round(weatherData.main.feels_like - 273.15));
      setHumidity(weatherData.main.humidity);
      setWindSpeed(weatherData.wind.speed);
      setWeatherstate(weatherData.weather[0].description)


    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <button
      className="btn btn-outline-dark m-1 btn-outline-info rounded-4 "
      style={{ padding: "15px" }}
      onClick={fetchData}
    >
      <CiSearch />{" "}
    </button>
  );
};

export default Button;
