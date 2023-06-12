import { setCharacters, setCharacter } from "../reducers/charactersReducers.js";

export const searchCharacters = (searchQuery) => (dispatch) => {
  fetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchQuery}&apikey=3f4ab6aff6e18d2f75c901bd8594fcad`
  )
    .then((response) => response.json())
    .then((data) => {
      dispatch(setCharacters(data.data.results));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const setCharacterAction = (searchQuery) => (dispatch) => {
  dispatch(setCharacter(searchQuery));
};
