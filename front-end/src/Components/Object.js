import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";
import HoverInfo from "./Hover-Info";

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

  // Popover
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (itemIndex) => {
    setHoveredItem(itemIndex);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <li
      key={info.id}
      className="object_base text-left flex flex-col mx-6 mb-12 font-bold cursor-pointer"
      onClick={handleClick}
      onMouseEnter={() => handleHover(info)}
      onMouseLeave={() => handleMouseLeave}
    >
      <img
        src={info.thumbnail.path + "." + info.thumbnail.extension}
        alt={info.name || info.title}
        className="img-shadow transition duration-200"
      />
      <HoverInfo info={info} />
    </li>
  );
};

export default Object;
