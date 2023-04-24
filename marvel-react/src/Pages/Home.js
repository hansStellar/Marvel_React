import React, { useState } from "react";
import Hero from "../Components/Hero.js";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const requestMarvelAPI = (event) => {
    event.preventDefault();
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&apikey=3f4ab6aff6e18d2f75c901bd8594fcad`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={requestMarvelAPI}>
        {/* Search Bar */}
        <input type="text" value={search} onChange={handleInputChange} />
        {/* Button Search */}
        <button type="submit">Search</button>
      </form>

      {data.length >= 1 ? (
        <div>
          <ul>
            {data.map((item, index) => {
              return <Hero hero={item} />;
            })}
          </ul>
        </div>
      ) : (
        <p>Please, start browsing characters in the input above</p>
      )}
    </div>
  );
};

export default Home;
