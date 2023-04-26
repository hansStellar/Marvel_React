import React from "react";

const Hero = ({ hero }) => {
  return (
    <li className="text-left flex flex-col mx-6 mb-12 font-bold">
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
