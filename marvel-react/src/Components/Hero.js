import React from "react";

const Hero = ({ hero }) => {
  console.log(hero);

  return <li>{hero.name}</li>;
};

export default Hero;
