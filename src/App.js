import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Extra from './pages/Extra';
import Contact from './pages/Contact';
import About from './pages/About';
import ResponsiveNav from "./components/Navbar/Navbar"

function App() {
  return (
    <div className='App'>
      <ResponsiveNav />
      <br></br>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/extra-projects" element={<Extra />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
