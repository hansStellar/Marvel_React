import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import Series from "./Pages/Series";

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
          <Route path="/characters" element={<Characters />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
