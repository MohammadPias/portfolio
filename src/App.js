import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/home/Home/Home';
import T2P from './components/home/Projects/t2p/T2P';
import Medicare from './components/home/Projects/Medicare/Medicare';
import BabyCare from './components/home/Projects/BabyCare/BabyCare';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/t2p" element={<T2P />} />
          <Route path="/babyCare" element={<BabyCare />} />
          <Route path="/mediCare" element={<Medicare />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
