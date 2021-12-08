import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/home/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
