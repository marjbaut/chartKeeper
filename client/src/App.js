import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Login } from "./components/Login";
import { Registration } from './components/Registration';
import {Home} from './components/Home'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Registration/>} />
        <Route path="/home" element={<Home/>} />

      </Routes>
    </Router>
    </>  
  );
}

export default App;
