import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import Nav from "./Components/Nav/Nav";
import Alumnos from "./Pages/Alumnos"
import Incripcion from "./Pages/Incripcion"

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumnos" element={<Alumnos />} />
        <Route path="/incripcion" element={<Incripcion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
