import React, { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Characters = ({ serieId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Character
  const [character, setCharacter] = useState();

  // Searc for character
  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${serieId}&apikey=3f4ab6aff6e18d2f75c901bd8594fcad`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div class="container m-auto p-12">
      {character && Object.keys(character).length !== 0 ? (
        <div className="text-left">
          {/* Character */}
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
          <p>No character found</p>
        </div>
      )}
    </div>
  );
};

export default Characters;
