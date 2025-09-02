import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./feature/home/Home";
import Explore from "./feature/explore/Explore";  // <- sesuaikan path milikmu


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
