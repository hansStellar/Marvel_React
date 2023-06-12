import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  character: {},
};

export const characters = createSlice({
  name: "charactersReducers",
  initialState,
  reducers: {
    // Reducers here
    setCharacters: (state, action) => {
      return {
        ...state,
        characters: action.payload,
      };
    },
    setCharacter: (state, action) => {
      return {
        ...state,
        character: action.payload,
      };
    },
  },
});

export const { setCharacters, setCharacter } = characters.actions;
