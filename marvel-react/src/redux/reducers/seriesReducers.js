import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  series: [],
  serie: {},
};

export const series = createSlice({
  name: "seriesReducers",
  initialState,
  reducers: {
    setSeries: (state, action) => {
      return {
        ...state,
        series: action.payload,
      };
    },
    setSerie: (state, action) => {
      return {
        ...state,
        serie: action.payload,
      };
    },
  },
});

export const { setSeries, setSerie } = series.actions;
