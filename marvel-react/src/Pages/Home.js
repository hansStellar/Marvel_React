import React, { useContext, useEffect, useRef, useState } from "react";
import Object from "../Components/Object.js";
import AppContext from "../AppContext.js";

const Home = () => {
  // Global State
  const { myState, setMyState } = useContext(AppContext);

  return (
    <div className="container m-auto">
      {myState.length >= 1 ? (
        <div className="sm:columns-1 md:columns-2 lg:columns-3">
          <ul>
            {myState.map((item, index) => {
              return <Object info={item} key={index} />;
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
