import React from "react";
import { TiWeatherCloudy, TiWeatherSunny } from "react-icons/ti";

const NothingToshow = () => {
  return (
    <div className="container mt-5 mb-5 text-center">
      <div className="alert alert-info d-flex justify-content-center align-items-center">
        <span className="fs-1 text-warning me-2">
          <TiWeatherSunny />
        </span>
        <span className="fs-3 text-muted mx-2">Nothing to show</span>
        <span className="fs-1 text-primary ms-2">
          <TiWeatherCloudy />
        </span>
      </div>
    </div>
  );
};

export default NothingToshow;
