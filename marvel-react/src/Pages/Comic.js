import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Character = ({ serieId }) => {
  // Router DOM
  const location = useLocation();
  const { id } = location.state;
  const navigate = useNavigate();

  // Character
  const [character, setCharacter] = useState({});

  // Search
  fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=3f4ab6aff6e18d2f75c901bd8594fcad`
  )
    .then((response) => {
      if (!response.ok) {
        return new Error("Something has gone wrong, please try again");
      }
      return response.json();
    })
    .then((data) => {
      return setCharacter(data.data.results[0]);
    })
    .catch((error) => {
      return console.log(error);
    });

  return (
    <div class="container m-auto p-12">
      {character && Object.keys(character).length !== 0 ? (
        <div className="text-left">
          {/* Object */}
          <div className="my-6 max-w-[600px] mx-auto">
            <h2 className="font-bold text-4xl mb-4">{character.name}</h2>
            <p>{character.description}</p>
          </div>
          <img
            src={character.thumbnail.path + "." + character.thumbnail.extension}
          />

          {/* Series */}
          <div className="my-6 max-w-[600px] mx-auto">
            <h3 className="text-4xl font-bold mb-4">Series:</h3>
            <ul className="list-disc">
              {character.series.items.map((serie, index) => {
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
              {character.comics.items.map((comic, index) => {
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

export default Character;
