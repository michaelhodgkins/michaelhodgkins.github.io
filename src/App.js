import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ResponsiveNav from "./components/Navbar/Navbar"

function App() {
  return (
    <div className='App'>
      <ResponsiveNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
