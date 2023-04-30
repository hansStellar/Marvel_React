import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Serie = ({ serieId }) => {
  // Router DOM
  const location = useLocation();
  const { id } = location.state;
  const navigate = useNavigate();

  // Character
  const [serie, setSerie] = useState({});

  // Search
  fetch(
    `https://gateway.marvel.com:443/v1/public/series/${id}?apikey=3f4ab6aff6e18d2f75c901bd8594fcad`
  )
    .then((response) => {
      if (!response.ok) {
        return new Error("Something has gone wrong, please try again");
      }
      return response.json();
    })
    .then((data) => {
      return setSerie(data.data.results[0]);
    })
    .catch((error) => {
      return console.log(error);
    });

  return (
    <div class="container m-auto p-12">
      {serie && Object.keys(serie).length !== 0 ? (
        <div className="text-left">
          {/* Object */}
          <div className="my-6 max-w-[600px] mx-auto">
            <h2 className="font-bold text-4xl mb-4">{serie.name}</h2>
            <p>{serie.description}</p>
          </div>
          <img src={serie.thumbnail.path + "." + serie.thumbnail.extension} />

          {/* Characters */}
          <div className="my-6 max-w-[600px] mx-auto">
            <h3 className="text-4xl font-bold mb-4">Series:</h3>
            <ul className="list-disc">
              {serie.series.items.map((serie, index) => {
                return (
                  <li
                    onClick={async () => {
                      navigate("/series");
                    }}
                  >
                    {serie.name}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Comics */}
          <div className="my-6 max-w-[600px] mx-auto">
            <h3 className="text-4xl font-bold mb-4">Comics:</h3>
            <ul className="list-disc">
              {serie.comics.items.map((comic, index) => {
                return (
                  <li>
                    <a
                      href={comic.resourceURI}
                      title={`Click here and to see the ${comic.name} comic`}
                    >
                      {comic.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <p>Nothing has been found</p>
        </div>
      )}
    </div>
  );
};

export default Serie;
