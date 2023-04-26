import React, { useState } from "react";
import SearchCharacter from "../redux/actions/searchCharacter";

const Navbar = () => {
  const [data, setData] = useState("hola");

  return (
    <form onSubmit={SearchCharacter(data)}>
      <input />
      <button type="submit" />
    </form>
  );
};

export default Navbar;
