import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";
const Navbar = () => {
  // State
  const [searchNav, setSearchNav] = useState("");
  const [mode, setMode] = useState("Characters");

  // Router
  const navigate = useNavigate();

  // Global State
  const { myState, setMyState } = useContext(AppContext);

  // Search
  const search = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      if (mode == "Characters") {
        fetch(
          `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchNav}&apikey=3f4ab6aff6e18d2f75c901bd8594fcad`
        )
          .then((response) => response.json())
          .then(async (data) => {
            await setMyState(data.data.results);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (mode == "Series") {
        fetch(
          `https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${searchNav}&apikey=3f4ab6aff6e18d2f75c901bd8594fcad`
        )
          .then((response) => response.json())
          .then(async (data) => {
            await setMyState(data.data.results);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (mode == "Comics") {
        fetch(
          `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${searchNav}&apikey=3f4ab6aff6e18d2f75c901bd8594fcad`
        )
          .then((response) => response.json())
          .then(async (data) => {
            await setMyState(data.data.results);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  // Functions
  const handleInputChange = (event) => {
    setSearchNav(event.target.value);
  };
  const changeMode = (event) => {
    setMode(event.target.value);
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
          <select className="text-black" onChange={changeMode}>
            <option value="Characters">Characters</option>
            <option value="Series">Series</option>
            <option value="Comics">Comics</option>
          </select>
        </label>
      </form>
    </nav>
  );
};

export default Navbar;
