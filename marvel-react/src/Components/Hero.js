import React from "react";
import { setCharacterAction } from "../redux/actions/charactersAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Hero = ({ hero }) => {
  const character = useSelector((state) => state.characters.character);
  const theresCharacter = Boolean(character);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(setCharacterAction(hero));
    if (theresCharacter) {
      navigate("/about");
    }
  };

  return (
    <li
      className="text-left flex flex-col mx-6 mb-12 font-bold hover:scale-110 transition duration-200"
      onClick={handleClick}
    >
      <img
        src={hero.thumbnail.path + "." + hero.thumbnail.extension}
        alt={hero.name}
        className="shadow-xl"
      />
      <h2 className="text-center font-thin text-5xl mt-4 truncate ...">
        {hero.name}
      </h2>
    </li>
  );
};

export default Hero;
