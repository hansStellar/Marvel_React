import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setSerieAction } from "../redux/actions/seriesAction";
import { useDispatch } from "react-redux";

const About = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Character
  const character = useSelector((state) => state.characters.character);
  return (
    <div class="container m-auto p-12">
      {character && Object.keys(character).length !== 0 ? (
        <div className="text-left">
          <div className="my-6 max-w-[600px] mx-auto">
            <h2 className="font-bold text-4xl mb-4">{character.name}</h2>
            <p>{character.description}</p>
          </div>
          <img
            src={character.thumbnail.path + "." + character.thumbnail.extension}
          />

          <div className="my-6 max-w-[600px] mx-auto">
            <h3 className="text-4xl font-bold mb-4">Series:</h3>
            <ul className="list-disc">
              {character.series.items.map((serie, index) => {
                return (
                  <li
                    onClick={async () => {
                      await dispatch(
                        setSerieAction({
                          serie: serie.resourceURI,
                          type: "search",
                        })
                      );
                      navigate("/series");
                    }}
                  >
                    {serie.name}
                  </li>
                );
              })}
            </ul>
          </div>

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

export default About;
