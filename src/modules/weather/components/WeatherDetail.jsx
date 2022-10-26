import React from "react";
import { useSelector } from "react-redux";
import { dateFormatVN } from "utils";
import { selectWeather } from "../redux/weatherSelector";

const WeatherDetail = () => {
  const weather = useSelector(selectWeather);
  if (!weather.name) return null;
  return (
    <div className="bg-gray-50 rounded-md p-4">
      <div className="flex justify-center flex-col">
        <p className="text-3xl text-center font-medium">{weather?.name}</p>
        <p className="text-md mt-4">{dateFormatVN}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <img
              className="w-20 h-auto"
              src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
              alt={weather?.weather[0]?.description}
            />
            <span className="text-4xl">
              {Math.round(weather.main.temp)} <sup>&deg;C</sup>
            </span>
          </div>

          <div>
            <span className="text-lg">
              {Math.round(weather.main.temp_min)} <sup>&deg;C</sup>/
              {Math.round(weather.main.temp_max)} <sup>&deg;C</sup>
            </span>
            <p className="text-sm">
              Cảm giác như {Math.round(weather.main.feels_like)}
              <sup>&deg;C</sup>
            </p>

            <p className="text-sm capitalize">
              {weather?.weather[0]?.description}
            </p>
          </div>
        </div>

        <div className="flex"></div>
      </div>
    </div>
  );
};

export default WeatherDetail;
