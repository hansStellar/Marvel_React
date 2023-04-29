import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";

const Navbar = () => {
  // State
  const [searchNav, setSearchNav] = useState("");

  // Global State
  const { myState, setMyState } = useContext(AppContext);

  // Search
  const search = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      fetch(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchNav}&apikey=3f4ab6aff6e18d2f75c901bd8594fcad`
      )
        .then((response) => response.json())
        .then((data) => {
          setMyState(data.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // Functions
  const handleInputChange = (event) => {
    setSearchNav(event.target.value);
  };

  return (
    <nav>
      <form className="columns-6 my-12 flex justify-center">
        {/* Search Bar */}
        <label class="relative block">
          <input
            class="text-black placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search any character..."
            type="text"
            name="search"
            onChange={handleInputChange}
            onKeyDown={search}
          />
        </label>
      </form>
    </nav>
  );
};

export default Navbar;
