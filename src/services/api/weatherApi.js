import { API_KEY, API_PREFIX } from "../../common/constants";
import axiosClient from "./axiosCLient";

export const weatherApi = {
  fetchWeather(params) {
    const url = `${API_PREFIX}/data/2.5/weather`;
    return axiosClient.get(url, {
      params: {
        ...params,
        appid: API_KEY,
        lang: "vi",
        units: "metric",
      },
    });
  },
};
