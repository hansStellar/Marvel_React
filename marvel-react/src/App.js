import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Character from "./Pages/Character";
import Serie from "./Pages/Serie";
import Comic from "./Pages/Comic";

// Navbar
import Navbar from "./Components/Navbar";

// App Context
import AppContext from "./AppContext";
import { useState } from "react";

function App() {
  const [myState, setMyState] = useState({});

  return (
    <AppContext.Provider value={{ myState, setMyState }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/comic/:id" element={<Comic />} />
          <Route path="/serie/:id" element={<Serie />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
