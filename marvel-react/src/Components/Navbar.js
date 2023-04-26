import React, { useState } from "react";
import { searchCharacters } from "../redux/actions/charactersAction";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  // Search
  const [searchNav, setSearch] = useState("");
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  // Redux
  const dispatch = useDispatch();

  // Send String to Redux
  const requestMarvelAPI = (event) => {
    event.preventDefault();
    dispatch(searchCharacters(searchNav));
  };

  return (
    <nav>
      <form
        onSubmit={requestMarvelAPI}
        className="columns-6 my-12 flex justify-center"
      >
        {/* Search Bar */}
        <label class="relative block">
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search any character..."
            type="text"
            name="search"
            value={searchNav}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </nav>

  );
};

export default Navbar;
