import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Series from "./Pages/Series";

// Navbar
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </Router>
  );
}

export default App;
