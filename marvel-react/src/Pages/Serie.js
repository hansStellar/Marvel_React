import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Serie = ({ serieId }) => {
  // Router DOM
  const { id } = useParams();
  const navigate = useNavigate();

  // Character
  const [serie, setSerie] = useState({});

  // Search
  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/series/${id}?apikey=3f4ab6aff6e18d2f75c901bd8594fcad`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setSerie(data.data.results[0]);
      })
      .catch((error) => {
        return console.log(error);
      });
  }, [id]);

  return (
    <div class="container m-auto p-12">
      {serie && Object.keys(serie).length !== 0 ? (
        <div className="text-left">
          {/* Object */}
          <div className="my-6 max-w-[600px] mx-auto">
            <h2 className="font-bold text-4xl mb-4">{serie.title}</h2>
            <p>{serie.description}</p>
          </div>
          <img src={serie.thumbnail.path + "." + serie.thumbnail.extension} />

          {/* Characters */}
          {serie.characters.items.length != 0 ? (
            <div className="my-6 max-w-[600px] mx-auto">
              <h3 className="text-4xl font-bold mb-4">Characters:</h3>
              <ul className="list-disc">
                {serie.characters.items.map((character, index) => {
                  return (
                    <li
                      key={index}
                      className="cursor-pointer hover:text-blue-500 hover:underline"
                      onClick={async () => {
                        let id = character.resourceURI.split("/").pop();
                        navigate(`/character/${id}`);
                      }}
                    >
                      {character.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className="my-6 max-w-[600px] mx-auto">
              <h3 className="text-4xl font-bold mb-4">
                No characters have been found
              </h3>
            </div>
          )}
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
