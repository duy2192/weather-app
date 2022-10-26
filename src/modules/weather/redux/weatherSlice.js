import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: {},
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeather(state, action) {},
    fetchWeatherSuccess(state, action) {
      state.weather = action.payload;
    },
  },
});

// Actions
export const weatherActions = weatherSlice.actions;
// Selectors

// Reducer
const weatherReducer = weatherSlice.reducer;
export default weatherReducer;
