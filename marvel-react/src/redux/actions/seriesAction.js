import { setSeries, setSerie } from "../reducers/seriesReducers";

export const setSeriesAction = (searchQuery) => (dispatch) => {
  fetch();
};

export const setSerieAction = (searchQuery) => (dispatch) => {
  if (searchQuery.type == "search") {
    const apiKey = "3f4ab6aff6e18d2f75c901bd8594fcad";
    fetch(`${searchQuery.serie}?apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.results[0]);
        dispatch(setSerie(data.data.results[0]));
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(setSerie(searchQuery));
  }

  if (searchQuery.type == "dragged") {
    dispatch(setSerie(searchQuery.serie));
  }
};
