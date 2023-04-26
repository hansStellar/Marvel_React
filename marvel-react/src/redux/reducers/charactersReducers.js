import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
};

export const characters = createSlice({
  name: "charactersReducers",
  initialState,
  reducers: {
    // Actions here
    setCharacters: (state, action) => {
      return {
        ...state,
        characters: action.payload,
      };
    },
  },
});

export const { setCharacters } = characters.actions;
