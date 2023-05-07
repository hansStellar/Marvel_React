import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";

const Object = ({ info }) => {
  // Global State
  const { myState, setMyState } = useContext(AppContext);

  // Router
  const navigate = useNavigate();

  // Functions
  const handleClick = async () => {
    if (myState.type === "character") return navigate(`/character/${info.id}`);

    if (myState.type === "serie") return navigate(`/serie/${info.id}`);

    if (myState.type === "comic") return navigate(`/comic/${info.id}`);
  };

  return (
    <li
      className="text-left flex flex-col mx-6 mb-12 font-bold hover:scale-110 transition duration-200"
      onClick={handleClick}
    >
      <img
        src={info.thumbnail.path + "." + info.thumbnail.extension}
        alt={info.name || info.title}
        className="shadow-xl"
      />
      <h2 className="text-center font-thin text-5xl mt-4 truncate ...">
        {info.name || info.title}
      </h2>
    </li>
  );
};

export default Object;
