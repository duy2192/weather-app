import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Search from "./components/Search";
import WeatherDetail from "./components/WeatherDetail";
import { weatherActions } from "./redux/weatherSlice";
import style from "./style/style.module.css";

const cityList = [
  {
    id: 0,
    text: "Hà Nội",
    value: {
      lat: 21.028511,
      lon: 105.804817,
    },
  },
  {
    id: 1,
    text: "TP.Hồ Chí Minh",
    value: {
      lat: 10.762622,
      lon: 106.660172,
    },
  },
  {
    id: 2,
    text: "Huế",
    value: {
      lat: 16.463713,
      lon: 107.590866,
    },
  },
];

export const WeatherModule = () => {
  const dispatch = useDispatch();
  const handleChangeCity = (value) => {
    dispatch(weatherActions.fetchWeather(cityList[value].value));
  };

  useEffect(() => {
    dispatch(weatherActions.fetchWeather(cityList[0].value));
  }, [dispatch]);
  return (
    <div className={style.root}>
      <div className="mx-auto w-96">
        <Search
          data={cityList}
          onChange={handleChangeCity}
          placeholder="Tìm kiếm"
          defaultValue={0}
          className="pt-20"
        />
      </div>

      <div className="mx-auto w-96 mt-10">
        <WeatherDetail />
      </div>
    </div>
  );
};
