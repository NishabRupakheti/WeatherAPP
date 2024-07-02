import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";

const NothingToshow = () => {
  return (
    <div className="container-fluid mt-3 text-center ">
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
