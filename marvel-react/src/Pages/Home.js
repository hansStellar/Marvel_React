import React, { useState } from "react";
import Hero from "../Components/Hero.js";
import { useSelector } from "react-redux";

const Home = () => {
  const characters = useSelector((state) => state.characters.characters);
  console.log(characters);

  return (
    <div className="container m-auto">
      {characters.length >= 1 ? (
        <div className="sm:columns-1 md:columns-2 lg:columns-3">
          <ul>
            {characters.map((item, index) => {
              return <Hero hero={item} key={index} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="">
          <p>Please, start browsing characters in the input above</p>
        </div>
      )}
    </div>
  );
};

export default Home;
