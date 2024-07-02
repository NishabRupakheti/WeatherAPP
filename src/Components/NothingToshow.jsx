import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";

const NothingToshow = () => {
  return (
    <div className="container mt-3 mb-3 ">
      {" "}
      <span>
        <TiWeatherSunny />
      </span>{" "}
      Nothing to show{" "}
      <span>
        <TiWeatherCloudy />
      </span>{" "}
    </div>
  );
};

export default NothingToshow;
