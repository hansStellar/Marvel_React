import { combineReducers } from "@reduxjs/toolkit";
import { characters } from "./charactersReducers";

const rootReducer = combineReducers({
  // Add reducers here
  characters: characters.reducer,
});

export default rootReducer;
