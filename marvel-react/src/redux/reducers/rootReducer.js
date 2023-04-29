import { combineReducers } from "@reduxjs/toolkit";
import { characters } from "./charactersReducers";
import { series } from "./seriesReducers";

const rootReducer = combineReducers({
  // Add reducers here
  characters: characters.reducer,
  series: series.reducer,
});

export default rootReducer;
