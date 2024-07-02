import React, { useContext } from "react";
import { InputContext } from "../Store/Contextprovider";
import axios from "axios";
import { CiSearch } from "react-icons/ci";


const Button = () => {
  const {
    input,
    setTemp,
    setWeatherstate,
    setFeelsLike,
    setHumidity,
    setWindSpeed,
    seterror,
    error,
  } = useContext(InputContext);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: `https://open-weather13.p.rapidapi.com/city/${input}/EN`,
      headers: {
        "x-rapidapi-key": "73918fb350mshaf79356cbee72b9p11ee84jsn42d2f144a22d",
        "x-rapidapi-host": "open-weather13.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setWeatherstate(response.data["weather"][0]["main"]);
      setTemp(response.data["main"]["temp"]);
      setFeelsLike(response.data["main"]["feels_like"]);
      setHumidity(response.data["main"]["humidity"]);
      setWindSpeed(response.data["wind"]["speed"]);
      seterror(false);
    } catch (error) {
      seterror(true);
    }
  };

  return (
    <button
      className="btn btn-outline-dark m-1 btn-outline-info rounded-4 "
      style={{ padding: "15px"}}
      onClick={fetchData}
    >
      <CiSearch />
      {" "}
    </button>
  );
};

export default Button;
